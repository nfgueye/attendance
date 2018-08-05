const mongoose = require('mongoose'),
bcrypt = require ('bcryptjs'),
config = require ('../config/database');

const EmployeeSchema = mongoose.Schema({
    firstname:{type : String, required : true
    },
    lastname:{type : String, required : true
    },
    dateOfBirth: {type : String, required : true
    },
    telephone:{type : String, required : true
    },
    username:{type : String, required : true
    },
    password:{type : String, required : true
    },
    service:{type : String, required : true
    },
    fonction:{type : String, required : true
    },
    statut:{type : String
    },
    matricule:{type : String
    },
    activite:{type : String}
})
const employee = module.exports = mongoose .model ('Employee', EmployeeSchema);

module.exports.getEmployeeById = function (id, callback){
    Empoyee.findById(id,callback);
}
module.exports.getEmployeeByUsername = function (username, callback){
    const query = {username: username}
    User.findOne(query,callback);
}
module.exports.addEmployee = function(newEmployee,callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newEmployee.password, salt, (err, hash) => {
            if (err) throw err;
                newEmployee.password = hash;
                newEmployee.save(callback);     
        });    
    });
}
module.exports.comparePassword = function(candidatePassword, hash,callback){
    bcrypt.compare(candidatePassword,hash, (err,isMatch) =>{
        if (err) throw err;
        callback(null, isMatch);
    });
}
