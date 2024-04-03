// for(let i=1;i<=5;i++){
//     for (let j = 1;  j <= i; j++) {
        
//         process.stdout.write('*');  
//     }
//     console.log(

//     );
// }

//alternate method

let s = '';
for(let i = 1; i <= 5; i++){
  for(let j = 1; j <= i; j++){
    s+= '*';
  }
  s += "\n";
}
console.log(s);