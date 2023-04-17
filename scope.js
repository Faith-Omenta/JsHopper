let a=20; //global variable
function add(b){
    console.log(a+b);
    let fruit='Apple';//local variable cannot be accessed outside the function
    console.log(fruit);
}
add(50);

function subtract(c){
    // a=6;
    let a=50;
    console.log(a-c);
}
subtract (100);
console.log("a2",a);
// console.log({b});

function greet(){
    let hello ="hi";
    function talk(){
        let c="hello there"
        console.log(`${hello} ${c}`);
    }
    talk();
}
greet();