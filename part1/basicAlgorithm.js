function arrayMax(array){
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if(array[i] > max){
            max = array[i];
        }
    }
    return max; 
}

function duplicates(array){
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] === array[j]){
                return true;
            }
        }
    }
    return false;
}

function longestSentence(string){
    const arr = string.split(' ');
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i].length > max.length){
            max = arr[i];
        }
    }
    return max;
}

const maxArray = [1,2,3,11,4,5,6];
const max = arrayMax(maxArray);

const duplicateArray = [1,1,2,3,4,5];
const duplicateArray1 = [1,2,3,4,5];
const duplicate = duplicates(duplicateArray);
const duplicate1 = duplicates(duplicateArray1);

const sentece = "Process exited with code 1";
const longest = longestSentence(sentece);

console.log(max);
console.log(duplicate);
console.log(duplicate1);
console.log(longest);