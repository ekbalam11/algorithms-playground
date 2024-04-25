/**
 * Implementa una función parecida al ejercicio basic-2.
 * 
 * MAyoria de edad en España: 18 o más
 * MAyoria de edad en EEUU: 21 o más
 * 
 * Ahora todos los datos están en el objeto person
 * Además, usa el valor que retorna la función para escribir un mensaje diciendo si dicha persona es mayor de edad en el su pais o no
 */

function isAdultInCountryWithObject(person) {
    //if person age >= 18 in España, return true
    if (person.age >= 18 && person.country == "España" || person.age >= 21 && person.country == "EEUU"){
        return true;
    } else {
        return false;
    }
}

let isCarlosAdult = isAdultInCountryWithObject({ name: "Carlos", age: 17, country: "España" });
    if(isCarlosAdult){
        console.log ("Carlos es adulto en España")
    } else {
        console.log ("Carlos no es adulto en España")
    }

/**
 * Usa un if...else para evaluar la variable isCarlosAdult, y mostrar un mensaje por consola, de este estilo:
 * "Carlos es(o no) adulto en España"
 */

let isJohnAdult = isAdultInCountryWithObject({ name: "John", age: 21, country: "EEUU" });
    if(isJohnAdult){
        console.log("John es adulto en EEUU")
    } else {
        console.log("John no es adulto en EEUU")
    }

/**
 * Usa un if...else para evaluar la variable isJohnAdult, un mensaje por consola, de este estilo:
 * "John es(o no) adulto en EEUU"
 */