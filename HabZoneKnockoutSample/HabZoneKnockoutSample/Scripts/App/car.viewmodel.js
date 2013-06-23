window.carApp.ViewModel = (function (ko, datacontext) {
    var carMakes = ko.observableArray(),
        carModels = ko.observableArray(),
        selectedMakeId = ko.observable(),
        selectedModelId = ko.observable(),
        selectedMake = ko.observable(),
        selectedModel = ko.observable(),
        error = ko.observable(), // you can bind to this to show any errors
        getModels = function (carMake) {
            datacontext.getExpenseReport(selectedMake, error);
        };
        

    datacontext.getMakes(carMakes, error); // load car makes
    
    // Subscriptions //

    selectedMakeId.subscribe(function (newId) {
        // Get the make details
        datacontext.getMake(newId, selectedMake, error);
    });
    
    // End Subscriptions //

    return {
        carMakes: carMakes,
        selectedMakeId: selectedMakeId,
        selectedMake: selectedMake,
        selectedModelId: selectedModelId
    };

})(ko, carApp.datacontext);

// Initiate the Knockout bindings
ko.applyBindings(window.carApp.ViewModel);
