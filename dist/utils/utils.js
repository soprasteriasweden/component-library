export function getNestedObjectValue(obj, path) {
    return path.split('.').reduce(function (o, key) { return (o && o[key] !== 'undefined' ? o[key] : undefined); }, obj);
}
