window.carApp.ViewModel = (function (ko, datacontext) {
    var carMakes = ko.observableArray(),
        carModels = ko.observableArray(),
        selectedMake = ko.observable(),
        selectedModel = ko.observable(),
        error = ko.observable(),
        getModels = function (carMake) {
            datacontext.getExpenseReport(selectedMake, error);
        };
        

    datacontext.getMakes(carMakes, error); // load car makes

    return {
        carMakes : carMakes,
        //getModels: getModels,
    };

})(ko, carApp.datacontext);

// Initiate the Knockout bindings
ko.applyBindings(window.carApp.ViewModel);
