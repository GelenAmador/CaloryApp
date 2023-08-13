import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsArrowLeftCircleFill, BsFillExclamationCircleFill } from "react-icons/bs";

export default function Navbar() {
  const handleRedirect = () => {
    window.location.href = "../../index.html"; 
  };

  const handleRedirectHelp = () => {
    window.location.href = "../../Informacion.html";
  };

  // Obtén la parte final de la URL actual
  const currentPath = window.location.href.split("/").pop();

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#E0E1E3", height: "115px" }}>
      <div className="container-fluid">

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <img src="src\img\3.png" alt="Logo" style={{ width: "93px", height: "86px", marginLeft: "15px" }} />
          <h1 style={{ width: "697px", height: "102px", margin: "auto", marginLeft:"600px", paddingTop: "25px", color: "#595959", fontWeight: "bold" }}>
            Simulador CaloriApp
          </h1>
          {currentPath !== "Simulador.html" && currentPath !== "Informacion.html" &&  (
            <BsFillExclamationCircleFill size={40} style={{ marginRight: "40px", cursor: "pointer" }}  title="¿Cómo funciona CaloriApp?" onClick={handleRedirectHelp} />

          )}

          {currentPath !== "index.html" && (
            <BsArrowLeftCircleFill size={40} style={{ marginRight: "40px", cursor: "pointer" }}  title="Regresar" onClick={handleRedirect} />
          )}
          
        </div>
      </div>
    </nav>
  );
}


