// Functions in java Script.
// writing function Syntax.
/*i.e function function_name()
{
    statements....
}
example:-*/

function print()
{
 console.log("Hello World"); 
}
print();
print();
print();

// function using parameters
function sum(a,b)
{
    var sum;
    sum= a+b;
    console.log(sum);
}
sum(2,5);
sum(13,14);

// function with return value
 function ret_sum(a,b,c)
 {
    var sum=a+b+c;
    return sum;
 }
 function percen(tot)
 {
    var per= (tot/300)*100;
    return per;
 }
var total=ret_sum(85,90,78);
var percen=percen(total);
console.log("The total value is:"+total);
console.log("The Percentage is:"+percen);

//local and Global Variable
// global variabes which are defined outside the function can be acessed from within the function and outside the function.
// And local variables are defined wihin the function and can only be used within that function only.
var m="Soumyadeep Dandapat";
function glob_loc()
{   var n="Karma"
    console.log(m);
    console.log(n);
}
glob_loc();
console.log(m);
// console.log(n); //will throw error


