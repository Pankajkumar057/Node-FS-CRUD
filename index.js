// fs module

const { write } = require('fs');
const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	fs.writeFile("write.txt","welcome world",(err)=>{
		console.log("file created");
	})
}
myFileWriter();


const myFileReader = async (fileName) => {
	const x = await fs.readFile("write.txt","utf-8",(err,data)=>{
		console.log(data);
	})
	console.log(x);
}
myFileReader();


const myFileUpdater = async (fileName, fileContent) => {
	fs.appendFile("write.txt"," how r u ?" ,(err)=>{
	    console.log("appended");
	})
}
myFileUpdater()

const myFileDeleter = async (fileName) => {
	fs.unlink("write.txt",(err)=>{
		console.log("file deleted");
	})
}
myFileDeleter();



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }