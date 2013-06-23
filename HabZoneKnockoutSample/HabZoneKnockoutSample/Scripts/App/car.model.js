/// <reference path="../knockout-2.2.0.debug.js" />


(function (ko, datacontext) {
    // Inject the models
    datacontext.carMake = carMake;
    datacontext.carModel = carModel;
    
    // this function takes the json from the server and makes a carmake
    function carMake(data) {
        var self = this;
        data = data || {};

        // Persisted properties
        self.id= data.id;
        self.name = data.name;
        self.carModels = ko.observableArray(data.carModels);
        self.modelEngines = ko.observableArray(data.modelEngines);
        
        self.totalModels = ko.computed(function () {
            if (self.models)
                return self.carModels.length;
            return 0;
        });
    };
    
    function carModel(data) {
        var self = this;
        data = data || {};
        
        self.id = data.id;
        self.name = data.name;
    }


})(ko, carApp.datacontext);
