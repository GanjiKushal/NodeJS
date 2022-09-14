const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	 return fs.writeFile(fileName,fileContent)
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	let a=await fs.readFile(fileName)
	return a
}

const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	return fs.appendFile(fileName,fileContent)
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	return fs.unlink(fileName)
}

// myFileWriter("kushal1.js","hello")
// myFileReader("kushal.js")
// myFileUpdater("kushal","world")
//myFileDeleter("kushal1.js")

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }