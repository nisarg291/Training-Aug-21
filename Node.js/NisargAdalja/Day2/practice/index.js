// 1. Create one txt file name it as person.txt and write in that hello world

var fs=require('fs');
const { mainModule } = require('process');
fs.writeFile("person.txt","Hello world",function(){

});

/*
2. Append hello India in person.txt.*/

fs.appendFile("person.txt"," Hello India",function(err){
   if(err) throw err;
   console.log("saved");
});
/*
3. Accept your name from command line. And append it to person.txt as “hello “+
“name”.
*/
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Who are you?', name => {
  console.log(`Hey there ${name}!`);
  fs.appendFile("person.txt"," hello "+name,function(err){
      if (err) throw err;
      console.log("succesfully name appended");
  });
  readline.close();
});

/*
4. Create two txt files, write some dummy text. Read two file content and print it in the console. use async and await.
*/
const WriteAndRead=()=>{
     return new Promise((resolve, reject) => {
fs.writeFile("person1.txt","hello nisarg you are first person", async function(){
    console.log("saved");
});

fs.writeFile("person2.txt","hello avi you are second person", async function(){
    console.log("saved");
});

fs.readFile("perseon1.txt",'utf8',function(err,data){
    console.log(data);
});

fs.readFile("perseon2.txt",'utf8',function(err,data){
    console.log(data);
});
resolve();
     });
};

const main = async () => {
    await WriteAndRead();   
}
main()

/*
5. Write your address in one txt file and find out how many consonants are there.
*/
fs.writeFile("address.txt","Ahmedabad,Gujarat,India",function(){

});
fs.readFile("address.txt",'utf8',function(err,data){
    data=data.toUpperCase();
    var count=0;
    for(var i=0;i<data.length;i++){
       // data=data.toUpperCase();
        //console.log(data.charCodeAt(i));
        if(data.charCodeAt(i)!=65 && data.charCodeAt(i)!=69 && data.charCodeAt(i)!=73 && data.charCodeAt(i)!=79 && data.charCodeAt(i)!=85) {count+=1;}
        
    }
    console.log("count of consonent "+count);
});

/*
6. Remove person.txt file.*/
fs.unlink("person.txt",(ferr,fc)=>{
    if(ferr) ferr;
    console.log("file deleted");
});
