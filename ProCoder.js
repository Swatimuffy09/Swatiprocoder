//  1. hello world

function start() {
    console.log("Hello World");
}
start();
// 2. add two numbers
function add(num1,num2) {
    let sum=0;
    
    sum=num1+num2;
return sum;
}
console.log(add(10,15));

// 3. wap to find the square root
function root() {
    let a=Math.sqrt(6);
    return a;
}
console.log(root());
// 4. Calculate the area of a triangle
function areaOfTriangle() {
    let length=prompt("Enter the length");
    let breadth=prompt("Enter the breadth");
    let area=(length*breadth)/2;

    return area;
}
console.log(areaOfTriangle());
// 5. Positive or negative
function positiveOrnegative(num) {
    if(num>0) {
        console.log("Positive number");
    }
    else{
        console.log("Negative Number");
    }
    return num;
}
console.log(positiveOrnegative(7));

// 6. wap that assign a letter grade based on a numerical grade
function gradeMarks(score) {
    let grade;
    if(score>80 && score<100) {
        grade="A";
    }
    else if(score>70 && score<80) {
        grade="B";
    }
    else if(score>60 && score<50) {
        grade="C";
    }
    else if(score>40 && score<50) {
        grade="D";
    }
    else{
        grade="F";
    }
return grade;
}
console.log(gradeMarks(32));
// 7. Largest number
function largestNumber() {
    let num1=55;
    let num2=63;
if(num1>num2) {
console.log("Num1 is greater");
} 
else{
    console.log("Num2 is largest");
}
}
console.log(largestNumber());

// 8. Simple Calculator
let tell = prompt("What would you  like to do (*,/,+,-)");
let dig1 = prompt("Enter first Number");
let dig2 = prompt("Enter second Number");

function calculate(a,b) {
    let answer = tell;
    switch (a,b) {
        case "*":
            answer = a * b;
            break;
        case "/":
            answer = a / b;
            break;
        case "+":
            answer = a + b;
            break;
        case "-":
            answer = a - b;
            break
    }
    return answer;
}

console.log(calculate(dig1,dig2,tell));

// 9. Reverse a number
function reverseNum(num) {
    let dig;
    let rev=0;
    while(num!=0) {
        dig=num%10;
        rev=(rev*10)+dig;
        num=Math.floor(num/10);
    }
    return rev;
}
console.log(reverseNum(12748));

// 10.Prime Number
function primeNumber(n) {
    if(n==1) {
        false;
    }
    else if(n==2) {
        true;
    }
    else{
        for(let i=2;i<n;i++) {
            if(n%i===0) {
                return false;
            }
        }
        return true;
    }
}
console.log(primeNumber(37));

// 11.factorial of a Number
function factorialNum(num) {
    let fact;
    if(num<0) {
        console.log("Cannot perform for :" + num);
    }
    else if(num===0) {
        console.log("Result: 0");
    }
    else{
        let fact=1;
        for(let i=1;i<=num;i++) {
            fact=fact*i;
        }
    }
    return fact;
}
console.log(factorialNum(7));

// 12.fibonacci series
function fibonacciSeries(num) {
    let num1=0;
    let num2=1;
    let sum=0;
    for(let i=0;i<num;i++)
    {
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }
    return sum;
}
console.log(fibonacciSeries(7));

// 13. Armstrong Number
// take an input
const number = prompt("Enter a positive integer");
const numberOfDigits = number.length;
let sum = 0;

// create a temporary variable
let temp = number;

while (temp > 0) {

    let remainder = temp % 10;

    sum += remainder ** numberOfDigits;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}

if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}
// 14. check if the givennumber is a leap year or not

function leapYear() {
    let year=prompt("Enter a year");
    if(year%4==0 || year%100!=0 || year%400==0) {
        console.log("Leap Year is" + year);
    }
    return year;
}
console.log(leapYear());

// 15. HCF of a number
function hcf(a,b) {
    if(b==0) {
        return a;
    }
    return hcf(b,a%b);
}
console.log(hcf(12,18));

