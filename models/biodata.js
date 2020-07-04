let mongoose = require('mongoose');


let biodataSchema = mongoose.Schema({
    
    surName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },

    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    middleName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    male: {
        type: String,
        minlength: 3,
        maxlength: 50
    },
    female: {
        type: String,
        minlength: 3,
        maxlength: 50
    },
    Email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },

    Phone_Number: {
        type: Number,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    Home_Address: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 300
    },
    Institution: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    Institution_Address: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 300
    },

    arbLang: {
        type: String,
        minlength: 3,
        maxlength: 50
    },
    arbLit: {
        type: String,
        minlength: 3,
        maxlength: 50
    },
    civEdu: {
        type: String,
        minlength: 3,
        maxlength: 50
    },
    econs: {
        type: String,
        minlength: 3,
        maxlength: 50
    },
    engLang: {
        type: String,
        minlength: 3,
        maxlength: 50
    },
    gov: {
        type: String,
        minlength: 3,
        maxlength: 50
    },
    his: {
        type: String,
        minlength: 3,
        maxlength: 50
    },
    iss: {
        type: String,
        minlength: 3,
        maxlength: 50
    },

    math: {
        type: String,
        minlength: 3,
        maxlength: 50
    },
    yorLang: {
        type: String,
        minlength: 3,
        maxlength: 50
    }
})

let Biodata = module.exports = mongoose.model('biodata', biodataSchema)