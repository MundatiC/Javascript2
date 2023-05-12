const user = {
    id: 339,
    name: 'Fred',
    age: 42,
    education: {
      degree: 'Masters'
    }
  };

function findByKey(obj, key) {
    for (let prop in obj) {
      if (prop === key) {
        return obj[prop];
      } else if (typeof obj[prop] === 'object') {
        const nestedObj = obj[prop];
        const result = findByKey(nestedObj, key);
        if (result !== undefined) {
          return result;
        }
      }
    }
  }
 
  

  console.log(findByKey(user, 'degree')); 
    