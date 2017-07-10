angular.module('Property').factory('propertyService', ['dataService',
    function (dataService) {
        return {
            addProperty: function(propertyOwner, property, onPropertyUpdated) {
                if (propertyOwner.id == null)
                    return;
                var referenceName = 'propertyOwners/' + propertyOwner.id + '/properties';
                dataService.saveObject(referenceName, property, onPropertyUpdated);
            },
            getProperty: function (propertyOwner, id, callback) {
                dataService.getData('propertyOwners/' + propertyOwner.id+'/properties/'+id, callback);
            },
            removeOwnersProperty: function (propertyOwner, property) {
                if (propertyOwner.id == null ||  property.id == null)
                    return;
                var referenceName = 'propertyOwners/' + propertyOwner.id + '/properties';
                dataService.deleteObject(referenceName, property);
            }
        }
    }
]);