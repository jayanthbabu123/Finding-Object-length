// Object.keys method

const address = {
    city: "Bangalore",
    name: "John",
    job: "Software"
}
console.log(Object.keys(address).length);


// for...of loop

let count = 0;
for (let key in address) {
    count++
}
console.log(count);


//  Adding length property to object prototype
if (!Object.prototype.length) {
    Object.defineProperty(Object.prototype, 'length', {
        get: function () {
            return Object.keys(this).length
        }
    });
}

console.log(address.length);
