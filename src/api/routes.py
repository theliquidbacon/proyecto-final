"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from werkzeug.utils import secure_filename
#from app import app


api = Blueprint('api', __name__)
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/signup', methods=['POST'])
def handle_signup():
    request_data = request.get_json(force=True)

    # verifica si el email esta en la base de datos

    if db.session.query(User).filter(User.email == request_data['email']).first():

        # db.session conecta con la base de datos y query hace una busqueda en la tabla de datos User

        return jsonify({"message": "Este email ya está registrado en la base de datos"}), 400

    if db.session.query(User).filter(User.user_name == request_data['user_name']).first():

        return jsonify({"message": "El usuario ya está registrado"}), 400

    # si ha pasado estas dos condiciones sin hacer los if, crea un usuario

    # NEW USER MODEL 

    new_user = User(
        user_name=request_data['user_name'],
        email=request_data['email'],
        profile_img=None,
        password=request_data['password'],
        first_name=request_data['first_name'],
        last_name=request_data['last_name'],
        description=None,
        is_introvert=request_data['is_introvert']
    )
    db.session.add(new_user)
    db.session.commit()

    return jsonify('Se ha añadido usario: ', request_data), 200

#-----------------------------------------------------------------
# LOGIN ROUTE 


@api.route('/login', methods=['POST'])
def login():
    body = request.get_json()
    email = body['email']
    password = body['password']

    user = User.query.filter_by(email=email, password=password).first()

    if user == None:
        return jsonify({"msg": "User or password does not exist!"}), 401

    access_token = create_access_token(identity=user.serialize())

    response_body = {
        "msg": "Token created successfully",
        "token": access_token,
        "email": email,
        "username": user.user_name,
        "is_introvert": user.is_introvert
    }

    return jsonify(response_body), 200

#-----------------------------------------------------------------
# PROFILE 


@api.route('/profile', methods=['GET'])
@jwt_required()
def get_profile():
    current_user = get_jwt_identity()
    current_user_id = current_user['id']

    user = User.query.filter_by(id=current_user_id).first()

    if user:
        return jsonify(user.serialize())
    else:
        return jsonify({'message': 'No user found'}), 404
    

#-----------------------------------------------------------------
# PROFILE <ID>

@api.route('/profile/<int:user_id>', methods=['GET'])
@jwt_required()
def get_id_profile(user_id):
    user = User.query.filter_by(id=user_id).first()

    if user:
        return jsonify(user.serialize())
    else:
        return jsonify({'message': 'No user found'}), 404
    
#-----------------------------------------------------------------
# EDIT PROFILE

@api.route('/editprofile', methods=['POST'])
@jwt_required()
def update_profile():
    current_user = get_jwt_identity()
    current_user_id = current_user['id']

    user = User.query.filter_by(id=current_user_id).first()

    if user:
        if 'user_name' in request.form:
            user.user_name = request.form['user_name']
        if 'description' in request.form:
            user.description = request.form['description'] 
        if 'profile_img' in request.files:  # Check if 'profile_img' is in the files
            profile_img = request.files['profile_img']
            filename = secure_filename(profile_img.filename)
            profile_img.save('/path/to/save/' + filename)
            user.profile_img = '/path/to/save/' + filename  # Save the profile image URL

        db.session.commit()

        return jsonify({'message': 'Profile updated successfully'})
    else:
        return jsonify({'message': 'No user found'}), 404