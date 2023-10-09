function arrayMani(arr){
    if(!Array.isArray(arr) || arr.length === 0){
        return "invalid input";
    }

    const sum = arr.reduce((acc, num) => acc + num, 0);

    const average = sum / arr.length;

    const max = Math.max(...arr);

    const min = Math.min(...arr);

    return {
        sum,
        average,
        max,
        min,
    };
}

const array = [1,2,3,4,5,6];

console.log(arrayMani(array));