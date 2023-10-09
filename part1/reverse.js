function reverseString(s){
    let reverse = "";
    for(let i = s.length - 1; i >= 0; i--){
        reverse += s.charAt(i); 
    }
    return reverse;
}

const string = "Alikhan";

console.log(reverseString(string));