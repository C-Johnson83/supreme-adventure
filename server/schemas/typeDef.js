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
	items: [Item]
}

type List {
	_id: ID!,
	owner: String!
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

type Mutation {
    
    addItemToList(listId: ID!, name: String!, link: String, quantity: Int!, note: String): Item
    deleteItemFromList(listId: ID!, itemId: ID!): Item
    updateItemInList(itemId: ID!, name: String, link: String, quantity: Int, quantityBought: Int, note: String): Item
}


type Query {
	user(_id: ID!): User
	list(_id: ID!): List
}
`


module.exports = typeDefs