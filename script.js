// Write your JavaScript code here!

//const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

    let listedPlanets; 
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);

    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const selectedPlanet = pickPlanet(listedPlanets);

        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.imageUrl);
    })
    
 });  

 // Event Listener for Form Submission
document.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get values from the form
    const pilotName = document.querySelector("input[name=pilotName]").value;
    const copilotName = document.querySelector("input[name=copilotName]").value;
    const fuelLevel = Number(document.querySelector("input[name=fuelLevel]").value);
    const cargoMass = Number(document.querySelector("input[name=cargoMass]").value);

    const faultyItems = document.getElementById("faultyItems");

    // Call formSubmission function with an empty list for now
    formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass);
});


 