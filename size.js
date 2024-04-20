function size(collection) {
    if (!collection) return 0;

    const type = typeof collection;
    if (Array.isArray(collection) || type === "string") {
      return collection.length || 0;
    }
    const isSet = collection instanceof Set;
    const isMap = collection instanceof Map;
    
    if (type === "object") {
      if(isSet || isMap){
        return collection.size;
      }
      return Object.keys(collection).length || 0;
    }
    return 0;
}

console.log(size(new Set([1])));
