const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "register"
});

app.post('/register', (req, res) => {
    const sql = 'Insert into login (`name`,`email`,`password`,`confirmPass`) values (?)';
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.confirmPass
    ]
    db.query(sql, [values], (err, result) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(result);
    })
})

app.post('/login', (req, res) => {
    const sql = "Select * from login where `email` = ? and `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) {
            res.send({ err: err });
        }

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({ message: "Wrong email and password combination" });
        }
    })
})

app.listen(3001, () => {
    console.log("running on port 3001");
});