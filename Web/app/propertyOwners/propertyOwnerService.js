angular.module('PropertyOwners').factory('propertyOwnerService', ['dataService',
    function (dataService) {
        return {
            save: function(propertyOwner, onSaved) {
                dataService.saveObject('propertyOwners', propertyOwner, onSaved);
            },
            getPropertyOwner: function (id, callback) {
                dataService.getData('propertyOwners/' + id, callback);
            },
            getpropertyOwners: function(callback){
                dataService.getData('propertyOwners', callback);
            },
        };
    }
]);