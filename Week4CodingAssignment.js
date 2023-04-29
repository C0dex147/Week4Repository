//.1
    let ages = [3, 9, 23, 64, 2, 8, 28, 9, 93];
   //1b.
    ages[9] = 99;   
    //1a.
        console.log('1a: ' + (ages[ages.length-1] - ages[0]));
    //1c.
    let avg = 0;
        for(let i =0; i < ages.length;i++) {
        avg += ages[i];
    }
    let averageAge = avg / ages.length;

        console.log('1c: ' + (averageAge.toFixed()));

//.2
    const names = ['Sam','Tommy','Tim', 'Sally','Buck','Bob'];
    //2a.
    let total2 = 0
         for(let i=0;i<names.length;i++){
        total2 = names[i].length;
    }
        console.log('2a: ' + total2)
    //2b.
    let newNames = names.join(' ')
        console.log('2b: ' + newNames)
        

//3. Use .length and subtract 1 from it. Example: console.log(array[array.length-1]) or (array[length -1])

//4. Arrays are zero indexed so you would access it by applying 0 when addressing an array value. Example: console.log(array[0])
//5.
    for(let i=0;i<names.length;i++){
console.log(names[i].length) };

  
//6.
let nameLengths = [3, 5, 3, 5, 4, 3];
let nameLengthSum = nameLengths.reduce(function(a, b){
    return a + b;})
    console.log('6: ' + nameLengthSum)

   
 //7.
 let wordFunction = function(word, n) {
    console.log(word.repeat(n))
 }  
wordFunction('Howdy',3)

//8.
let fullNameFunction = function(firstName, lastName) {
    console.log(firstName + ' ' + lastName)
}
fullNameFunction('Conway', 'Twitty')

//9.
let numbersArray = [7, 26, 16, 9, 20, 18]
let sum =numbersArray.reduce(function(a, b){
                 return a + b;
});
let numbersFunction = function (sum){
    if (sum > 100){
        console.log(true)
    }
else {console.log(false)}}

numbersFunction(sum)

//10. 
let averageNumbersArray = [17, 21, 98, 150, 87, 200]


let numberAverage = function(averageNumbersArray){
    let numAvg = 0;
    for ( let i =0; i < averageNumbersArray.length; i++){
       numAvg += averageNumbersArray[i];
    }
   return numAvg / averageNumbersArray.length;
}
console.log(numberAverage(averageNumbersArray))

//11.
let array1 = [ 8, 6 , 5 ,3 ,0, 9]
let array2 = [ 6, 5 ,4 ,3 ,2 , 1]

let avg1 = (numberAverage(array1))
let avg2 = (numberAverage(array2))

let arrayAverage = function(){
    if (avg1 > avg2) {
        console.log(true)
    }else {console.log(false)}
}
console.log(arrayAverage())

//12.
let willBuyDrink = function(isHotOutside, moneyInPocket){
    if (isHotOutside == true && moneyInPocket > 10.50){
        console.log(true)
    }else( console.log(false))

}
    console.log(willBuyDrink(true, 9.50))


//13.
let shouldMakeCoffee = function(timeOfDay, tired){
    if (timeOfDay < 10 && tired == true){
        console.log('Go get caffinated!')
    }else (console.log("You're good on coffee"))
}

console.log(shouldMakeCoffee(9, true))