// 16.Binary to Decimal
function binaryToDecimal(n) {
    let num=n;
    let dec=0;
    let base=1;

    let temp=num;
    while(temp) {
        let last_dig=temp%10;
        temp=Math.floor(temp/10);
        dec=dec+last_dig*2;
        base=base*2;
    }
    return dec;

}
console.log(binaryToBinary(10101001));

// 17.Palindrome Number
function palindromeNum(num) {
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let dig = temp % 10;
        sum = (sum * 10) + dig;
        temp = Math.floor(temp / 10);
    }
    if (sum === num) {
        return "Palindrome Number";
    } else {
        return "Not a Palindrome Number";
    }
}

console.log(palindromeNum(15951));
// 18.Largest Number
function largestNumber(arr)
{
let max=0;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>max)
    {
        max=arr[i];
    }
}
return max;
}
console.log(largestNumber([12,45,67,89,34]));

// 19. Second Largest
function secondLarge(arr)
{
let max1=arr[0];
// we can also take infinity- let max2=Infinity
let max2=arr[0];
for(let i=1;i<arr.length;i++)
if(arr[i]>max1)
{
    max2=max1;
    max1=arr[i];
}
else (arr[i]>max2 && arr[i]!=max1)
{
    max2=arr[i];
}
return max2;
}
console.log(secondLarge([4,7,12,20]));

// 20. Power of a number
function powOfNum(n,p){
    let numb=Math.pow(n,p);
    return numb;
}
console.log(powOfNum(8,2));

// 21. Second smallest number 
function secondSmall(array)
{
    let small1=array[0];
    let small2=array[0];
    for(let i=0;i<array.length;i++)
    {
        if(array[i]<small1)
        {
            small2=small1;
            small1=array[i];
        }
        else (array[i]>small1 && array[i]<small2)
        {
            small2=array[i];
        }
    }
    return small2;
}
console.log(secondSmall([2,1,3,6,7,9]));
// 22. Sum of numbers in array
function sumOfNum(arr) {
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    return sum;
}
console.log(sumOfNum([12,4,56,74,89,345]));

// 23. Calculate the sum of even numbers
function sumEven(array) {
    let sum=0;
    for(let i=0;i<array.length;i++)
    {
        if(array[i]%2==0)
        {
            sum=sum+array[i];
        }
    }
    return sum;
}
console.log(sumEven([12,55,67,89,82]));

// 24. Shuffle the deck of cards
function shuffleDeck(array) {
    currentCard = 0;
    for(let i = array.length - 1; i > 0; i--){
       const j = Math.floor(Math.random() * (i + 1));
       const temp = array[i];
       array[i] = array[j];
       array[j] = temp;
    }
    return array;
 }

//  25.Swap the elements of arra y

function swapElements(arr) {
    let temp=arr[1];
    arr[1]=arr[2];
    arr[2]=temp;
}
console.log(swapElements([12,45,33,89]));

// 26. Clone the array elements

function cloneArray(arr) {
    return arr.slice(1);
}
console.log(cloneArray([1,3,5,7]));
console.log(cloneArray([1,3,[5,7]]));

// 27. Count the number of elements in array
function countArray(arr) {
    let count=0;
    for(let i=0;i<arr.length;i++)
    {
    count++;
    }
    return count;
}
console.log(countArray([12,45,64,77,30]));

// 28. Frequency of an element in an array
function frequency(ar) {
    let a=1;
    let b=0;
    let item;
    for(let i=0;i<ar.length;i++)
    {
        for(let j=i;j<ar.length;j++)
        {
            if(ar[i]==ar[j])
            b++;
            if(a<b)
            {
                a=b;
                item=ar[i];
            }
        }
        b=0;
    }
    return a;
}
console.log(frequency([1,3,5,7,8,2,1,5,1]));

// 29. sort an array elements
function Numeric_sort(ar) {
    let i = 0, j;
    while (i < ar.length) {
        j = i + 1;
        while (j < ar.length) {
 
            if (ar[j] < ar[i]) {
                let temp = ar[i];
                ar[i] = ar[j];
                ar[j] = temp;
            }
            j++;
        }
        i++;
    }
}
 
// Original Array
let arr = [1, 15, 10, 45, 27, 100];
 
