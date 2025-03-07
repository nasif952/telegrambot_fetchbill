const crypto = require('crypto');
const { MongoClient } = require('mongodb');


const uri = "mongodb+srv://root:nasif951@nasif951.oebwc.mongodb.net/?retryWrites=true&w=majority&appName=nasif951";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbName = "user";
const collectionName = "user1";


function hashPasswordSHA256(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}

async function storeUsers() {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

      
        const users = [
            { accountid: 31, name: "Uma",     password: "umaSecure",   monthlybill: 2600 },
            { accountid: 32, name: "Victor",  password: "victorSecret",monthlybill: 2700 },
            { accountid: 33, name: "Wendy",   password: "wendy123",    monthlybill: 2800 },
            { accountid: 34, name: "Xander",  password: "xanderPass",  monthlybill: 2900 },
            { accountid: 35, name: "Yara",    password: "yara789",     monthlybill: 3000 },
            { accountid: 36, name: "Zane",    password: "zane456",     monthlybill: 3100 },
            { accountid: 37, name: "Aiden",   password: "aiden321",    monthlybill: 3200 },
            { accountid: 38, name: "Bella",   password: "bella999",    monthlybill: 3300 },
            { accountid: 39, name: "Cody",    password: "codyABC",     monthlybill: 3400 },
            { accountid: 40, name: "Diana",   password: "dianaXYZ",    monthlybill: 3500 },
        ];

        
        const processedUsers = users.map(user => ({
            accountid: user.accountid,
            name: user.name,
            password: hashPasswordSHA256(user.password), 
            monthlybill: user.monthlybill
        }));

     
        const result = await collection.insertMany(processedUsers);
        console.log(`${result.insertedCount} users stored successfully!`);

    } catch (err) {
        console.error("Error storing users:", err);
    } finally {
        await client.close();
    }
}


storeUsers();
