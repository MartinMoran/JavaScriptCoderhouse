
function BasalMassIndex()
{
    let weight = parseFloat(prompt("Ingrese su peso en kilogramos"));
    let height = parseFloat(prompt("Ingrese su altura en metros"));    
    let bmi = weight / (height * height);
    
    if(bmi < 18.5)
    {
        console.log(`Su IMC es: ${bmi} - Bajo Peso`)
    }
    else if(bmi > 18.5 && bmi < 24.9)
    {
        console.log(`Su IMC es: ${bmi} - Normal`);
    }
    else if(bmi > 24.9 && bmi < 29.9)
    {
        console.log(`Su IMC es: ${bmi} - Sobrepeso`);
    }
    else
    {
        console.log(`Su IMC es: ${bmi} - Obesidad`);
    }
}

function UserDiet()
{
    let weight = parseFloat(prompt("Ingrese su peso en kilogramos"));
    let option = parseInt(prompt(`INGRESE SU NIVEL DE ACTIVIDAD:
                                1- Sedentario
                                2- Moderado
                                3- Medio
                                4- Activo
                                5- Pesado`));
    switch(option)
    {
        case 1: 
            let op1 = weight * activity[0].calories
            console.log("Sus necesidades energeticas en KCAL son: " + op1)
            break;
        case 2: 
            let op2 = weight * activity[1].calories 
            console.log("Sus necesidades energeticas en KCAL son: " + op2)
            break;
        case 3:
            let op3 = weight * activity[2].calories
            console.log("Sus necesidades energeticas en KCAL son: " + op3)
            break;
        case 4:
            let op4 = weight * activity[3].calories
            console.log("Sus necesidades energeticas en KCAL son: " + op4); 
            break;
        case 5:
            let op5 = weight * activity[4].calories
            console.log("Sus necesidades energeticas en KCAL son: " + op5);
            break;
        default:
            console.log("Ingresar una opcion valida");
            break;
    }
}


function Init()
{
    Start();
}


function Start()
{
    const nodoBtn = document.querySelector("#myBtn");
    nodoBtn.addEventListener("click", ()=> Display());
}

function Display()
{
    const container = document.createElement("container")

    container.innerHTML=`<h2>REGISTRO</h2>
                        <form id="myForm">
                            <label>Ingrese su nombre:</label>
                            <input type="text" id="name" placeholder="Nombre"><br><br>
                            <label>Ingrese su apellido:</label>
                            <input type="text" id="lastname" placeholder="Apellido"><br><br>
                            <label>Indique su edad:</label>
                            <input type="text" id="age" placeholder="Edad"><br><br>
                            <label>Ciudad de residencia:</label>
                            <input type="text" id="city" placeholder="Ciudad"><br><br>
                            <label>Nacionalidad:</label>    
                            <input type="text" id="country" placeholder="Pais"><br>  
                        </form><br>
                        <button>GUARDAR</button>`

    const menu = document.getElementById("menu");
    menu.appendChild(container);

    let user={
        name: document.getElementById("#name").value,
        lastname: document.getElementById("#lastname").value,
        age: document.getElementById("#age").value,
        city: document.getElementById("#city").value, 
        country: document.getElementById("#country").value
    }
    users.push(user);

    const nodoForm = document.querySelector("#myForm");
    nodoForm.addEventListener("submit", ()=> Submit());
}

function Submit(){
    localStorage.setItem("USERS", JSON.stringify(users));
    let data = JSON.parse(localStorage.getItem("USERS"));
    console.log(data);
    nodoForm.reset();
}



