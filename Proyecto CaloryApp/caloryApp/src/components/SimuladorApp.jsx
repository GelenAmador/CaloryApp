import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto"; 
import { db } from "./App"; 
import NormalImagen from "../img/Normal.jpg";
import DelgadaImagen from "../img/Delgada.jpg";
import AnorexiaImagen from "../img/anorexia.jpg";
import SubidaPesoImagen from "../img/peso.jpg";
import SubidaPesoMasImagen from "../img/pocoObesa.jpg";
import ObesaImagen from "../img/OBESA.jpg";
import NormalVaronImagen from "../img/NormalVaron.jpg";
import DelgadoImagen from "../img/Delgado.jpg";
import AnorexiaVaronImagen from "../img/anorexiaVaron.jpg";
import SubidoPesoImagen from "../img/pesoVaron.jpg";
import SubidoPesoMasImagen from "../img/pocoObesoVaron.jpg";
import ObesoImagen from "../img/OBESO.jpg";

function SimuladorApp() {
    const [años, setAños] = useState(0);
    const [message, setMessage] = useState("");
    const [message2, setMessage2] = useState("");
    const [infoData, setInfoData] = useState("")
    const [NuevaEdad, setNuevaEdad] = useState(0);
    const [PesoNuevo, setPesoNuevo] = useState(0);
    const [imagen, setImagen] = useState("");

    useEffect(() => {
        db.collection('Calorias')
            .orderBy('Fecha', 'desc')
            .limit(1)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setInfoData(doc.data());
                    const dataCaloriasIdeales = doc.data().CaloriasIdeales;
                    const dataCaloriasCalculadas = doc.data().TotalCalorias;
                    const dataEdad = doc.data().Edad;
                    const dataPeso = doc.data().Peso;                  

                    const Porcentaje85 = dataCaloriasIdeales * 0.85;
                    const Porcentaje115 = dataCaloriasIdeales * 1.15;
                    const NuevaEdad = parseInt(dataEdad) + años;
                    setNuevaEdad(NuevaEdad)
                    const diferenciaCalorias = dataCaloriasIdeales - dataCaloriasCalculadas;
                    const gananciaPerdidaPeso = (diferenciaCalorias / 7700) * años;
                    const pesoActual = parseFloat(parseInt(dataPeso) - gananciaPerdidaPeso* años).toFixed(2);
                    setPesoNuevo(pesoActual);

                    if(infoData.Sexo == "F"){
                    switch (true) {
                        case dataCaloriasCalculadas < Porcentaje85:
                            setMessage("Consumo calórico por debajo de lo necesario (consume menos del 85% de calorías ideales)");
                            if (0 <= años && años <= 3) { 
                                setImagen(NormalImagen)
                                setMessage2(`
                                Si sigues comiendo así durante ${años} año, experimentarás una pérdida de peso gradual y saludable, con una apariencia más delgada y posiblemente más en forma.`)
                            } else 
                            if (4 <= años && años <= 13) { 
                                setImagen(DelgadaImagen)
                                setMessage2(`
                                Si sigues comiendo así durante ${años} años, la falta de nutrientes esenciales y calorías causará una disminución significativa en 
                                la masa muscular y la densidad ósea. La apariencia podría ser esquelética y podría haber problemas 
                                de salud relacionados con la malnutrición.`)
                            } else                             
                            if (14 <= años) { 
                                setImagen(AnorexiaImagen)
                                setMessage2(`
                                Si sigues comiendo así durante ${años} años, la salud general se deteriorará gravemente debido a la falta crónica de 
                                nutrientes y calorías. Podrían existir problemas graves de salud, incluyendo daños irreversibles en 
                                órganos vitales y un alto riesgo de mortalidad.`)
                            }else {
                                setMessage2("");
                            }
                            break;

                        case Porcentaje85 < dataCaloriasCalculadas && dataCaloriasCalculadas < Porcentaje115:

                            setMessage(" Consumo Calórico Equilibrado (consume entre el 85% y el 115% de calorías ideales)");
                            if (0 <= años && años <= 3) { 
                                setImagen(NormalImagen)
                                setMessage2(`
                                Si sigues comiendo así durante ${años} año, vas a mantener el equilibrio calórico, te mantendrás en un peso saludable con una 
                                apariencia estable.`)
                            } else 
                            if (4 <= años && años <= 8) { 
                                setImagen(NormalImagen)
                                setMessage2(`
                                Si sigues comiendo así durante ${años} años, la consistencia en una dieta equilibrada y un estilo de vida activo te llevará a 
                                mejoras en la salud cardiovascular, fuerza muscular y nivel de energía.`)
                            } else
                            if (9 <= años && años <= 13) { 
                                setImagen(NormalImagen)
                                setMessage2(`
                                Si sigues comiendo así durante ${años} años, al seguir manteniendo hábitos saludables, podrías disfrutar de una buena salud 
                                general, envejecimiento saludable y posiblemente una reducción del riesgo de enfermedades 
                                crónicas.`)
                            } else                              
                            if (14 <= años) { 
                                setImagen(NormalImagen)
                                setMessage2(`
                                Si sigues comiendo así durante ${años} años, al mantener un estilo de vida equilibrado y activo, conservarás una buena 
                                calidad de vida y estabilidad en términos de salud y apariencia.`)
                            }else {
                                setMessage2("");
                            }
                            break;
                        case dataCaloriasCalculadas > Porcentaje115:

                        setMessage("Consumo Calórico Excesivo (consume más del 115% de calorías ideales)");
                        if (0 <= años && años <= 3) { 
                            setImagen(SubidaPesoImagen)
                            setMessage2(`
                            Si sigues comiendo así durante ${años} año. Ganancia peso, especialmente en forma de grasa, lo que podría resultar en una 
                            apariencia más redondeada.`)
                        } else 
                        if (4 <= años && años <= 13) { 
                            setImagen(SubidaPesoMasImagen)
                            setMessage2(`
                            Si sigues comiendo así durante ${años} años, el aumento constante de peso debido al consumo excesivo de calorías puede llevarte 
                            a problemas de salud relacionados con la obesidad, como presión arterial alta y colesterol elevado.`)
                        } else                             
                        if (14 <= años) { 
                            setImagen(ObesaImagen)
                            setMessage2(`
                            Si sigues comiendo así durante ${años} años, la salud general se deteriorará significativamente debido a la obesidad y sus 
                            complicaciones, lo que podría llevar a problemas cardiovasculares graves, diabetes tipo 2 y otros 
                            problemas médicos relacionados con el exceso de peso.`)
                        }else {
                            setMessage2("");
                        }

                            break;
                        default:
                            break;
                    }

                }else{
                    switch (true) {
                        case dataCaloriasCalculadas < Porcentaje85:
                            setMessage("Consumo calórico por debajo de lo necesario (consume menos del 85% de calorías ideales)");
                            if (0 <= años && años <= 3) { 
                                setImagen(NormalVaronImagen)
                                setMessage2(`
                                Si sigues comiendo así durante ${años} año, experimentarás una pérdida de peso gradual y saludable, con una apariencia más delgada y posiblemente más en forma.`)
                            } else 
                            if (4 <= años && años <= 13) { 
                                setImagen(DelgadoImagen)
                                setMessage2(`
                                Si sigues comiendo así durante ${años} años, la falta de nutrientes esenciales y calorías causará una disminución significativa en 
                                la masa muscular y la densidad ósea. La apariencia podría ser esquelética y podría haber problemas 
                                de salud relacionados con la malnutrición.`)
                            } else                             
                            if (14 <= años) { 
                                setImagen(AnorexiaVaronImagen)
                                setMessage2(`
                                Si sigues comiendo así durante ${años} años, la salud general se deteriorará gravemente debido a la falta crónica de 
                                nutrientes y calorías. Podrían existir problemas graves de salud, incluyendo daños irreversibles en 
                                órganos vitales y un alto riesgo de mortalidad.`)
                            }else {
                                setMessage2("");
                            }
                            break;

                        case Porcentaje85 < dataCaloriasCalculadas && dataCaloriasCalculadas < Porcentaje115:

                            setMessage(" Consumo Calórico Equilibrado (consume entre el 85% y el 115% de calorías ideales)");
                            if (0 <= años && años <= 3) { 
                                setImagen(NormalVaronImagen)
                                setMessage2(`
                                Si sigues comiendo así durante ${años} año, vas a mantener el equilibrio calórico, te mantendrás en un peso saludable con una 
                                apariencia estable.`)
                            } else 
                            if (4 <= años && años <= 8) { 
                                setImagen(NormalVaronImagen)
                                setMessage2(`
                                Si sigues comiendo así durante ${años} años, la consistencia en una dieta equilibrada y un estilo de vida activo te llevará a 
                                mejoras en la salud cardiovascular, fuerza muscular y nivel de energía.`)
                            } else
                            if (9 <= años && años <= 13) { 
                                setImagen(NormalVaronImagen)
                                setMessage2(`
                                Si sigues comiendo así durante ${años} años, al seguir manteniendo hábitos saludables, podrías disfrutar de una buena salud 
                                general, envejecimiento saludable y posiblemente una reducción del riesgo de enfermedades 
                                crónicas.`)
                            } else                              
                            if (14 <= años) { 
                                setImagen(NormalVaronImagen)
                                setMessage2(`
                                Si sigues comiendo así durante ${años} años, al mantener un estilo de vida equilibrado y activo, conservarás una buena 
                                calidad de vida y estabilidad en términos de salud y apariencia.`)
                            }else {
                                setMessage2("");
                            }
                            break;
                        case dataCaloriasCalculadas > Porcentaje115:

                        setMessage("Consumo Calórico Excesivo (consume más del 115% de calorías ideales)");
                        if (0 <= años && años <= 3) { 
                            setImagen(SubidoPesoImagen)
                            setMessage2(`
                            Si sigues comiendo así durante ${años} año. Ganancia peso, especialmente en forma de grasa, lo que podría resultar en una 
                            apariencia más redondeada.`)
                        } else 
                        if (4 <= años && años <= 13) { 
                            setImagen(SubidoPesoMasImagen)
                            setMessage2(`
                            Si sigues comiendo así durante ${años} años, el aumento constante de peso debido al consumo excesivo de calorías puede llevarte 
                            a problemas de salud relacionados con la obesidad, como presión arterial alta y colesterol elevado.`)
                        } else                             
                        if (14 <= años) { 
                            setImagen(ObesoImagen)
                            setMessage2(`
                            Si sigues comiendo así durante ${años} años, la salud general se deteriorará significativamente debido a la obesidad y sus 
                            complicaciones, lo que podría llevar a problemas cardiovasculares graves, diabetes tipo 2 y otros 
                            problemas médicos relacionados con el exceso de peso.`)
                        }else {
                            setMessage2("");
                        }

                            break;
                        default:
                            break;
                    }
                }
                    const ctx = document.getElementById("myChart").getContext("2d");

                    // Crear la gráfica con los datos dinámicos
                    const chart = new Chart(ctx, {
                        type: "line",
                        data: {
                            labels: ["1 año", "5 años", "10 años", "15 años", "Otros"],
                            datasets: [
                                {
                                    label: "Calorias calculadas",
                                    data: [dataCaloriasCalculadas, dataCaloriasCalculadas, dataCaloriasCalculadas, dataCaloriasCalculadas, dataCaloriasCalculadas],
                                    borderColor: "rgba(75, 192, 192, 1)",
                                    borderWidth: 1,
                                    fill: false,
                                },
                                {
                                    label: "Calorias Ideales",
                                    data: [dataCaloriasIdeales, dataCaloriasIdeales, dataCaloriasIdeales, dataCaloriasIdeales, dataCaloriasIdeales],
                                    borderColor: "rgba(255, 99, 132, 1)",
                                    borderWidth: 1,
                                    fill: false,
                                },
                            ],
                        },
                    });

                    // Destruir la instancia de la gráfica al desmontar el componente
                    return () => {
                        chart.destroy();
                    };
                });
            })
            .catch((error) => {
                console.error('Error al obtener el registro más reciente:', error);
            });
    }, [años, imagen]); 

    
    return (
    <div className="App">
    
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ paddingTop: "40px", width: "160px"}}>
                <button type="button" class="btn btn" style={{ backgroundColor: "rgba(52, 141, 114, 0.67)", color: "#FFFFFF", border: "1px solid #000" }} 
                onClick={(event) => {setAños(1)}} > 1 año</button>
            </div>
            <div style={{ paddingTop: "40px", width: "160px" }}>
                <button type="button" class="btn btn" style={{ backgroundColor: "rgba(52, 141, 114, 0.67)", color: "#FFFFFF", border: "1px solid #000" }} 
                onClick={(event) => {setAños(5)}}>5 años</button>
            </div>
            <div style={{ paddingTop: "40px", width: "160px" }}>
                <button type="button" class="btn btn" style={{ backgroundColor: "rgba(52, 141, 114, 0.67)", color: "#FFFFFF", border: "1px solid #000" }}
                onClick={(event) => {setAños(10)}}>10 años</button>
            </div>
            <div style={{ paddingTop: "40px", width: "160px" }}>
                <button type="button" class="btn btn" style={{ backgroundColor: "rgba(52, 141, 114, 0.67)", color: "#FFFFFF", border: "1px solid #000" }} 
                onClick={(event) => {setAños(15)}}>15 años</button>
            </div>
            <div style={{ paddingTop: "40px", width: "160px", border:"2px"}}>
                <input type="text" className="form-control border border-2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Ingrese otros años" maxLength="2" onKeyPress={(event) => {const charCode = event.which ? event.which : event.keyCode; if (charCode < 48 || charCode > 57)
                {event.preventDefault();}}}
                onInput={(event) => {const inputValue = event.target.value;if (inputValue.trim() === "") {event.target.value = "0" }}}
                onChange={(event) => {const selectedValue = event.target.value; setAños(parseInt(selectedValue));}}/>
            </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "70px" }}>

            <div style={{ width: "630px", height: "450px", backgroundColor: "rgba(255, 255, 255, 0.80)", borderRadius: "20px"}}>
                <div style={{ width: "630px", height: "67px", backgroundColor: "rgba(52, 141, 114, 0.67)", borderRadius: "20px"}}>
                    <h1 style={{ fontSize: "27px", textAlign: "center", lineHeight: "67px", margin: "0" }}>Gráfica</h1>
                </div>
                <canvas id="myChart"></canvas> 
            </div>

            <div  style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "70px" }}>
                <div>
                    <img src="src\img\2.png" alt="Logo" style={{width: "180px", height: "180px"}}/>
                </div>
            </div>

            <div style={{ width: "530px", height: "720px", backgroundColor: "rgba(255, 255, 255, 0.80)", borderRadius: "20px", marginRight: "50px" }}>
                <div style={{ width: "530px", height: "67px", backgroundColor: "rgba(52, 141, 114, 0.67)", borderRadius: "20px", marginRight: "50px" }}>
                    <h1 style={{ fontSize: "27px", textAlign: "center", lineHeight: "67px", margin: "0" }}>Asi te veras en {años} años </h1>
                </div>
                <div style={{ padding: "15px 25px 0px"}}>
                    <p>{message}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <p style={{ padding: "5px 25px 0px" }}>
                        Edad: {NuevaEdad} años<br></br>
                        Altura: {infoData.Altura} cm<br></br>
                        Peso: {PesoNuevo} kg
                    </p>
                    <img
                    src={imagen}
                    alt="Logo"
                    style={{ width: "140px", height: "290px", marginLeft: "170px" }}
                    />
                </div>
                <div style={{ padding: "50px 25px 0px"}}>
                    <p>{message2}</p>
                </div>

            </div>

        </div>
    </div>
);
}

export default SimuladorApp;
