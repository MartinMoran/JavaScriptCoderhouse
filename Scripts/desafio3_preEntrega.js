const user=[];

const activity = [
    {id:1, name:"sedentary", calories: 30},
    {id:2, name:"moderate", calories: 35},
    {id:3, name:"medium", calories: 40},
    {id:4, name:"active", calories: 50},
    {id:5, name:"heavy", calories: 60}
];

class User
{
    constructor (name, surname, age, city, country)
    {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.city = city;
        this.country = country;
    }
}

function UserInfo()
{
    let option="";

    while(option !== "2")
    {
        option= prompt(`ELIJA UNA OPCION
                    1. INGRESAR USUARIO
                    2. SALIR`);
    
        if(option === "1")
        {
            let client = addUser();
            user.push(client);
            localStorage.setItem("USERS", JSON.stringify(user));
            let data = JSON.parse(localStorage.getItem("USERS"));
            console.log(data);
        }
        else
        {
            alert("AHORA CHEQUEEMOS SUS VALORES")
            option === "2";
        }
    }
    console.log(user);
}

function addUser()
{
    let name = prompt("Ingrese su nombre");
    let surname = prompt("Ingrese su apellido");
    let age = parseInt(prompt("Ingrese su edad"));
    let city = (prompt("Ingrese su ciudad de residencia"));
    let country = (prompt("Ingrese nacionalidad"));

    return new User(name, surname, age, city, country);
}

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
    UserInfo();
    BasalMassIndex();
    UserDiet();
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
                        <ol>
                            <li>Nombre:</li>
                                <input type="text">
                            <li>Apellido:</li>
                                <input type="text">
                            <li>Edad:</li>
                                <input type="text">
                            <li>Ciudad de residencia:</li>
                                <input type="text">
                            <li>Nacionalidad:</li>
                                <input type="text">
                        </ol>`

    const menu = document.getElementById("menu");
    menu.appendChild(container);
}





