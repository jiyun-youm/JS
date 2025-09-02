function palindrome(string){
    let word=string.replaceAll(" ","");
    return word.split("").reverse().join("")===word;
}

console.log(palindrome('다시 합창 합시다'));


// function palindrome(param){                       //공백 제거
//     param=param.replaceAll(" ","");
// }
