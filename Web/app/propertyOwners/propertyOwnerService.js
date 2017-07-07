angular.module('PropertyOwners').factory('propertyOwnerService', ['dataService',
    function (dataService) {
        return {
            save: function(propertyOwner, onSaved) {
                dataService.saveObject('propertyOwners', propertyOwner, onSaved);
            },
            getPropertyOwner: function (id, callback) {
                dataService.getData('propertyOwners/' + id, callback);
            },
            getPropertyOwners: function(callback){
                dataService.getData('propertyOwners', callback);
            },
            removePropertyOwner: function (propertyOwner) {
            if (propertyOwner.id == null)
                return;
            var referenceName = 'propertyOwners';
            dataService.deleteObject(referenceName, propertyOwner);
            }
        };
    }
]);