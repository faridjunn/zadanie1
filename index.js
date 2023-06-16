// Task one
//  function mul (a){
// let p = 4;
// return p * a;
// }
// console.log(mul(7));
// console.log(mul(8));
// console.log(mul(25));

//Task 2
// function s (a){
//     return a*a;
// }
// console.log(s(8));
// console.log(s(11));
// console.log(s(6));


//Task 3

function middle (a, b){
    
}


//Task 4
// function evenOrOdd (a){
//     if (a % 2 == 0) {
//         return 3;
//     }
//     else {
//         return 4;
//     }

// }
// console.log(evenOrOdd(12));
// console.log(evenOrOdd(7));
// console.log(evenOrOdd(-8));

//Task 5
// function calculation (x){
//     let y = 17 * x * x - 6 * x + 13;
//     return y;

// }
// console.log(calculation(2));
// console.log(calculation(0));
// console.log(calculation(10));

// Task 6
// function longestTime (h, m, s){
//   h= h*3600;
//   m= m*60;
//   s= s*1;
//    if (h>m && h>s){return h/3600;}
//    else if (m>h && m>s){return m/60;}
//    else {return s;}
// }
// console.log(longestTime(1, 59, 3598));
// console.log(longestTime(2, 300, 15000));
// console.log(longestTime(15, 955, 59400));

//Task 7

// function same(a){
//     b=a%10;
//     c=Math.floor(a/10%10);
//     d=Math.floor(a/100);
//     if (b==c && b==d){return true;}
//     else if (b==c && b!=d){return true;}
//     else if (b==d && b!=c){return true;}
//     else if (c==d && c!=b){return true;}
//     else {return false;}

// }
// console.log(same(212));
// console.log(same(897));
// console.log(same(811));
// console.log(same(111));


//Task 8

// function largestSwap (a){
//      b= a%10;
//      c= Math.floor(a/10);
//      d= b*10+c;
     
//      if (a>d){return true;}
//      else {
//         return false;
//      }
// }
// console.log(largestSwap(14));
// console.log(largestSwap(53));


//Task 9

// function addUp (a){
//     for (let i=1; i<a; i++){
//       let sum=0;
//         sum+=i;
        
//     }
//  return sum; 
// }

// console.log(addUp(4));
// console.log(addUp(13));
// console.log(addUp(600));


//Task 10

// function different(a, b, c){
//      if (a==b && b!=c){return 3;}
//      else if (a==c && c!=b){return 2;}
//      else if (a!=c && c==b){return 1;}
// }
// console.log(different(5, 5, 9));
// console.log(different(89, 1, 1));
// console.log(different(5, 9, 5));

//Task 11

// function evenNum(a, b){
//    let sum= 0;
//    let max=Math.max(a, b);
//    let min=Math.min(a, b);
//    for (let i=max; i>=min; i--){
//     if(i%2==0){
//         sum+=i;
//     }
//    }
//    return sum;
// }
// console.log(evenNum(-5, -3))

//Task 12

// function sum (a, b){
//     for (let i=1; i<=a; i++){
//         let  mul=0;
//        let  b=i*b;
//         mul+=b;

//     }
//     return mul;
// }
// console.log(sum(5,2))

//Task 13

// function max(a){
//     b=a%10;
//     c=Math.floor(a/10%10);
//     d=Math.floor(a/100%10);
//     e=Math.floor(a/1000);
//       let y=Math.max(b, c, d, e);
//       return y;
// }
// console.log(max(7132));
// console.log(max(897));
// console.log(max(811));

//Task 14

// function isSymmetrical(a){
//         b=a%10;
//         c=Math.floor(a/10%10);
//         d=Math.floor(a/100%10);
//         e=Math.floor(a/1000);
//         y= (b-e)+(c-d);
//         if (y==0){return true;}
//         else {return false;}
// }
// console.log(isSymmetrical(7227));
// console.log(isSymmetrical(9939));
// console.log(isSymmetrical(44444444));

//Task 15

// function addDigits(a){
//     b=a%10;
//     c=Math.floor(a/10%10);
    
//     d=b+c;
//     e=d%10;
//     f=Math.floor(d/10%10);

//     y=e+f;
//     return y;
// }
// console.log(addDigits(38));


//============================================================================== 
// =============================list two======================================
//============================================================================== 

//task 1

// function sum (a, b){
//     return a+b;
// }
// console.l
