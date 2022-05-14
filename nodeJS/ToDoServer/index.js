const express = require('express')
const app = express();
const port = 3000

app.use(express.json({limit: "1mb", extented: true}))
app.use(express.urlencoded({limit:"1mb", extended: true}))

const friends = []
app.get('/', (req, res) => {
    res.send('MY NAME IS TANMAY')
});

app.get('/about_me', (req, res) => {
    const tanmay = {
        name: "Tanmay",
        age : 14,
    }
    res.send(tanmay)
})

app.post('/add_friend', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const friend = {
        name : name,
        age: age
    }
    friends.push(friend)
    res.send(friends)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/school', (req, res) => {
    const school = {
        name: "tanmay",
        roll_no : 35,
    }
    res.send(school)
})

app.get('/game', (req, res) => {
    const games = {
        name: "Draw It",
        year : 2015,
    }
    res.send(games)
})

app.get('/language', (req, res) => {
    const language = {
        name: "hindi",
        country : "India"
    }
    res.send(language)
})

app.get('/cars', (req, res) => {
    const car = {
        name: "Fortuner",
        model : 2021,
    }
    res.send(car)
})

app.get('/bikes', (req, res) => {
    const bike = {
        name: "yamaha",
        model : 2015,
    }
    res.send(bike)
})

app.get('/hello', (req, res) => {
    res.send('i am  TANMAY')
});

app.get('/god', (req, res) => {
    res.send(' i am god ')
});

app.get('/wood', (req, res) => {
    res.send(' i am wood')
});

app.get('/devil', (req, res) => {
    res.send('i am devil')
});

app.get('/water', (req, res) => {
    res.send('i am under the water')
});


app.post('/1', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const myself = {
        name : name,
        age: age
    }
    friends.push(myself)
    res.send(friendsp)
});

app.post('/2', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const friend1 = {
        name : name,
        age: age
    }
    friends.push(friend1)
    res.send(friends)
});

app.post('/3', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const friend2 = {
        name : name,
        age: age
    }
    friends.push(friend2)
    res.send(friends)
});

app.post('/4', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const friend3 = {
        name : name,
        age: age
    }
    friends.push(friend3)
    res.send(friends)
});

app.post('/5', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const friend4 = {
        name : name,
        age: age
    }
    friends.push(friend4)
    res.send(friends)
});

app.post('/6', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const friend5 = {
        name : name,
        age: age
    }
    friends.push(friend5)
    res.send(friends)
});

app.post('/7', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const friend6 = {
        name : name,
        age: age
    }
    friends.push(friend6)
    res.send(friends)
});

app.post('/8', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const friend7 = {
        name : name,
        age: age
    }
    friends.push(friend7)
    res.send(friends)
});

app.post('/9', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const friend8 = {
        name : name,
        age: age
    }
    friends.push(friend8)
    res.send(friends)
})