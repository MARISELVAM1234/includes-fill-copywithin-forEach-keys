// fill() (red,3) red-value ,3(start)- the value changed to  display in index position of 3 and after the place fill in red )
var color  = ["red","yellow","green","blue","orange","pink","darkBlue"];
var selectColor = color.fill("red",3,6) //((6 - end value)6-1 = 5  to fill the value in index position upto 5)
console.log(selectColor)


//includes() to check the number in the array ...the element is present "true"
var number = [1,2,3,4,5];
var letter = ["One", "Two","Three","eight","Five"];
var check = letter.includes("six");
var check1 = number.includes(1);
console.log("To check:" ,check1);
console.log("To check:" ,check);


// copyWithin()   target , start ,end(2,4,6)
var number = [20,30,40,50,60,70,80,90];
var range = number.copyWithin(2,4,6);  
console.log (range)

//forEach() to display the the element in one by one
var a = [1,2,3,4,5]
function myFunction (a){
    console.log(a)
}
a.forEach(myFunction)


//keys()  to display the the index position in one by one
var number = [20,30,40,50,60,70,80,90];
var iterator = number.keys();
for (var c of iterator){
    console.log(c)
}
