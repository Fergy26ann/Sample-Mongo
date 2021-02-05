const {mongoose, connection} = require('./index');

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {type: String, required: true, default: null},
        profileImage: {type: String, required: false, default: null},
        status: {type: Boolean, required:false, default: null}
    },
    {
        versionKey: false,
    }
);

const User = connection.model('User', userSchema);
User.createCollection();

module.exports = {User};