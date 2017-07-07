angular.module('Property').factory('propertyService', ['dataService',
    function (dataService) {
        return {
            addProperty: function(propertyOwner, property, onPropertyUpdated) {
                if (propertyOwner.id == null)
                    return;
                var referenceName = 'propertyOwners/' + propertyOwner.id + '/properties';
                dataService.saveObject(referenceName, property, onPropertyUpdated);
            }
        }
    }
]);