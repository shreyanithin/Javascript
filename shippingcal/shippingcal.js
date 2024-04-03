// Develop a program that calculates the shipping cost based on the weight of the package and
// destination country. Prompt the user to enter the weight (in kg) and the destination 
// (domestic or international). 
// Apply the following shipping rates:
// domestic: $5 for the first kg, $2 for each additional kg.
// International shipping: $10 for the first kg, $5 for each additional kg.

let c;
let wt=parseInt( prompt("enter weight(in kg)"));
let des= prompt("enter destination (i for international and d for domestic");
if(des=='d'){
    org=5;
    add=2;
}
else if(des=='i'){
    org=10;
    add=5;
}
else{
    console.log('enter valid option');
}

if(wt<=1){
    c=org
    console.log('cost is '+c);
}
else {
    c=org+add*(wt-1);
    console.log('cost is '+c);
}
