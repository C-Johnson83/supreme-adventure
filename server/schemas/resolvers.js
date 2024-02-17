const { User} = require("../models")



const resolvers = {
	Query: {
		user: async ()=>{
			return User.find().select("-password")
		}
	}
}


module.exports = resolvers