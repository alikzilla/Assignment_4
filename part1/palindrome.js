function isPalindrome(s){
    for (let i = 0; i < s.length; i++) {
       if(s.charAt(i) !== s.charAt(s.length - 1 - i)){
        return false;
       }
    }
    return true;
}

const string = "racecar";
const string1 = "alice";

console.log(isPalindrome(string));
console.log(isPalindrome(string1));