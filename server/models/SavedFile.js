const { Schema, model } = require('mongoose');

const SavedFileSchema = new Schema(
    {
        schemaId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        email: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        destination: {
            type: String,
            required: true
        },
        length: {
            type:  Number,
            required: true
        },
        stay: {
            type: String,
            required: true
        },
        eat: {
            type: String,
            required: true
        },
        activities: {
            type: String,
            required: true

        }
    },
    {
    toJSON: {
        getters: true,
    },
    id: false,
    }
);

const SavedFile = model('SavedFile', SavedFileSchema)

module.exports = SavedFile;