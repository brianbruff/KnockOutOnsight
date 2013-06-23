window.carApp = window.carApp || {};

window.carApp.datacontext = (function () {

    var datacontext = {
        getMakes: getMakes,
        getMake: getMake,
    };

    return datacontext;
    

    function getMakes(makesObservable, errorObservable) {
        return ajaxRequest("get", makesUrl())
            .done(getSucceeded)
            .fail(getFailed);
            

        function getSucceeded(data) {
            var mappedMakes = $.map(data, function (list) { return new createMake(list); });
            makesObservable(mappedMakes);
        }

        function getFailed() {
            errorObservable("Error retrieving car makes.");
        }
    }
    
    
    function getMake(makeId, selectedMakeObservable, errorObservable) {
        return ajaxRequest("get", makesUrl(makeId))
            .done(getSucceeded)
            .fail(getFailed);

        function getSucceeded(data) {
            var make = createMake(data);
            selectedMakeObservable(make);
            
        }

        function getFailed() {
            errorObservable("Error retrieving make detail.");
        }
    }
    
    function createMake(data) {
        return new datacontext.carMake(data); // make is injected by car.model.js
    }
    
    function createModel(data) {
        return new datacontext.carModel(data); // model is injected by car.model.js
    }
    

    // Private
    function clearErrorMessage(entity) { entity.errorMessage(null); }
    function ajaxRequest(type, url, data, dataType) { // Ajax helper
        var options = {
            dataType: dataType || "json",
            contentType: "application/json",
            cache: false,
            type: type,
            data: data ? data.toJson() : null
        };
        var antiForgeryToken = $("#antiForgeryToken").val();
        if (antiForgeryToken) {
            options.headers = {
                'RequestVerificationToken': antiForgeryToken
            };
        }
        return $.ajax(url, options);
    }
    // routes
    function makesUrl(id) { return "/api/Makes/" + (id || ""); }
    function modelsUrl(id) { return "/api/Models/" + (id || ""); }

})();