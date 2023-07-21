const express = require('express');
const mongoose = require('mongoose');
const empRoute = require('./routes/employeeRoute');

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//sudo systemctl start mongod
mongoose.connect('mongodb://127.0.0.1:27017/test')      //connecting to db
    .then(() => console.log("Sucessfull connected to mongodb"))
    .catch((error) => console.log(error));


app.use('/', empRoute);

app.listen(PORT, () => console.log(`Running in port ${PORT}`));

//sudo systemctl start mongod
//sudo systemctl status mongod
//sudo systemctl stop mongod



// //node schedule
// const schedule = require('node-schedule');

// const job = schedule.scheduleJob(' 5 * * * *', function () {

//     //nodemailer
//     const nodemailer = require("nodemailer");
//     const transporter = nodemailer.createTransport({
//         host: 'smtp.ethereal.email',
//         port: 587,
//         auth: {
//             user: 'jackeline.mante@ethereal.email',
//             pass: 'BKyVeZcgCzvp3C9CpM'
//         }
//     });

//     async function main() {
//         // send mail with defined transport object
//         const info = await transporter.sendMail({
//             from: '"Fred Foo 👻" jackeline.mante@ethereal.email', // sender address
//             to: "nishankumar559@gmail.com", // list of receivers
//             subject: "Hello ✔", // Subject line
//             text: "Hello world?", // plain text body
//             html: "<b>Hello world?</b>", // html body
//         });

//         console.log("Message sent: %s", info.messageId);
//     }

//     main().catch(console.error);
// });








