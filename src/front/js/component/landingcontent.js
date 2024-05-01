import React from "react";
import { Link } from "react-router-dom";

export const Landingcontent = () => {
  return (
    <div>

      <div className="bgimg-2">
        <div className="caption">
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-6">
              </div>
              <div className="col-lg-6">
                <h1 className="display-4 text-left">¿Encontrar amigos se te hace difícil por ser introvertido?</h1>
                <p className="lead text-left">Regístrate y descubre nuevas amistades para compartir momentos especiales juntos.</p>
                <Link className="nav-link" to="/signupintrovertido">
                  <button className="buttonjumbo"><span>¡Unete a Shelpen! </span></button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div
          style={{ color: "black", backgroundColor: "#4b4b4b", textAlign: "center", padding: "50px 80px", textAlign: "justify" }}
        >
          <p class="bar-text">La introversión y la extraversión no son estados absolutos, sino que forman parte de un espectro. La mayoría de las personas se encuentran en algún punto intermedio.</p>
        </div>
      </div>

      <div className="bgimg-1">
        <div className="caption">
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="display-4 text-left">¿No te sientes identificado como alguien introvertido?</h1>
                <p className="lead text-left">Si eres una persona extrovertida y amigable únete a nuestra comunidad y crea nuevas amistades alrededor del mundo con Shelpen</p>
                <Link className="nav-link" to="/signupextrovertido">
                  <button className="buttonjumbo"><span>¡Adopta un introvertx!</span></button>
                </Link>
              </div>
              <div className="col-lg-6">
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          color: "black", backgroundColor: "#4b4b4b", textAlign: "center", padding: "50px 80px", textAlign: "justify"
        }}
      >
        <h3 style={{ textAlign: "center" }}>Que queremos lograr</h3>
        <p class="bar-text">La tendencia hacia la introversión o extraversión puede verse influenciada por factores culturales, sociales y económicos específicos de cada región o grupo, explorar estos factores y en como afectan a cada region es muy importante para desarrollar herramientas que permitan mejorar ese entorno y crear habilidades sociales. </p>
      </div>


      <div className="bgimg-3">
        <div className="caption">
          <span className="border" style={{ backgroundColor: "transparent", fontSize: "25px", color: "#f7f7f7" }}>
            SCROLL UP
          </span>
        </div>
      </div>

      <div style={{ position: "relative" }}>
      </div>
    </div>
  );
};
