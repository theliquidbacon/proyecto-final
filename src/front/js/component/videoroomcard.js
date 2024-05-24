import React from "react";
import deportes from "../../img/deportes.jpeg";
import videojuegos from "../../img/videojuegos.jpeg";
import ravera from "../../img/ravera.jpeg";
import introvertidoarquitecto from "../../img/introvertidoarquitecto.jpeg";
import introvertidosgamers from "../../img/introvertidosgamers.jpeg";
import introvertidoviajero from "../../img/introvertidoviajero.jpeg";
import cine from "../../img/cine.jpeg";
import "../../styles/videoroom.css";


export const VideoRoomCard = () => {
    return (

        <div className="container-card" style={{ marginTop: "45px" }}>
            <div className="display-card-container">
                <div className="name-card-container">
                    <h1>Deportes</h1>
                </div>

                <div className="image-card-container">
                    <img src={deportes} className="imagevideo" />
                </div>
                <div className="button-card-container">
                    <a href="/videocalldeportes">
                        <button type="button" className="btn btn-success">
                            Unete a la sala
                        </button>
                    </a>
                </div>
            </div>

            {/* ------------------------------------------- */}
            <div className="display-card-container">
                <div className="name-card-container">
                    <h1>Videojuegos </h1>
                </div>

                <div className="image-card-container">
                    <img className="imagevideo" src={videojuegos} />
                </div>

                <div className="button-card-container">
                    <a href="/videocallvideojuegos">
                        <button type="button" className="btn btn-success">
                            Unete a la sala
                        </button>
                    </a></div>
            </div>

            {/* ------------------------------------------- */}

            <div className="display-card-container">
                <div className="name-card-container">
                    <h1>Comics y Libros</h1>
                </div>

                <div className="image-card-container">
                    <img src={introvertidosgamers} className="imagevideo" />
                </div>

                <div className="button-card-container">
                    <a href="/videocallgamer">
                        <button type="button" className="btn btn-success">
                            Unete a la sala
                        </button>
                    </a>
                </div>
            </div>

            {/* ------------------------------------------- */}

            <div className="display-card-container">
                <div className="name-card-container">
                    <h1>Series y Peliculas</h1>
                </div>

                <div className="image-card-container">
                    <img src={ravera} className="imagevideo" />
                </div>

                <div className="button-card-container">
                    <a href="/videocallfiesta">
                        <button type="button" className="btn btn-success">
                            Unete a la sala
                        </button>
                    </a>
                </div>
            </div>

            {/* ------------------------------------------- */}

            <div className="display-card-container">
                <div className="name-card-container">
                    <h1>Ellas</h1>
                </div>

                <div className="image-card-container">
                    <img src={introvertidoarquitecto} className="imagevideo" />
                </div>

                <div className="button-card-container">
                    <a href="/videocallarquitecto">
                        <button type="button" className="btn btn-success">
                            Unete a la sala
                        </button>
                    </a>
                </div>
            </div>

            {/* ------------------------------------------- */}

            <div className="display-card-container">
                <div className="name-card-container">
                    <h1>Ellos</h1>
                </div>

                <div className="image-card-container">
                    <img src={introvertidoviajero} className="imagevideo" />
                </div>

                <div className="button-card-container">
                    <a href="/videocallviajero">
                        <button type="button" className="btn btn-success">
                            Unete a la sala
                        </button>
                    </a>
                </div>
            </div>

            {/* ------------------------------------------- */}

            <div className="display-card-container">
                <div className="name-card-container">
                    <h1>Free 4 All todo vale</h1>
                </div>

                <div className="image-card-container">
                    <img src={cine} className="imagevideo" />
                </div>

                <div className="button-card-container">
                    <a href="/videocallcine">
                        <button type="button" className="btn btn-success">
                            Unete a la sala
                        </button>
                    </a>
                </div>
            </div>

        </div>
    );
};
