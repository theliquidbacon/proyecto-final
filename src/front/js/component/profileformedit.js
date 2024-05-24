import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubiendoImagenes from './Subiendoimagenes.js';

export const ProfileFormEdit = () => {
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);


  const navigate = useNavigate();

  const token = localStorage.getItem("miTokenJWT");

  if (!token) {
    console.error('No se encontró el token de autenticación');
    return;
  }

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleProfilePictureChange = (imageUrl) => {
    if (imageUrl) {
      setProfilePicture(imageUrl);
    } else {
      console.error('No image URL provided');
    }
  };


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log("userName:", userName);
    console.log("description:", description);
    console.log("profilePicture:", profilePicture);
    console.log("token:", token);

    const token = localStorage.getItem('miTokenJWT'); // Recupera el token del almacenamiento local

    const formData = new FormData();
    formData.append("user_name", userName);
    formData.append("description", description);
    if (profilePicture) {
      formData.append("profile_img", profilePicture);
  }

    console.log("Datos enviados:", formData);

    const response = await fetch(process.env.BACKEND_URL + "/api/editprofile", {
      method: "POST",
      headers: {
          'Authorization': `Bearer ${token}`
      },
      body: formData
  });

    console.log("Respuesta del servidor:", response);


    if (!response.ok) {
      console.error(`Error: ${response.status}`);
      return;
    }

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="container d-flex justify-content-center">
      <form
        className="bg-white"
        style={{
          height: "auto",
          width: "100%",
          maxWidth: "600px",
          margin: "20px",
          padding: "20px",
          boxShadow: "0 5px 8px rgba(0, 0, 0, 0.1)",
        }}
        onSubmit={handleFormSubmit}
      >
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <SubiendoImagenes onImageUpload={handleProfilePictureChange} />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
              value={userName}
              onChange={handleUserNameChange} style={{ fontSize: "40px", border: "none" }}
            />

          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 d-flex align-items-center">
            <h4 style={{ marginRight: "10px" }}>Cuéntanos un poco sobre ti</h4>

          </div>
          <div className="col-md-12">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: 100 }}
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div>
            <h4>¿Qué te gusta hacer?</h4>
          </div>
          <div className="col-md-12 d-flex ">
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <li style={{ margin: "5px" }}>
                {" "}
                <button> Videojuegos </button>{" "}
              </li>
              <li style={{ margin: "5px" }}>
                {" "}
                <button> Juegos de mesa </button>{" "}
              </li>
              <li style={{ margin: "5px" }}>
                {" "}
                <button> Libros </button>{" "}
              </li>
              <li style={{ margin: "5px" }}>
                {" "}
                <button> Cine </button>{" "}
              </li>
              <li style={{ margin: "5px" }}>
                {" "}
                <button> Viajar </button>{" "}
              </li>
              <li style={{ margin: "5px" }}>
                {" "}
                <button> Cocinar </button>{" "}
              </li>
              <li style={{ margin: "5px" }}>
                {" "}
                <button> Hacer la croqueta </button>{" "}
              </li>
              <li style={{ margin: "5px" }}>
                {" "}
                <button> Viajar </button>{" "}
              </li>
              <li style={{ margin: "5px" }}>
                {" "}
                <button> Comer </button>{" "}
              </li>
              <li style={{ margin: "5px" }}>
                {" "}
                <button> Aprender idiomas </button>{" "}
              </li>
              <li style={{ margin: "5px" }}>
                {" "}
                <button> Programar </button>{" "}
              </li>
              <li style={{ margin: "5px" }}>
                {" "}
                <button> Bailar </button>{" "}
              </li>
              <li style={{ margin: "5px" }}>
                {" "}
                <button> Ir de birras </button>{" "}
              </li>
              <li style={{ margin: "5px" }}>
                {" "}
                <button> Cata de vinos </button>{" "}
              </li>
              <li style={{ margin: "5px" }}>
                {" "}
                <button> Espiar al vecino </button>{" "}
              </li>
              <li style={{ margin: "5px" }}>
                {" "}
                <button> Ver Telecinco </button>{" "}
              </li>
              <li style={{ margin: "5px" }}>
                {" "}
                <button> Música de los 90 </button>{" "}
              </li>
              <li style={{ margin: "5px" }}>
                {" "}
                <button> Música de los 80 </button>{" "}
              </li>
            </ul>
          </div>
        </div>
        <button className="btn btn-success" type="submit" >
          Guarda los cambios
        </button>
      </form>
    </div>
  );
};
