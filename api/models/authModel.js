const  mongoose  = require("mongoose");
const { Schema } = mongoose
const JWT = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const userSchema = new Schema({
    name:{
        type: String,
        required: [true,'Please enter your name'],
        trim: true
    },
    email:{
        type: String,
        required: [true,'Please enter your email'],
        trim: true
    },
    phone:{
        type: String,
        required: [true,'Please enter your number'],
        trim: true
    },
    password:{
        type:String,
        required: [true, 'Password is required'],
        select: false,
    }
},{timestamps:true})

userSchema.pre('save', async function(next){
    if (!this.isModified('password')) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods = {
generateJWTToken : async  function () {
        return await JWT.sign(
            {id: this._id, email: this.email}
        ,process.env.JWT_SECRET,
        { expiresIn : '24h' }
        )
    },
    comparePassword : async function(plainPassword){
        return await bcrypt.compare(plainPassword, this.password)
    }
}
const userModel = mongoose.model('users', userSchema)

module.exports = userModel