// function factorial(n) {
//     var fact = 1
//     if (n == 0 || n == 1) {
//         fact = 1
//     } else {

//         for (let i = n; i >= 1; i--) {
//             fact = fact * i
//         }
//         return fact
//     }
// }
// console.log(factorial(4));



// function getLetter(s) {
//     let letter;
//     // Write your code here
//     switch(s[0]){
//         case 'a':
//             case'b':
//             case 'c': 
//         letter = "preimer";
//         break


//     }
//     return letter;
// }
// console.log(getLetter("bunapalabra"))



// function getSecondLargest(nums) {
//     // Complete the function
//     let largest = 0;
//     let second = 0;
//     for (let n=0; n < nums.length; n++){
//         if (nums[n] >largest){
//             largest = nums[n]
//         }
//     }
//     for (let n=0; n < nums.length; n++){
//         if (nums[n] > second){
//             if (nums[n] == largest){
//                 continue
//             } else{
//                 second = nums[n]
//             }
//         }
//     }
//     return second
// }
// nums = [7,5,9,8,6]
// console.log(getSecondLargest(nums))
// console.log(73);



// function reverse(data){
//     try {
//         let arr = data.split("")
//         let rev = arr.reverse()
//         let stringRev = rev.join("")
//         console.log(stringRev);
//     } 
//     catch (e) {
//         console.log(e.message);
//     }
//     finally{
//         console.log("finished proccess")
//     }
// }
// reverse("hola")



// function isPositive(a) {
//     if(a>0){
//              return "YES";
//      }
//      else if(a==0){
//          return "Zero Error"
//      }
//      else{
//          return "Negative"
//      }
//  }
//  console.log(isPositive(10))
//  console.log(isPositive(0))
//  console.log(isPositive(-10))



// function Rectangle(a, b) {
//     var length = a
//     var width = b
//     var perimeter = (a*2)+(b*2)
//     var area = a*b
//     const rectangle = {
//         length: length,
//         width: width,
//         perimeter : perimeter,
//         area : area
//     }
//     return rectangle
// }
// console.log(Rectangle(3,4))


// function getCount(objects) {
//     let count = 0
//     for (i in objects){
//         if (objects[i].x == objects[i].y){
//             count ++
//         }
//     }
//     return count
// }

// obj = [
//     {x:10, y:20}, {x:10, y:30},{x:20, y:20},{x:15, y:20}
// ]
// console.log(getCount(obj))



// class Poligon{
//     constructor(arrInt){
//         this.arrInt=arrInt;
//     }

//     perimeter(){
//         let per = 0
//         for (let i in this.arrInt){
//             per = per + this.arrInt[i]
//         }
//         return per
//     }
// }
// myarrInt = [3,5]
// p1 = new  Poligon(myarrInt)
// console.log(p1.perimeter());



// class Alumnos {
//     constructor(a,b){
//         this.a = a
//         this.b = b
//     }

//     static Error(name){
//         return `Error tipo ${name}`
//     }
// }
// var e1 = Alumnos.Error("BLOQUEO")
// console.log(e1);




// class Rectangle {
//     constructor(w, h) {
//         this.w = w;
//         this.h = h;
//     }
// }
// Rectangle.prototype.area = function(){
//     // var area = this.w * this.h
//     return this.h == null ? this.w * this.w : this.w == null ? this.h * this.h : this.h * this.w;
//     // return area
// }
// class Square extends Rectangle{
//     constructor(w,h){
//         super(w,h)
//         this.w = w
//         this.h = h
//     }
// }
// var sq = new Square(3,6)
// console.log(sq.area());



// function sides(str, ...val) {
//     let A = val[0];
//     let P = val[1]

//     s1 = (P + Math.sqrt(Math.pow(P, 2) - (16*A)))/4
//     s2 = (P - Math.sqrt(Math.pow(P, 2) - (16*A)))/4
//     resultArray=[s1, s2]
//     orderArray=resultArray.sort()
//     return orderArray
// }
// lado = sides`area${10} perimetro${20}`
// console.log(lado);


// function modifyArray(nums) {
//     let newArray = nums.map(Element => {
//         if (Element % 2 == 0) {
//             return (Element * 2)
//         }else{
//             return (Element* 3)
//         }
//     })
//     return newArray
// }
// var nums = [1, 3, 8, 2, 5, 7]
// console.log(modifyArray(nums))



// function getDayName(dateString) {
//     let dayName;
//     // Write your code here
//     dayName = new Date(dateString)
//     let dia = dayName.getDay()
//     let dow=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//     let diaLetra = dow[dia]
//     return diaLetra;
// }
// var dia = "12/07/2016"
// console.log(getDayName(dia))



// function regexMe(text){
//     // const re = /[\w]+\s[\w]/i
//     // const re = /^ho.*mundo$/i
//     // const re = /hola.*mi/ig
//     const re = /^([aeiou])([aeiou]).*\2\1$/ //coinciden las 2 primeras letras (vocales) del inicio y fin (capicua, digamos)
//     let result = re.exec(text)
//     return result
// }
// console.log(regexMe("ae11--11e"))


// function ValidarPatentes(text){
//     const re = /([\w]{2})[\d]{3}[\w]{2}|[\w]{3}[\d]{3}/ig
//     let res = re.exec(text)
//     return res
// }
// console.log(ValidarPatentes("AA506IB"))
// // console.log(ValidarPatentes("uum350"))
// // console.log(ValidarPatentes("A14gh-j"))


// function regexVar(text) {
//     const re = /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[a-zA-Z\s]*$/i //empieza por Mr. o Mrs. etc y el resto pueden ser solo letras o espacios 
//     var res = re.test(text)
//     return res;
// }
// console.log(regexVar("Er.Dr sdffgsd afa sdf"))

// function regexFind(text){
//     const re = /(\d+)/g //encuentra todos los numeros dentro de un texto
//     res = text.match(re)
//     return res
// }
// console.log(regexFind("fdsf 13 dfas 15 9 dfa fds"))


