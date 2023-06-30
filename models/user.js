const { Schema, model } = require('mongoose');
const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            return: /^[a-z 0-9\.\ @],
        }
    }
},
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            },
        
            thoughts: [
                 {
                    type: Schema.Types.ObjectId,
                    ref: 'Thought',
                 }
            ],

        friends: [
            {
                type: Schema.TypesObjectId,
                ref: 'User',
            }
        ]
        toJSON: { 
            id: true, 
      }
      );  

userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

const User = model('User', userSchema);
module.exports = User



