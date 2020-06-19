const filePath = module.path // we have acces


process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    console.log("This is our console.log: ", cmd)
    if (cmd === "pwd"){
        process.stdout.write(filePath)
    }
    else{
        process.stdout.write("You typed: " + cmd);
        process.stdout.write('\nprompt > ');
    }

});

//console.log(module)
