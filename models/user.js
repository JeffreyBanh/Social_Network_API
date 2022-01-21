const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username:{
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts:[{
        type: Schema.Types.ObjectId,
        ref: 'thoughts'
    }],
    friends:[{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]
}),

const user = model('user', userSchema);

userSchema.virtual('friendCount').get(function(){
    return this,friends.length;
});

module.exports = user;