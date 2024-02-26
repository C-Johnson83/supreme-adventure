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
	name: String!,
	link: String,
	quantity: Int!,
	quantityBought: Int!,
	note: String
} 

type Auth {
    token: ID!
    user: User
}

type Mutation {
	login(email: String!, password: String!): Auth
    addItemToList(listId: ID!, name: String!, link: String, quantity: Int!, note: String): Item
    deleteItemFromList(listId: ID!, itemId: ID!): Item
    updateItemInList(itemId: ID!, name: String, link: String, quantity: Int, quantityBought: Int, note: String): Item
	addList(username: String!, accessCode: String!, listType: String!, listName: String!, eventDate: Date!): List
	addUser(username: String!, firstName: String!, lastName: String!, email: String!, password: String!): Auth
}


type Query {
	me: User
	getListById(_id: ID!): List
	user(_id: ID!): User
	list(_id: ID!): List
	item(_id: ID!): Item
}

`


module.exports = typeDefs