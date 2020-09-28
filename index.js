const structDiff = require('./dependencies/structDiff');
const structPatch = require('./dependencies/structPatch');


var VersionManagement = (function() {
    function VersionManagement() {}

    VersionManagement.prototype.structDiff = function(orignalStruct, changedStruct) {
        const diff = new structDiff(orignalStruct, changedStruct);
        return diff.getStructDiff();
    };

    VersionManagement.prototype.patchDiff = function(changedStruct, changes) {
        const diff = new structPatch(changedStruct, changes);
        return diff.getStructPatch();
    };

    return VersionManagement;
})();

module.exports = VersionManagement;