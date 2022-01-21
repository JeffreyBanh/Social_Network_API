const { Schema, model, Types} = require('mongoose');
const moment = require('moment');

const thoughtSchema = new Schema({
    thoughtText:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get: (getTime) => moment(getTime).format('MMM DD, YYYY [at] hh::mm a')
    },
    username:{
        type: String,
        required: true
    },
    reactions: [reactionSchmea]
})

const reactionSchmea = new Schema({
    reactionId:{
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody:{
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 260
    },
    username: {
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get: (getTime) => moment(getTime).format('MMM DD, YYYY [at] hh::mm a')
    }
})

const thoughts = model('thoughts', thoughtSchema);

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

module.exports = thoughts;