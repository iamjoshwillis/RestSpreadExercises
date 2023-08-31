function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function (num) {
        return num % 2 === 0
    });
}

/* Write an ES2015 Version */

const filterOutOdds = (...arguments) => arguments.filter(num => num % 2 === 0)

//findMin

const findMin = ((...args) => Math.min(...args))

//mergeObjects

const mergeObjects = (objOne, objTwo) => ({ ...objOne, ...objTwo })

//doubleAndReturnArgs

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)]

//Slice and Dice

function removeRandom(items) {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)];
}

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
}

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}

const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}