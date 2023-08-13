import React, { useState } from 'react';
// Importa las bibliotecas de Firebase necesarias
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAg1yWQRW46kU-QaWzXvzkJ8GKFMq_v95E",
    authDomain: "caloryapp-55cdf.firebaseapp.com",
    projectId: "caloryapp-55cdf",
    storageBucket: "caloryapp-55cdf.appspot.com",
    messagingSenderId: "847319174469",
    appId: "1:847319174469:web:b15a679b3b4922d8de422c",
    measurementId: "G-F11SDQCM3X"
};

// Inicializa Firebase con la configuración
firebase.initializeApp(firebaseConfig);

// Inicializa Firestore
const db = firebase.firestore();

export { db };

function App() {
    const [fechaActual, setFechaActual] = useState('');
    const [edad, setEdad] = useState(0);
    const [altura, setAltura] = useState(0);
    const [sexo, setSexo] = useState("");
    const [peso, setPeso] = useState(0);
    const [ejercicio, setEjercicio] = useState(0);
    const [desayuno, setDesayuno] = useState(0);
    const [almuerzo, setAlmuerzo] = useState(0);
    const [cena, setCena] = useState(0);
    const [extras1, setExtras1] = useState(0);
    const [extras2, setExtras2] = useState(0);
    const [extras3, setExtras3] = useState(0);
    const [extras4, setExtras4] = useState(0);
    const [totalCalorias, setTotalCalorias] = useState(0)
    const [CaloriasIdeales, setCaloriasIdeales] = useState(0)



    const handleRedirect = () => {
        // Verificar si todos los campos están llenos
        const inputs = document.querySelectorAll("input");
        const selects = document.querySelectorAll("select");
        const formChecks = document.querySelectorAll(".form-check-input");
        let camposIncompletos = false;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                camposIncompletos = true;
            }
        });

        selects.forEach(select => {
            if (select.value === "selected") {
                camposIncompletos = true;
            }
        });


        if (camposIncompletos) {
            alert("Por favor, completa todos los campos antes de calcular las calorías.");
        } else {
            window.location.href = "../../Simulador.html"; 

        }

    };

    // Dentro de tu función handleCalcularClick
    function handleCalcularClick() {
        // Verificar si todos los campos están llenos
        const inputs = document.querySelectorAll("input");
        const selects = document.querySelectorAll("select");
        const formChecks = document.querySelectorAll(".form-check-input");
        let camposIncompletos = false;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                camposIncompletos = true;
            }
        });

        selects.forEach(select => {
            if (select.value === "selected") {
                camposIncompletos = true;
            }
        });


        if (camposIncompletos) {
            alert("Por favor, completa todos los campos antes de calcular las calorías.");
        } else {

            const totalCalorias = parseInt(desayuno) + parseInt(almuerzo) + parseInt(cena) + parseInt(extras1) + parseInt(extras2) + parseInt(extras3) + parseInt(extras4);
            setTotalCalorias(totalCalorias);
            console.log(totalCalorias)

            if(sexo=='F'){
                const TMB = (10* parseInt(peso)) + (6.25 * parseInt(altura)) - (5 * parseInt(edad)) - 161;
                setCaloriasIdeales(TMB*parseFloat(ejercicio))
                console.log(TMB*parseFloat(ejercicio))

                const currentDate = new Date();
                const formattedDate = currentDate.toLocaleString(); // Opcional: puedes usar otros métodos para formatear la fecha como desees
                setFechaActual(formattedDate);
                console.log(formattedDate)

                // Agrega un documento a una colección
                db.collection('Calorias').add({
                    CaloriasIdeales: TMB*parseFloat(ejercicio),
                    TotalCalorias: totalCalorias,
                    Fecha: formattedDate,
                    Peso: peso,
                    Altura: altura,
                    Edad: edad,
                    Sexo:sexo,
                })
                .then((docRef) => {
                    console.log('Documento agregado con ID:', docRef.id);
                })
                .catch((error) => {
                    console.error('Error al agregar documento:', error);
                });
                
            }else{
                const TMB = (10* parseInt(peso)) + (6.25 * parseInt(altura)) - (5 * parseInt(edad)) + 5;
                setCaloriasIdeales(TMB*parseFloat(ejercicio))
                console.log(TMB*parseFloat(ejercicio))

                const currentDate = new Date();
                const formattedDate = currentDate.toLocaleString(); // Opcional: puedes usar otros métodos para formatear la fecha como desees
                setFechaActual(formattedDate);
                console.log(formattedDate)

                // Agrega un documento a una colección
                db.collection('Calorias').add({
                    CaloriasIdeales: TMB*parseFloat(ejercicio),
                    TotalCalorias: totalCalorias,
                    Fecha: formattedDate,
                    Peso: peso,
                    Altura: altura,
                    Edad: edad,
                    Sexo:sexo,
                })
                .then((docRef) => {
                    console.log('Documento agregado con ID:', docRef.id);
                })
                .catch((error) => {
                    console.error('Error al agregar documento:', error);
                });
            }
        }
    }
    


    return (
    <div className="App">
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "20px" }}>
        <div style={{ width: "500px", height: "300px", backgroundColor: "rgba(255, 255, 255, 0.80)", borderRadius: "20px", marginRight: "50px" }}>
        <div style={{ width: "500px", height: "67px", backgroundColor: "rgba(52, 141, 114, 0.67)", borderRadius: "20px", marginRight: "50px" }}>
            <h1 style={{ fontSize: "27px", textAlign: "center", lineHeight: "67px", margin: "0" }}>Ingresa tus datos personales</h1>
            <div className="input-group input-group-sm mb-3" style={{ padding: "25px 45px 2px"}}>
                <span className="input-group-text border border-2" id="inputGroup-sizing-sm">Edad</span>
                <input type="text" className="form-control border border-2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" maxLength="2" onKeyPress={(event) => {const charCode = event.which ? event.which : event.keyCode; if (charCode < 48 || charCode > 57) {event.preventDefault();}}}
                onChange={(event) => {const selectedValue = event.target.value; setEdad(selectedValue);}}
                />
            </div>
            <div className="input-group input-group-sm mb-3" style={{ padding: "0px 45px 2px" }}>
                <span className="input-group-text border border-2" id="inputGroup-sizing-sm">Altura (cm)</span>
                <input type="text" className="form-control border border-2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" maxLength="3" onKeyPress={(event) => {const charCode = event.which ? event.which : event.keyCode; if (charCode < 48 || charCode > 57) {event.preventDefault();}}}
                onChange={(event) => {const selectedValue = event.target.value; setAltura(selectedValue); }}
                /> 
            </div>
            <div style={{ padding: "0px 45px 13px", marginBottom: "5px" }}>
            <select class="form-select form-select-sm border border-2" aria-label="Small select example" 
                onChange={(event) => {const selectedValue = event.target.value; setSexo(selectedValue); }}>
                <option selected>Sexo</option>
                <option value="F">Femenino</option>
                <option value="M">Masculino</option>
            </select>
            </div>
            <div className="input-group input-group-sm mb-3" style={{ padding: "0px 45px 2px"}}>
                <span className="input-group-text border border-2" id="inputGroup-sizing-sm">Peso (Kg)</span>
                <input type="text" className="form-control border border-2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" maxLength="3" onKeyPress={(event) => {const charCode = event.which ? event.which : event.keyCode; if (charCode < 48 || charCode > 57) {event.preventDefault();}}}
                onChange={(event) => {const selectedValue = event.target.value; setPeso(selectedValue); }} />
            </div>
        </div>
        </div>
        <div style={{ width: "500px", height: "300px", backgroundColor: "rgba(255, 255, 255, 0.80)", borderRadius: "20px" }}>
        <div style={{ width: "500px", height: "67px", backgroundColor: "rgba(52, 141, 114, 0.67)", borderRadius: "20px", marginRight: "50px" }}>
            <h1 style={{ fontSize: "27px", textAlign: "center", lineHeight: "67px", margin: "0" }}>Ejercicio físico</h1>
            <div style={{ padding: "25px 45px 5px", marginBottom: "5px" }}>
                <div class="form-check" >
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="1.2"
                    onChange={(event) => {const selectedValue = event.target.value; setEjercicio(selectedValue); }}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                    Poco o ningún ejercicio
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="1.375"
                    onChange={(event) => {const selectedValue = event.target.value; setEjercicio(selectedValue); }}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                    Ejercicio ligero (1-3 días a la semana)
                </label>
                </div>
                <div class="form-check ">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="1.55"
                    onChange={(event) => {const selectedValue = event.target.value; setEjercicio(selectedValue); }}
                />
                <label class="form-check-label" for="flexRadioDefault3">
                    Ejercicio moderado (3-5 días a la semana)
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" value="1.725"
                    onChange={(event) => {const selectedValue = event.target.value; setEjercicio(selectedValue); }}
                />
                <label class="form-check-label" for="flexRadioDefault4">
                    Ejercicio fuerte ( 6-7 días a la semana)
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" value="1.9"
                    onChange={(event) => {const selectedValue = event.target.value; setEjercicio(selectedValue); }}
                />
                <label class="form-check-label" for="flexRadioDefault5">
                    Ejercicio muy fuerte (dos veces al día, entrenamientos muy duros)
                </label>
                </div>
            </div>
        </div>
        </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "20px" }}>
            <div style={{ width: "1050px", height: "480px", backgroundColor: "rgba(255, 255, 255, 0.80)", borderRadius: "20px"}}>
            <div style={{ width: "1050px", height: "67px", backgroundColor: "rgba(52, 141, 114, 0.67)", borderRadius: "20px"}}>
                <div style={{ display: "flex" }}>
                <div>
                    <h1 style={{ fontSize: "27px", textAlign: "center", lineHeight: "67px", margin: "0" }}>Datos alimenticios</h1>
                    <div style={{ width: "250px", padding: "0px 0px 0px", margin: "20px 30px 0px" }}>
                        <select class="form-select form-select-sm border border-2 " aria-label="Small select example"   
                        onChange={(event) => {const selectedValue = event.target.value; setDesayuno(selectedValue); }}>
                            <option value="0" selected>¿Qué comió en el desayuno?</option>
                            <option value="170">Ensalada de Frutas</option>
                            <option value="269">Cereal con leche</option>
                            <option value="68">Avena</option>
                            <option value="441">Huevo, jamón, frijoles, queso</option>
                            <option value="521">Huevo, frijoles, aguacate, plátano</option>
                            <option value="1000">Baleadas</option>
                            <option value="172">Tostadas con mermelada</option>
                            <option value="283">Sándwich de pollo</option>
                            <option value="224">Sándwich de jamón </option>
                            <option value="568">Plátano, frijoles, mantequilla</option>
                            <option value="333">Panqueques</option>
                            <option value="410">Wafles </option>
                        </select>
                    </div>
                    <div style={{ width: "250px", margin: "20px 30px 0px" }}>
                        <input type="text" className="form-control border border-2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Otro (calorias)" onKeyPress={(event) => {const charCode = event.which ? event.which : event.keyCode; if (charCode < 48 || charCode > 57) {event.preventDefault();}}}   onInput={(event) => {
                        const inputValue = event.target.value;
                        if (inputValue.trim() === "") {
                        event.target.value = "0"; }}}
                        onChange={(event) => {const selectedValue = event.target.value; setExtras1(selectedValue);}}
                        />
                    </div>
                        <div style={{ width: "250px", padding: "15px 0px 0px", margin: "5px 30px 0px" }}>
                        <select class="form-select form-select-sm border border-2 " aria-label="Small select example"
                            onChange={(event) => {const selectedValue = event.target.value; setAlmuerzo(selectedValue); }}>
                            <option value="0" selected>¿Qué comió en el almuerzo?</option>
                            <option value="638">Arroz, carne, ensalada vegetales</option>
                            <option value="348">Arroz chino</option>
                            <option value="497">Pollo, arroz, ensalada vegetales</option>
                            <option value="736">Pasta</option>
                            <option value="900 ">Hamburguesa con papas fritas</option>
                            <option value="266">Pizza</option>
                            <option value="750">Pollo frito con papas fritas</option>
                            <option value="568">Filete pescado, arroz, ensalada vegetales</option>
                            <option value="720">Sopa de res</option>
                            <option value="466">Sopa de mariscos</option>
                            <option value="228">Sopa de pollo</option>
                            <option value="458">Pescado frito con tajadas</option>
                            <option value="290">Ensalada de vegetales con pollo a la plancha</option>
                            <option value="387">Pupusas</option>
                            <option value="320">Ensalada de vegetales</option>
                            <option value="847">Pollo chuco</option>
                        </select>
                        </div>
                        <div style={{ width: "250px", margin: "20px 30px 0px" }}>
                            <input type="text" className="form-control border border-2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Otro (calorias)" onKeyPress={(event) => {const charCode = event.which ? event.which : event.keyCode; if (charCode < 48 || charCode > 57) {event.preventDefault();}}} onInput={(event) => {
                        const inputValue = event.target.value;
                        if (inputValue.trim() === "") {
                        event.target.value = "0"; }}}
                        onChange={(event) => {const selectedValue = event.target.value; setExtras2(selectedValue);}}
                        />
                        </div>
                        <div style={{ width: "250px", padding: "15px 0px 0px", margin: "5px 30px 0px" }}>
                        <select class="form-select form-select-sm border border-2 " aria-label="Small select example"
                        onChange={(event) => {const selectedValue = event.target.value; setCena(selectedValue); }}>
                            <option value="0" selected>¿Qué comió de cena?</option>
                            <option value="441">Huevo, jamón, frijoles, queso</option>
                            <option value="1000">Baleadas</option>
                            <option value="311">Huevo, frijoles, mantequilla</option>
                            <option value="422">Tortilla con quesillo</option>
                            <option value="568">Plátano, frijoles, mantequilla</option>
                            <option value="357">Pollo y ensalada</option>
                            <option value="778">Carne asada</option>
                        </select>
                        </div>
                        <div style={{ width: "250px", margin: "20px 30px 0px" }}>
                            <input type="text" className="form-control border border-2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Otro (calorias)" onKeyPress={(event) => {const charCode = event.which ? event.which : event.keyCode; if (charCode < 48 || charCode > 57) {event.preventDefault();}}} onInput={(event) => {
                        const inputValue = event.target.value;
                        if (inputValue.trim() === "") {
                        event.target.value = "0"; }}}
                        onChange={(event) => {const selectedValue = event.target.value; setExtras3(selectedValue);}}
                        />
                        </div>
                        <div style={{ width: "250px", margin: "20px 30px 0px" }}>
                            <input type="text" className="form-control border border-2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Calorías extras" onKeyPress={(event) => {const charCode = event.which ? event.which : event.keyCode; if (charCode < 48 || charCode > 57) {event.preventDefault();}}} onInput={(event) => {
                        const inputValue = event.target.value;
                        if (inputValue.trim() === "") {
                        event.target.value = "0"; }}}
                        onChange={(event) => {const selectedValue = event.target.value; setExtras4(selectedValue);}}
                        />
                        </div>
                    </div>
                    <div>
                    <div style={{paddingTop:"160px"}}>
                        <img onClick={handleCalcularClick} src="src\img\2.png" alt="Logo" style={{width: "180px", height: "180px", marginLeft:"30px", cursor: "pointer"}} title="Calcular calorías"/>
                    </div>
                    <div style={{paddingTop:"40px", paddingLeft:"60px"}}>
                    <button id="simulacionBtn" onClick={handleRedirect} type="button" class="btn btn"  style={{backgroundColor:"rgba(52, 141, 114, 0.67)", color:"#FFFFFF", border: "1px solid #000"}} >Ver simulación</button>
                    </div>
                    </div>
                    <div>
                        <div style={{paddingTop:"90px", marginLeft:"50px", paddingBottom:"20px"}}>
                            <p>El total de calorías consumidas del día son:</p>
                        </div>
                        <div style={{ width: "321px", height: "226px", paddingTop:"15px", marginLeft:"100px", backgroundColor:"#FACA6D",borderRadius: "20px" }}>
                            <h1 style={{ fontSize: "86px", textAlign: "center"}}>{totalCalorias} kcal</h1>
                        </div>
                        <div style={{paddingTop:"20px", marginLeft:"50px", paddingBottom:"20px"}}>
                            <p>El total de calorías ideales que deberias <br></br> consumir al día es de: {CaloriasIdeales} kcal</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    </div>
);
}

export default App;