console.log("Original Array");
console.log(arr);
 
Numeric_sort(arr);
 
console.log("Sorted Array");
 
console.log(arr);

// 30.the sum and product of an array of integers.
var array = [1, 2, 3, 4, 5, 6],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    p *= array[i];
    }
console.log('Sum : '+s + ' Product :  ' +p); 

// 31.Swap the first and last element in an array
function swapElements(arr) {
    let temp=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
    return arr;
}
console.log(swapElements([12,45,23,90,77]));

// 32.Write a JavaScript program to display the colors in the following way.

// Here is the sample array:
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Output
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -

var color=["Red","Blue","Green","Orange","Yellow"];
function Display(n) {
    var o=["st","nd","th","rd"];
    x=n%100;
    return x+(o[(x-20)%10]||o[x]||o[0]);
}
for(n=0;n<color.length;n++)
{
    var display=n+1;
    var output=(Display(display)+ "choice is"+ color[n] + ".");
    console.log(output);
}

// 33. display array elements within certain range
function rangeBetwee(start, end) 
{
  
		if (start > end) {
			var arr = new Array(start - end + 1);
			for (var i = 0; i < arr.length; i++, start--) {
				resarrult[i] = start;
			}
			return arr;
		} 
       else 
       {
			var arro = new Array(end-start+1);
         
		for (var j = 0; j < arro.length; j++, start++) 
        {
			arro[j] = start;
		}
      		return arro;
		}
	}

console.log(rangeBetwee(4, 7));
console.log(rangeBetwee(-4, 7));

//  34. All strings functions and method
const text1 = 'hello';
const text2 = 'world';
const text3 = '     JavaScript    ';

// concatenating two strings
const result1 = text1.concat(' ', text2);
console.log(result1); // "hello world"

// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2); // HELLO

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); // JavaScript

// converting the string to an array
const result4 = text1.split();
console.log(result4); // ["hello"]

// slicing the string
const result5= text1.slice(1, 3);
console.log(result5); // "el"

// 35. Reverse a string
function reverseString(str) {
    let k="";
    for(let i=str.length;i>=0;i--) {
        k=k+str[i];
    }
    return k;
}
console.log(reverseString("How you doin?"));

// 36.Count the number of repeating characters in a string
function countRepeat(str,x) {
    let count=0;
    let n=10;
    for(let i=0;i<str.length;i++) {
        if(str[i]==x)
        count++;
    let repeat=n/str.length;
    count=count*repeat;

        for(let i=0;i<n%str.length;i++)
        {
            if(str[i]==x) {
                count++;
            }
        }
    }
    return count;
}
console.log(countRepeat("Hoieurjsiksgicailji","i"));

// 37.  Check whether there is any repeating character in a string.
function duplicate(str) {
    for(var i = 0; i <= str.length; i++) {
        for(var j = i+1; j <= str.length; j++) {
            if(str[j] == str[i]) {
                return false;
            }
        }
    }
    return true;
}
console.log(duplicate("Jungleinalsuirn"));

// 38. Permutation of characters in a string

function permute(str, l, r) 
{ 
    if (l == r) 
            document.write(str+"<br>"); 
        else
        { 
            for (let i = l; i <= r; i++) 
            { 
                str = swap(str, l, i); 
                permute(str, l + 1, r); 
                str = swap(str, l, i); 
            } 
        } 
} 
  
function swap(a, i, j) 
{ 
    let temp; 
let charArray = a.split(""); 
temp = charArray[i] ; 
charArray[i] = charArray[j]; 
charArray[j] = temp; 
return (charArray).join(""); 
} 
  
let str = "ABC"; 
let n = str.length; 
permute(str, 0, n-1); 

// 39. Count the number of vowels and consonants

function countVowcon(str) {
    let vowel = 0;
    let consonant = 0;
    for (let i = 0; i < str.length; i++) {
        if (
            str[i] === 'a' ||
            str[i] === 'e' ||
            str[i] === 'o' ||
            str[i] === 'u' ||
            str[i] === 'i' ||
            str[i] === 'A' ||
            str[i] === 'E' ||
            str[i] === 'O' ||
            str[i] === 'U' ||
            str[i] === 'I'
        ) {
            vowel++;
        } else if (str[i] !== ' ' && ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z'))) {
            consonant++;
        }
    }
    return { vowel, consonant };
}

