// var obj = {
//     name : "saad",
//     age : 22,
//     uni : "SMIU"
// }

// for(var key in obj){
//     document.write(key+" : "+obj[key],"<br>")
// }

// var arr = ["saad","ali"]
// document.write(arr)
// document.write(obj)
// console.log(obj.age)

// var stud1 = {
//     name: "saad",
//     age: 22
// }

// var stud2 = {
//     name: "aliyan",
//     age: 20
// }


// function Hassan(name, email, age) {
//     this.name = name,
//         this.email = email,
//         this.age = age
//     return this.name + this.email + this.age
// }

// var a = new Hassan("Saad", "Ali", 22)
// var b = new Hassan("Hassaan", "Shahid", 18)
// var a = new Saad("Saad","Ali",22)
// console.log(a,b)
// document.write(a)
// for(var key in a){
//     document.write(key+" : "+a[key],"<br>")
// }



var quiz = [
    {
        ques : "what is html",
        correctAns : "hyper text markup language",
        opts : [
            "hyper text markup language",
            "hyper text markupss language",
            "hyper text markup232 language",
            "hyper text markup877 language"
        ]
    },
    {},
    {}
]
// console.log(quiz[0].ques)
for(var i=0; i<quiz[0].opts.length; i++){
    document.write("<input type='radio'>",quiz[0].opts[i],"<br>")
}











