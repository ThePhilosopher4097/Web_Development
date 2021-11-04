var files = require('fs');
//var data = "Hello World!!!"
//Writting the contents from 'data' into the file 'write_test.txt'
//Create new file if it is not existing. Overwrite the contents if the file is already present in the current directory
/*files.writeFile('write_test.txt',data,function(err){
    if(err)
        console.log(err);
    else
        console.log("Write operation complete!");
});

//Append contents into existing file.
files.appendFile('write_test.txt',"This is file module!",function(err){
    if(err)
        console.log(err);
    else
        console.log("Append operation complete!");
});
*/

var data = files.readFileSync('write_test.txt','utf8');
console.log("File contents are: "+data);
data = data.split('\n')
for(let i=0;i<data.length;i++){
    k = data[i].split('|')
    for(let j=0;j<8;j++){
        console.log(k[j]);
    }
}

/*files.unlink('write_test.txt',function(){
    console.log("File deleted!");
});
*/