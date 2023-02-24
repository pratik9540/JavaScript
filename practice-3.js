const marks = {
    sonu:70,
    monu:80,
    raj:70
}
console.log(Object.keys(marks))
for(let i=0; i<Object.keys(marks).length; i++){
    console.log(Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
}
for (let a in marks){
    console.log(a)
}

let x=4
let a
while (a!=x) {
   a = prompt('Enter a number')
}
console.log("Correct")
