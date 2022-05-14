const express = require('express')
const app = express();
const port = 3000

app.use(express.json({limit: "1mb", extented: true}))
app.use(express.urlencoded({limit:"1mb", extended: true}))


const tasks = []
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if(username.toLowerCase()  == "tanmay"){
        if(password == "2580"){
            res.status(200).json({"message": "welcome tanmay"});
        }else{
            res.status(401).json({"message": "invalid password"});
        }
    }else{
        res.status(401).json({"message": "invalid username"});
    }
})

app.post('/task', (req, res) => {
    const title = req.body.title;
    const desc = req.body.desc;
    if(title){
        const task = {
            title : title,
            desc : desc,
            created_at: new Date(),
        }
        tasks.push(task)
        res.status(200).json({"message": "task added"});
    }else{
        res.status(401).json({"message": "invalid task"});
    }
})

app.get('/task', (req, res) => {
    if(tasks && tasks.length>0){  
        res.status(200).json(tasks);
    }else{
        res.status(401).json({"message": "No task found"});
    }
})

app.listen(port, () => {
    console.log(`App Listening on port ${port}`)
})



	

