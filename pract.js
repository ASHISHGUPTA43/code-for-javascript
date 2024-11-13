// armstrong number(1)
// let n= prompt("enter the number")
// let c=n;
// let arm=0;
// let r;
// while(n>0){
//     r=n%10;
//     arm = (r*r*r)+ arm;
//     n=Math.floor(n/10);
// }
// if(c==arm){
//     console.log("armstrong number");
// }
// else{
//     console.log("not an armstrong number");

// }



// 11111(2)
// 22222
// 33333
// 44444
// 55555
// let s="";
// let n=prompt("enter the number")
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         s+=i;
//     }
//     s+="\n";
// }
// console.log(s);



// 1 (3)
// 12
// 123
// 1234
// 12345
// let s="";
// let n=prompt("enter the number")
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         s+=j;
//     }
//     s+="\n";
// }
// console.log(s);


// 12345 (4)
// 12345
// 12345
// 12345
// 12345
// let s=""
// let n=prompt("enter the number")
//  for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         s+=j;
//    }
//    s+="\n";
// }
// console.log(s);


// vowels and consonants(5)
// let char= prompt("enter the character");
// let vowels = ['a','e','i','o','u','A','E','I','O','U'];
// if(char=='a'|| char=='e'||char=='i'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U'){
//    console.log("vowels");
// }
// else if((char>='a' || char<='z') || char>='A' || char<='Z'){
//    console.log("consonants");
// }
// else{
//    console.log("not an alphabet");
// }


// leap year(6)
// let year = prompt("enter the year");
// if((year%4==0 && year%100!=0) || (year%400==0)){
//    console.log("leap year");
// }
// else{
//    console.log("not a leap year");
// }

// palindrome(7)
// let n=parseInt(prompt("enter the number"));
// let r;
// let c=n;
// let drome = 0;
// while(n>0){
//    r=n%10;
//    drome = r+(drome * 10);
//    n=parseInt(n/10);
// }
// if(c==drome){
//    console.log(c+ " palindrome number")
// }
// else{
//    console.log(c+" not a palindrome number")
// }


// prime number(8)
// let n= parseInt(prompt("enter the number"));
// let count = 0;
// for(let i=1;i<=n;i++){
//    if(n%i== 0){
//       count++;
//    }
//    if(count==2){
//       console.log(count+ " prime number");
//    }
//    else{
//       console.log(count+ " not a prime  number");
//    }
// }


// fibonacci(9)
// let n=prompt("enter the number");
// let a=0;
// let b=1;
// let c=a+b;
// for(let i=1;i<=n;i++){
//    console.log(c);
//    a=b;
//    b=c;
//    c=a+b;
// }


// tribonacci
// let n= prompt("enter the number")
// let a=0;
// let b=0;
// let c=1;
// let d=a+b+c;
// console.log(a);
// console.log(b);
// console.log(c);
// for(let i=1;i<=n;i++){
//    a=b;
//    b=c;
//    c=d;
//    d=a+b+c;
//    console.log(d);
// }