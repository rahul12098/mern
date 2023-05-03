const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption");


const app = express();

app.use(express.json());  //converts the data to json format 
app.use(express.urlencoded({extended: true})); 
app.use(cors());


//database connection (mongodb)
   
mongoose.connect("mongodb+srv://rahul:rahul2001@cluster0.vdcn75k.mongodb.net/hostel",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("Database connected successfully."))
    .catch((err) => console.log(err));


//schema 
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    reEnterPassword: String
})


//encrypting the password f
// const key = 'QWERT'; 

// userSchema.plugin(encrypt, { secret: key, encryptedFields: ["password"]})



//model
const User = new mongoose.model("User", userSchema)        //user model taking userSchema

//routes

//login routing api
app.post("/login", async (req, res)=> {
    const { email, password} = req.body
    let user = await User.findOne({email:email});
    if (user) {
        if(password == user.password) { //checking the entered  the password with the database
         res.send({message: "login successfully", user: user})
        } else {
            res.send({ message: "password didnt match"})
        }
        
    } else {
        res.send({message: "user not registered"})
    }


})


//register api 

app.post("/register", async (req, res)=> {
    const {name, email, password} = req.body       //extracting values from req.body
    
    

            let user = await User.findOne({email:email});   //user.findone doesnt accept callback function anymore
            if (user) {
                return res.status(400).send('That user already exisits!');
                
            }
        
                const newUser = new User({    //extracted values(name,email,password) stored in user ....here User is the module (User)
                    name,
                    email,
                    password
                })
              await  newUser.save()
                    .then(function () {
                        res.send({ message: "Successfully Registered, Please login now." })
                    })
                    .catch(function (err) {
                        res.send(err);
                    })
                
                
            }
    )

    const roomSchema = new mongoose.Schema({
        name: String,
        rollno: String,
        gender: String,
        sem: String,
        preferrence: String
    })

    const Room = new mongoose.model("Room", roomSchema)  


app.post("/rooms", async (req, res)=> {
    const {name, rollno, gender, sem, preferrence} = req.body       //extracting values from req.body
    
        
                const newRoom = new Room({    //extracted values(name,email,password) stored in user ....here User is the module (User)
                    name,
                    rollno,
                    gender,
                    sem,
                    preferrence
                })
              await  newRoom.save()
                    .then(function () {
                        res.send({ message: "successfully alloted room, Please check." })
                    })
                    .catch(function (err) {
                        res.send(err);
                    })
                
                
            }
    )

const contactSchema = new mongoose.Schema({
        name: String,
        email: String,
        hostel: String,
        contact: String,
        feedback: String
    })

    const Contact = new mongoose.model("Contact", contactSchema)

    app.post("/contact", async (req, res)=> {
        const {name, email, hostel, contact, feedback} = req.body       //extracting values from req.body
        
        let Contact = await Contact.findOne({email:email});
        if (Contact) {
            return res.status(400).send('That user already exists!');
            
        }
    
                    const newContact = new Contact({    //extracted values(name,email,password) stored in user ....here User is the module (User)
                        name,
                        email,
                        hostel,
                        contact,
                        feedback
                    })
                  await  newContact.save()
                        .then(function () {
                            res.send({ message: "Feedback Sent" })
                        })
                        .catch(function (err) {
                            res.send(err);
                        })
                    
                    
                }
        )

   
app.listen(5000,() => {
    console.log("connected successfully")
})
