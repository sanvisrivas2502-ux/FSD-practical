const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("server is coming...");
});
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server is running on port${PORT}`);
});
app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from my Node.js api"
    });
});
const PORT$=5000;