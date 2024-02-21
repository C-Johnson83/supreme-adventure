const db = require('../config/connection');
const { User, List } = require('../models');
const cleanDB = require('./cleanDB');

const userSeed ={
    "username": "johndoe",
    "firstName": "John",
    "lastName": "Doe",
    "email": "johndoe@example.com",
    "password": "password1234",

}

const listSeed = {
    "username": "johndoe",
    "accessCode": "1234",
    "listType": "birthday",
    "listName": "birthday party",
    "eventDate": "2024-01-01",
}

db.once('open', async () => {
    try {
      await cleanDB('List', 'lists');
  
      await cleanDB('User', 'users');
  
      await User.create(userSeed);
      await List.create(listSeed);
  
   
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  
    console.log('all done!');
    process.exit(0);
  });
  

