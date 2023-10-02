const { validationResult } = require("express-validator");
const { Keeper } = require('../models/model');
const bcrypt = require('bcrypt');

const registration = (req, res) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.send(errors.array())  //here we get data from our api
    } else {
        const email = req.body.email
        const password = req.body.password
        console.log(req.body);

        Keeper.findOne({ email: email }).then((val) => {
            if (val === null) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    const newuser = new Keeper({
                        email: email,
                        password: hash,
                        data: []
                    })
                    newuser.save().then((val) => { res.send(val) })
                        .catch((error) => { res.send(error) });

                })
            } else {
                res.send({ "msg": "Email Address already used" })
            }

        }).catch((err) => {
            alert("you can not registration");
        })


    }
}

const login = (req, res) => {
    const email = req.body.email
    const password = req.body.password

    Keeper.findOne({ email: email }).then((val) => {
        if (val === null) {
            res.send({ "msg": "please Enter valid email or password" })
        } else {
            bcrypt.compare(password, val.password, (err, result) => {
                if (result === true) {
                    res.send(val)
                }
            })

        }

    }).catch((err) => {
        console.log(err);
    })
}


const postData = (req, res) => {
    const email = req.body.email
    const data = req.body.data
    console.log(data);
    Keeper.findOneAndUpdate({ email: email }, { data: data }).then((val) => {
        res.send(val)
    }).catch((err) => {
        res.send(err);
    })
}

const getData = (req, res) => {
    const email = req.body.email
    Keeper.findOne({ email: email }).then((val) => {
        res.send(val.data)
    }).catch((err) => {
        res.send(err)
    })
}

module.exports = {
    registration, login, postData, getData
};