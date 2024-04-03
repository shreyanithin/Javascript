//Write a function called count Vowels that takes a string as input and returns the number of vowels in the string.
//  eg: input :  HelloWorld 
//  output : 3
let count=0;
let count_vowels=(s) =>{
    for(let i=0;i<s.length;i++){
        if (s[i]=='a'|| s[i]=='e'||s[i]== 'i'||s[i]== 'o'||s[i]=='u'){
            count++;
        }
    }
    console.log(count);
} 
let s=count_vowels('shreya');