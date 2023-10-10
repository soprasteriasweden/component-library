export function getNestedObjectValue(obj: any, path: string) {
    return path.split('.').reduce((o, key) => (o && o[key] !== 'undefined' ? o[key] : undefined), obj);
}