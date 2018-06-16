import { get, pickone } from "../utils";
import { word } from "../text";

export default options => {
    var fileOptions = options || {};
    var poolCollectionKey = "fileExtension";
    var typeRange   = Object.keys(get("fileExtension"));//['raster', 'vector', '3d', 'document'];
    var fileName;
    var fileExtension;

    // Generate random file name
    fileName = word({length : fileOptions.length});

    // Generate file by specific extension provided by the user
    if(fileOptions.extension) {
        fileExtension = fileOptions.extension;
        return (fileName + '.' + fileExtension);
    }

    // Generate file by specific extension collection
    if(fileOptions.extensions) {
        if(Array.isArray(fileOptions.extensions)) {
            fileExtension = pickone(fileOptions.extensions);
            return (fileName + '.' + fileExtension);
        }
        else if(fileOptions.extensions.constructor === Object) {
            var extensionObjectCollection = fileOptions.extensions;
            var keys = Object.keys(extensionObjectCollection);

            fileExtension = pickone(extensionObjectCollection[pickone(keys)]);
            return (fileName + '.' + fileExtension);
        }

        throw new Error("Chance: Extensions must be an Array or Object");
    }

    // Generate file extension based on specific file type
    if(fileOptions.fileType) {
        var fileType = fileOptions.fileType;
        if(typeRange.indexOf(fileType) !== -1) {
            fileExtension = pickone(get(poolCollectionKey)[fileType]);
            return (fileName + '.' + fileExtension);
        }

        throw new RangeError("Chance: Expect file type value to be 'raster', 'vector', '3d' or 'document'");
    }

    // Generate random file name if no extension options are passed
    fileExtension = pickone(get(poolCollectionKey)[pickone(typeRange)]);
    return (fileName + '.' + fileExtension);
}