console.log(countVowcon("Be you always"));


// 41. Find vowels in a string
function checkVowel(str) {
let vowel=0;
str=str.toLowerCase();
for(let i=0;i<str.length;i++)
{
    if(str.charAt(i)==='a' || str.charAt(i)==='e'|| str.charAt(i)==='i'|| str.charAt(i)==='o'|| str.charAt(i)==='u')
    {
        vowel+=1;
    }
}
return vowel;

}
console.log(checkVowel("JADN,DOIUWEAAO"));

// 42. Check if two strings are equal or not
function equalStrings(str1,str2) {
    if(str1==str2)
    {
        return 'Both strings are equal';
    }
   
        return 'Both strings are unequal';
    
}
console.log(equalStrings("Javascript,javascript"));

// 43. to concate 2 strings( to merge or join)
let a = "HELLO";
let b = "Mate";
let c = a.concat(" ", b);
console.log(c);

// 44. Pattern1 
//    1
//    1 2
//    1 2 3
//    1 2 3 4
//    1 2 3 4 5

let rows = 5;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
   // inner loop runs for n
   for (let num = 1; num <= n; num++) {
      pattern += num;
   }

   // Add a new line character after contents of each line
   pattern += "\n";
}
console.log(pattern);

// 45. Pattern2
// 1
// 2 2
// 3 3 3
// 4 4 4 4 
// 5 5 5 5 5
let r = 5;

// pattern variable carries the final pattern in string format
let pattern1 = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= r; n++) {
   for (let num = 1; num <= n; num++) {
      pattern1 += n;
   }
   pattern1 += "\n";
}
console.log(pattern1);

// 46. Pattern3
// 1
// 2 3 
// 4 5 6
// 7 8 9 10
let rows1 = 4;

// variable contains the next element of the pattern
let variable = 1;

// pattern variable carries the final pattern in string format
let pattern2 = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows1; n++) {
   for (let num = 1; num <= n; num++) {
      patter2 += variable+" ";
      variable++;
   }
   pattern2 += "\n";
}
console.log(pattern2);

// 47.Pattern4
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
let rows3 = 5;

// pattern variable carries the final pattern in string format
let pattern4 = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows3; n++) {
   for (let num = 1; num <= 6 - n; num++) {
      pattern4 += num;
   }
   pattern4 += "\n";
}
console.log(pattern4);

// 48. Pattern5
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

let rows4 = 5;
let pattern5 = "";

for (let n = 1; n <= rows4; n++) {
   for (let num = 1; num <= 5; num++) {
      pattern5 += "*";
   }
   pattern5 += "\n";
}
console.log(pattern5);

// 49. Pattern 6
* * * * *


let rows5 = 5;
let pattern6 = "";

for (let n = 1; n <= rows5; n++) {
   for (let num = 1; num <= 5; num++) {
      // print star only if it is the boundary location
      if (n == 1 || n == rows5) pattern6 += "*";
      else {
         if (num == 1 || num == 5) {
            pattern6 += "*";
         } else {
            pattern6 += " ";
         }
      }
   }
   pattern6 += "\n";
}
console.log(pattern6);

// 50. Pattern 7
let rows6 = 5;
let pattern7 = "";
for (let n = 1; n <= rows6; n++) {
   // Inner loop to prints spaces
   for (let space = 1; space <= rows6 - n; space++) {
      pattern += " ";
   }

   // Inner Loop to prints stars
   for (let num = 1; num <= n; num++) {
      pattern7 += "*";
   }
   pattern7 += "\n";
}
console.log(pattern7);

// 51. Pattern8
let rows7 = 5;
let pattern8 = "";
for (let n = 1; n <= rows7; n++) {

   for (let num = 1; num <= n; num++) {
      pattern8 += "*";
   }
   pattern8 += "\n";
}
console.log(pattern8);

