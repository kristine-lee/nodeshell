const filePath = module.path 


process.stdout.write('prompt > ');


function pwdFunction (data){
    const cmd = data.toString().trim();
    //
   // console.log("This is our console.log: ", cmd)
    if (cmd === "pwd"){
        process.stdout.write(filePath);
        process.stdout.write('\nprompt > ');
    }
    else{
        process.stdout.write("You typed: " + cmd);
        process.stdout.write('\nprompt > ');
    }
//
}

 process.stdin.on('data', pwdFunction);

//console.log(module)


module.exports = pwdFunction;