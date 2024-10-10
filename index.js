const getValues = (collection) => {
    return Array.isArray(collection) ? collection : Object.values(collection);
  };
  

  function myEach(collection, callback) {
    const values = getValues(collection);
    for (let i = 0; i < values.length; i++) {
      callback(values[i], i, collection);
    }
    return collection;
  }
  

  function myMap(collection, callback) {
    const values = getValues(collection);
    const newArray = [];
    for (let i = 0; i < values.length; i++) {
      newArray.push(callback(values[i], i, collection));
    }
    return newArray;
  }
  

  function myReduce(collection, callback, acc) {
    const values = getValues(collection);
    let accumulator = acc === undefined ? values[0] : acc;
    const startIdx = acc === undefined ? 1 : 0;
  
    for (let i = startIdx; i < values.length; i++) {
      accumulator = callback(accumulator, values[i], collection);
    }
  
    return accumulator;
  }
  

  function myFind(collection, predicate) {
    const values = getValues(collection);
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i], i, collection)) {
        return values[i];
      }
    }
    return undefined;
  }
  

  function myFilter(collection, predicate) {
    const values = getValues(collection);
    const filteredArray = [];
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i], i, collection)) {
        filteredArray.push(values[i]);
      }
    }
    return filteredArray;
  }
  

  function mySize(collection) {
    return getValues(collection).length;
  }
  

  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  

  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }
  
  
  function mySortBy(array, callback) {
    return [...array].sort((a, b) => {
      const aValue = callback(a);
      const bValue = callback(b);
      if (aValue < bValue) return -1;
      if (aValue > bValue) return 1;
      return 0;
    });
  }
  

  function myFlatten(array, shallow = false, newArr = []) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        if (shallow) {
          newArr.push(...array[i]);
        } else {
          myFlatten(array[i], false, newArr);
        }
      } else {
        newArr.push(array[i]);
      }
    }
    return newArr;
  }
  

  function myKeys(object) {
    return Object.keys(object);
  }

  function myValues(object) {
    return Object.values(object);
  }
  