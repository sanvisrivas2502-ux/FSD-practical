const filesys=require('fs');
filesys.writeFileSync("C:\Users\sanvi\OneDrive\Desktop\mernproject\student.txt","name:sanvi  ");
console.log("file created successfully");

const filedata=filesys.readFileSync("C:\Users\sanvi\OneDrive\Desktop\mernproject\student.txt","utf8");
console.log(filedata);

filesys.appendFileSync("C:\Users\sanvi\OneDrive\Desktop\mernproject\student.txt","name:Shagun");
console.log("data updated succesfully");

const filedatas=filesys.readFileSync("C:\Users\sanvi\OneDrive\Desktop\mernproject\student.txt","utf8");
console.log(filedatas);

filesys.unlinkSync("C:\Users\sanvi\OneDrive\Desktop\mernproject\student.txt");
console.log("file deleted succesfully");

