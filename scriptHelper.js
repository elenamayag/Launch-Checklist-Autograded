// Write your helper functions here!  

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML=`
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`;
}


// Helper function to validate input 
 function validateInput(value) {
    if (value === "") {
        return "Empty";
    } else if (isNaN(value)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
    
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // Validate input
    
    const fuelValidation = validateInput(fuelLevel);
    const cargoValidation = validateInput(cargoLevel);
    


    // Update shuttle requirements
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const faultyItems = document.getElementById("faultyItems");
    const launchStatus = document.getElementById("launchStatus");
    

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (pilot === "" || copilot === ""  || fuelLevel === "" || cargoLevel === "") {
        alert("All fields are required!");
    }

    if (fuelValidation === "Not a Number" || cargoValidation === "Not a Number") {
        alert("Invalid input!! Please enter valid information");
    }



    if (fuelLevel < 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        faultyItems.style.visibility = "visible";
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }

    if (cargoLevel > 10000) {
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        faultyItems.style.visibility = "visible";
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "green";
    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
         });
 
     return planetsReturned;
 }


 // Helper function to pick a random planet
 function pickPlanet(planets) {
    const randomPlanet = planets[Math.floor(Math.random() * planets.length)];
    return randomPlanet;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;