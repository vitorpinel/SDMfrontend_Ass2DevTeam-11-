const mongoose = require("mongoose");
	// Schema = mongoose.Schema,
 //    bcrypt = require(bcrypt),
 //    SALT_WORK_FACTOR = 10;

// User Schema
var UserSchema = mongoose.Schema({

	UserLogin: {
		type:String,
		required:true,
		index: { unique: true }
	},
	Password: { 
		type: String, 
		required: true 
	},
	Name: { 
		type: String, 
		required: true 
	},
	Email:{ 
		type: String, 
		required: true, 
		unique: true
	},
	Affiliation: { 
		type: String, 
		required: true 
	},
	Role:{ 
		type: String, 
		required: true 
	},
	Gender:{ 
		type: String
	},
	Age:{ 
		type: Number,
		validate : {
    		validator : Number.isInteger,
    		message   : '{VALUE} is not an integer value'
 		}
	}
});

// UserSchema.pre(save, function(next) {
//     var user = this;

// // only hash the password if it has been modified (or is new)
// if (!user.isModified('Password')) return next();

// // generate a salt
// bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//     if (err) return next(err);

//     // hash the password using our new salt
//     bcrypt.hash(user.Password, salt, function(err, hash) {
//         if (err) return next(err);

//         // override the cleartext password with the hashed one
//         user.Password = hash;
//         next();
//     });
// });


// });

// UserSchema.methods.comparePassword = function(candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.Password, function(err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// };
//
var Users = module.exports = mongoose.model("Users", UserSchema);
module.exports.getUsers = function(callback, limit){
	Users.find(callback).limit(limit);
}