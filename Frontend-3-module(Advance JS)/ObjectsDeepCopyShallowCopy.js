let obj = {
    "name":"Omkar",
    "age":24,
    "address": {
        "city":"Mumbai",
        "state":"Maharashtra"
    }
}

// Shallow copy: modifies in both variable
// let obj2 = obj;

// Deep copy: changes done in one variable is not reflected in other variable
// let obj2 = {...obj} => deep clone does not work for nested Object.
// let obj2 = Object.assign({}, obj) => deep clone does not work for nested Object.
// let obj2 = JSON.parse(JSON.stringify(obj)); => Does actual deep copy works for nested objects as well.

// let obj2 = {...obj, "address": {...obj.address}}

obj2.address.city = "Pune"

console.log(obj)
console.log(obj2)

