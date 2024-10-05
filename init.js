const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

main()
.then(()=>{
    console.log("Connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}


let allchats = [
    {
        from:"Darshan",
        to:"Vishwa",
        msg:"Coming to Gadag",
        created_at:new Date(),
    },
    {
      
        from:"Rohit",
        to:"Sujal",
        msg:"is Vishwa there in hostel?",
        created_at:new Date(),
    },
    {
      
        from:"Vishwa",
        to:"Vrushali",
        msg:"How was the day",
        created_at:new Date(),
    },
    {
      
        from:"Groot",
        to:"Rocket",
        msg:"I m Groot!",
        created_at:new Date(),
    },
    {
      
        from:"Tony",
        to:"Daughter",
        msg:"Love u 3000",
        created_at:new Date(),
    },
    {
      
        from:"Ben Tennyson",
        to:"Vilgax",
        msg:"Its Hero time!",
        created_at:new Date(),
    },
];

Chat.insertMany(allchats);