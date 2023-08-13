function Informacion() {
    return (
    <div className="App">
    <div
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20px",
    }}
    >
    <div
        style={{
        width: "500px",
        height: "420px",
        backgroundColor: "rgba(255, 255, 255, 0.80)",
        borderRadius: "20px",
        marginRight: "50px",
        }}
    >
        <div
        style={{
            width: "500px",
            height: "67px",
            backgroundColor: "rgba(52, 141, 114, 0.67)",
            borderRadius: "20px",
            marginRight: "50px",
        }}
        >
        <h1
            style={{
            fontSize: "27px",
            textAlign: "center",
            lineHeight: "67px",
            margin: "0",
            }}
        >
            ¿Qué es CaloryApp?
        </h1>
        </div>
        <div style={{ display: "flex", gap: "1px" }}>
        <p style={{ padding:"20px 25px 0px"}}>
            Es un simulador que primero muestra cuantas calorías consume al dia
            considerando su edad, estatura y género.
            <br />
            <br />
            Luego tiene la parte de la
            simulación que proyecta a través de una gráfica los valores de
            calorias adecuadas y las que calculó dependiendo de los años que
            ingreso, tambien muestra las posibles consecuencias en su cuerpo.
        </p>

        <img
            src="src\img\7.png"
            alt="Logo"
            style={{ width: "200px", height: "200px", padding:"20px 30px 50px"}}
        />
        </div>
    </div>

    <div
        style={{
        width: "500px",
        height: "420px",
        backgroundColor: "rgba(255, 255, 255, 0.80)",
        borderRadius: "20px",
        marginRight: "50px",
        }}
    >
        <div
        style={{
            width: "500px",
            height: "67px",
            backgroundColor: "rgba(52, 141, 114, 0.67)",
            borderRadius: "20px",
            marginRight: "50px",
        }}
        >
        <h1
            style={{
            fontSize: "27px",
            textAlign: "center",
            lineHeight: "67px",
            margin: "0",
            }}
        >
            ¿Cómo lo uso?
        </h1>
        </div>
        <p style={{ padding:"20px 25px 0px"}}>
        Tiene que ingresar sus datos personales: edad, estatura, género
        </p>
        <p style={{ padding:"0px 25px 0px"}}>
        Si realiza ejercicio y cada cuanto lo hace, luego tiene que ingresar
        lo que desayunó, almorzó y lo que cenó, si no encuentra la opción de
        lo que comió, puede ingresar las calorias de la comida en el apartado
        que dice "Otros" que esta abajo de las opciones de las comidas.
        <br />
        <br />
        Si consumió calorías extras (que no están en las 3 comidas del día), puede ingresarlas en el apartado que dice "Calorías extras"
        <br />
        Luego tiene que darle click a la flecha grande color verde para que le
        pueda calcular las calorías que ha comido en todo el día, por último
        presionar el botón de simular.
        </p>
    </div>
    </div>
    <div
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20px",
    }}
    >
    <div
        style={{
        width: "900px",
        height: "390px",
        backgroundColor: "rgba(255, 255, 255, 0.80)",
        borderRadius: "20px",
        marginRight: "50px",
        }}
    >
        <div
        style={{
            width: "900px",
            height: "67px",
            backgroundColor: "rgba(52, 141, 114, 0.67)",
            borderRadius: "20px",
            marginRight: "50px",
        }}
        >
            <h1 style={{fontSize: "27px", textAlign: "center",lineHeight: "67px",marginLeft:"15px"}}>¿Qué simula?</h1>
            </div>
            <div style={{ display: "flex", gap: "1px" }}>

            <img
                src="src\img\1.png"
                alt="Logo"
                style={{ width: "300px", height: "300px", padding: "0px 0px 0px" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>

                <p style={{ padding: "20px 25px 0px" }}>
                Simula como se verá en 5 años, 10 años, 15 años o los "x" años que
                ingrese si sigue comiendo de la misma manera, mostrando las posibles
                consecuencias en su cuerpo y una gráfica comparación entre consumo ideal de calorías y el consumo calculado de la persona.
                </p>
                <img
                src="src\img\8.jpg"
                alt="Logo"
                style={{ width: "200px", height: "200px", marginLeft: "150px" }}
                />
            </div>
            </div>
            </div>

        </div>
        <br />
        <div className="alert alert-success" style={{ textAlign: "center" }} role="alert">
            Creado por:
            <br />
            Gelen Fabiola Amador Pavón
            <br />
            Gleny Gissela Nihimaya Torres
            <br />
            Lleymi Nohemi Cruz Montoya
            <br />
            II PAC 2023
        </div>

        </div>
);
}

export default Informacion;
