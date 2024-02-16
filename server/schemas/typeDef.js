const typeDefs = `
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
	owner: String!
	accessCode: String!,
	listType: String!,
	listName: String!,
	eventDate: date,
	items: [Item]
}

type Item {
	_id: ID!,
	name: String!,
	link: String,
	quantity: Integer!,
	quantityBought: Integer!,
	note: String
} 


type Query {
	user(_id: ID!): User
	list(_id: ID!): List
}
`


module.exports = typeDefs