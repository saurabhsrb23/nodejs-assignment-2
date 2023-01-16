const readline =require('readline');

let readLine=readline.createInterface(process.stdin,process.stdout);
readLine.question('Please enter your name : ',(user)=>{
    readLine.setPrompt("hello"+ `${user}`)
    readLine.prompt();
    readLine.close();
})