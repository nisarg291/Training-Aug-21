/* Do mathematical operation like Addition, subtraction, multiplication, div.

Use case statement.

Accept two numbers from the user from the command line.

Create Separate function for add, sub, multi and div

And store the result in one txt file. And display the result from file.*/

const fs= require('fs');
var result=0;
var num1=0;
var num2=0;
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const question1 = () => {
    return new Promise((resolve, reject) => {
        readline.question('Enter first Number: ', number => { num1 = parseInt(number); resolve() })

    })
}

const question2 = () => {
    return new Promise((resolve, reject) => {
        readline.question('Enter second Number: ', number => { num2 = parseInt(number); resolve() })
    })
}

const question3 = () => {
    return new Promise((resolve, reject) => {
        readline.question('type any one operation : add sub div multi: ', data => {
            switch (data) {
                case 'add':
                    add(num1, num2);
                    break;
                case 'sub':
                    sub(num1, num2);
                    break;
                case 'div':
                    div(num1, num2);
                    break;
                case 'multi':
                    mul(num1, num2);
                    break;
                default:
                    result = 'enter a valid operation'
            }
            fs.writeFile('./assignment.txt',result.toString(), err => {
                if (err) {
                    console.log(err);
                }
            })
            resolve()
        })
    })
}

function add(a,b){
    result=`addition of ${a} and ${b} is `+(a+b);
} 
function sub(a,b){
    result=`subtraction of ${a} and ${b} is `+(a-b);

}
function mul(a,b){
    result=`multiplication of ${a} and ${b} is `+(a*b);

}
function div(a,b){
    result=`division of ${a} and ${b} is `+(a/b);

}


const getText = (path) => {
    return new Promise((resolve, reject) => {
        const read1 = fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }

        })
    })
}

const main = async () => {
    await question1()
    await question2()
    await question3()
    readline.close()
    const res = await getText('./assignment.txt')
    console.log(res);

}
main()




// fs.readFile("result.txt",'utf8',function(err,data){
//     console.log(data);
// });
// print it
//console.log(content.toString());