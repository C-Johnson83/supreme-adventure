const typeDefs = `

scalar Date

type User {
	_id: ID!
	username: String!
	password: String!
	firstName: String!
	lastName: String!
	email: String!
	lists: [List]
	
}

type List {
	_id: ID!,
	username: String!
	accessCode: String!,
	listType: String!,
	listName: String!,
	eventDate: Date,
	items: [Item]
}

type Item {
	_id: ID!,
	title: String!,
	description: String,
	link: String,
	
} 

type Auth {
    token: ID!
    user: User
}

type Mutation {
	login(email: String!, password: String!): Auth
    addItemToList(id: ID!, title: String!, description: String!, link: String): List
	addList(username: String!, accessCode: String!, listType: String!, listName: String!, eventDate: Date!): List
	addUser(username: String!, firstName: String!, lastName: String!, email: String!, password: String!): Auth
	deleteList(_id: ID!): String 
}


type Query {
	me: User
	getListById(id: ID!): List
	getListByAccessCode(accessCode: String!): List
	user(_id: ID!): User
	list(_id: ID!): List
	item(_id: ID!): Item
}

`


module.exports = typeDefs