// 52. Pattern 9
let rows8 = 5;
let pattern9 = "";
for (let n = 1; n <= rows8; n++) {
   for (let space = 1; space <= rows8 - n; space++) {
      pattern9 += " ";
   }

   for (let num = 1; num <= 2 * n - 1; num++) {
      pattern9 += "*";
   }
   pattern9 += "\n";
}
console.log(pattern9);

// 53. Pattern-10
let num = 5; 
for (let i = num; i >= 1; i--) { 
    let str = "* "; 
    console.log(str.repeat(i)); 
}

// 54. Print the diagonals of an array
let mat = [
    [1, 2, 3, 10],
    [4, 5, 6, 11],
    [7, 8, 9, 12],
    [13, 14, 15, 16]
];
 
// Getting the number of rows 
// and columns in the matrix
let rowLen = mat.length;
let colLen = mat[0].length;
 
// Looping through diagonals
for (let i = 0; i < rowLen + colLen - 1; i++) {
 
    // Checking if current 
    // diagonal is even or odd
    if (i % 2 === 0) {
     
        // Looping through elements in 
        // the current diagonal (even)
        for (let j = Math.min(i, rowLen - 1); j >= 0
            && i - j < colLen; j--) {
             
            // Print the element in 
            // the current diagonal
            console.log(mat[j][i - j]);
        }
    } else {
     
        // Looping through elements in 
        // the current diagonal (odd)
        for (let j = Math.min(i, colLen - 1); j >= 0
            && i - j < rowLen; j--) {
             
            // Printing the element 
            // in the current diagonal
            console.log(mat[i - j][j]);
        }
    }
}

// 55. Pattern-11
function printSquare(size) { 
    for (let i = 1; i <= size; i++) { 
        let line = ""; 
        for (let j = 1; j <= size; j++) { 
            line += "*  "; 
        } 
        console.log(line); 
    } 
} 
  

let patternSize = 5; 
  
 
printSquare(patternSize);

// 56. Pattern-12
let num1 = 5; 
for (let i = 1; i <= num1; i++) { 
    let str = '';
    for(let j = 1; j <= 2*num1-1 ; ++j){ 
        if(i+j == num1 +1||(i+num1==j+1) ||i==num1) 
        str+='* '; 
        else
        str+='  '; 
    } 
    console.log(str); 
}
// 57. Pattern-13
let num2 = 5; 
for (let i = num2; i >= 1; i--) {     
   let str = ''
    for(let j = 1; j <= 2*num2-1 ; ++j){ 
        if(i+j == num2 +1||(i+num2==j+1) ||i==num2) 
        str+='* '; 
        else
        str+='  '; 
    } 
    console.log(str); 
}

// 58.Pattern-14
let num3 = 5; 
for (let i = 1; i <= num3; i++) { 
    let str = ''
    for (let j = 1; j < 2 * num3; ++j) { 
        if (i + j > num3 + 1 && (i > j - num3 + 1)) 
            str += ' '; 
        else
            str += '*'; 
    } 
  
    console.log(str); 
} 
for (let i = num4 - 1; i >= 1; i--) { 
    let str = ''
    for (let j = 1; j < 2 * num4; ++j) { 
        if (i + j > num4 + 1 && (i > j - num4 + 1)) 
            str += ' '; 
        else
            str += '*'; 
    } 
  
    console.log(str); 
}
// 59. wap to find the missing number

function findMissingNumber(array) { 
    const n = array.length + 1; 
    const sum = (n * (n + 1)) / 2; 
  
    let sumOfArray = 0; 
    for(let i = 0; i < n - 1; i++) { 
        sumOfArray = sumOfArray + array[i]; 
    } 
  
    let missingNumber = sum - sumOfArray; 
  
    return missingNumber; 
} 
  
const array = [1, 2, 5, 4, 6, 8, 7]; 
const missingNumber = findMissingNumber(arr); 
console.log("Missing Number: ", missingNumber);

// 60. sum of numbers
function sumOfNumbers(num) {
    let sum=0;
    let i=1;
    while(i<=num) {
       sum+=i;
       i++;
    }
return sum;
    }
console.log(sumOfNumbers(50));


 