const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId();
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String
        }
    },
    {
    toJSON: {
        getters: true,
    },
    id: false,
    }
);

module.exports = userSchema;