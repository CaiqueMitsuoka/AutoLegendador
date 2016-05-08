var sys = require('sys');
var exec = require('child_process').exec;
var fs =  require('fs');
exec("cd", function (error, programPath, stderr){
    if(error){
        console.log('Code: ' + error + '\n' + stderr);
    }else{
        //for(a=0;a<programPath.length;a++){
        //    console.log(programPath[a]);
        //}
        console.log(programPath.slice(0,programPath.length - 2));
        programPath = programPath.slice(0,programPath.length - 2);
        command = 'node ' + programPath + '\\'+'getsub.js' + " %cd%"
        fs.writeFile('./file.bat', command);
    }
});
