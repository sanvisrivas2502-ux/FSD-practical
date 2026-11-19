const fs1 = rerquire("fs");
fsl.writeFile("student.txt", "this is a student file of cse 33", (err) => {
    if (err) {
        console.log("err");
    }
    else {
        console.log("file succesfully created");
    }
});
