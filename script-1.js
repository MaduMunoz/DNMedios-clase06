async function primero() {
    const consulta = await fetch("https://raw.githubusercontent.com/profesorfaco/dno037-2023/main/clase-06/datos.json");
    const data = await consulta.json();
    
    //Declaro variables que parten con un arreglo vacío. let es como lo mismo que var o const, pero se usan diferente.
    let regiones = []; 
    let hombres = [];
    let mujeres = [];
    
    //Reviso data y empujo un elemento a cada arreglo que estaba vacío
    data.forEach((x) => {
        regiones.push(x.region); //lo que hace el "push" es meterle data al arreglo que generé de regiones. 
        hombres.push(x.hombres);
        mujeres.push(x.mujeres);
    });
    
    //Ahora puedo armar el gráfico
    new Chart(document.getElementById("regiones"), {
        type: "bar",
        data: {
            labels: regiones,
            datasets: [
                {
                    label: "Hombres",
                    data: hombres,
                    backgroundColor: "#1c313a",
                },
                {
                    label: "Mujeres",
                    data: mujeres,
                    backgroundColor: "#718792",
                },
            ],
        },
        options: { //si se borran las opciones sigue funcionando, pero funciona distinto. Las opciones son opcionales
            plugins: {
                title: {
                    display: false,
                },
            },
            responsive: true,
            layout: {
                padding: 20,
            },
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                    ticks: {
                        callback: function (numero) {
                            return numero.toLocaleString("es-CL");
                        },
                    },
                },
            },
        },
    });
}
primero().catch((error) => console.error(error));