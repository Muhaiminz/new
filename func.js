function sum(){
let Total=0
for(let a of   arguments)
Total+=a;
return Total;
}
console.log(sum(1,2,34,5,))