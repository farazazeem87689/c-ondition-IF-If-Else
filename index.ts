// - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
 
 var f:number=13;
 var c:number=12;
 var result:number= (f-32)*5/9;
 var result1:number=(9/5*c)-32;
 console.log("Celsius: " + result);
 console.log("Fahrenheit:" + result1);






// - Write a program that calculates the percentage

var obtainmark:number=856;
var totalmark:number=1100;
var percentage:number= obtainmark/totalmark*100;
console.log("Percentage:" +percentage);




// - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days?

var numOfDay:number=17;
var remainingDay:number=3;
var result:number= numOfDay/7;
var result1:number=remainingDay%7
console.log("week:" +result);
console.log("remaining day:" +result1);







// - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.

var price:number=100;
if(price>=100)
{
var result:number= 10/100 * price;
// var disacount:number= price - result;
 console.log("You got 10% discount on product:" +result);
// console.log("You got 10% discount on product:" +disacount);
}
else
{
    var result1:number=5/100 * price;
    // var disacount1:number= price - result1;
    console.log ("You got 5% discount on product :" + result1);
    // console.log ("You got 5% discount on product :" +disacount1);
}








// - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult.

var age:number=8;
if (age>=0  && age<=12)
{
    console.log("Child");
}
else if(age>12 && age<=19)
{
console.log("teenager");
}
else
{
    console.log("Adult");
}







// - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather?
var temperature:number=45;
if(temperature >=0 && temperature<=8)
{
    console.log("its very cold! You should wear a heavy winter coat, gloves, scarf, and a hat");
}
else if(temperature>15 && temperature<21)
{
console.log("It's cold outside. Consider wearing a warm jacket, a sweater, and a hat.");
}
else
{
    console.log("It's a moderate temperature. A T-shirt and jeans would be comfortable");
}








// var temperature:string="cold";
// switch(temperature)
// {
//     case"cold":
//     console.log("cold weather");
//     break;
//     case "warm":
//         console.log("warm weather");
        // break;
//         default:
//             console.log("normal weather");
//     break;

// }








// - Write a program that checks if the given year is leap year or not?
var leapYear:number=2010;
if (leapYear % 4==0)
{
console.log("Its leap Years");
}
else
{
console.log("Its not leap Years");
}






// - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name

var day:number=7;
if(day==1)
{
    console.log("Monday");
}
else if (day==2)
{
    console.log("Tuesday");
}
else if (day==3)
{
    console.log("Wednesday");
}
else if (day==4)
{
    console.log("Thursday");
}
else if (day==5)
{
    console.log("Friday");
}
else if (day==6)
{
    console.log("Saturday");
}
else
{
    console.log("Sunday");
}









// - Write a program that checks if the given number is divisible by 3 or 5 or both or not divisible by anyone show output accordingly
var num:number=234;
if(num %3==0)
{
    console.log("Number is divisible by 3");
}
else if (num %5==0)
{
    console.log("Numbe is divisible by 5");
}
else if (num %3==0 && num%5==0)
{
    console.log("Number is divisible by 3 and 5");
}
else
{
    console.log("Number is not divisible by 3 and 5");
}






// - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill

 var NumUnit:number=387;
if(NumUnit>100)
{
    var tax:number= 10/100 * NumUnit;
    console.log("User use greater than 100 units: " + tax);
}
else if( NumUnit>200  && NumUnit<500)
{
    var tax1:number= 15/100 *NumUnit;
    console.log("User use greater than 200 units: " + tax1);
}
else
{
    var tax2:number= 25/100 *NumUnit;
    console.log("User use greater than 500 units: " + tax2);
}



