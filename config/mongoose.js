const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://anupkala1000:ANUP1234@cluster0.jiuezpi.mongodb.net/test");

const db=mongoose.connection;

db.on('Error',console.error.bind(console,'Error connecting to db'));

db.once('open',function(){
   console.log('Connected to database');
});

module.exports=db;
