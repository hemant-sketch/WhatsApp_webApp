const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("Connection Succesful");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}  

let allChats = [
    {
    from : "neha",
    to: "hemant",
    message: "I am waiting",
    created_at: new Date()
    },
    {
    from : "nik",
    to: "hemant",
    message: "Bhai, bs krde ab",
    created_at: new Date()
    },
    {
    from : "nik",
    to: "aanya",
    message: "I will marry you",
    created_at: new Date()
    },
    {
    from : "dhruv",
    to: "divyam",
    message: "kinky rawat",
    created_at: new Date()
    },
    {
    from : "divyam",
    to: "dhruv",
    message: "slutty kumar",
    created_at: new Date()
    },
]

Chat.insertMany(allChats);