# telegrambot_fetchbill
it fetches monthly bill after integrating id pass

1. GO TO  https://web.telegram.org/k/#@AuthNasif_bot
Or search for @AuthNasif_bot in the telegram 

2. to test the user id and password  use this cases 

accountid: 31, name: "Uma",     password: "umaSecure",   monthlybill: 2600
accountid: 32, name: "Victor",  password: "victorSecret",monthlybill: 2700
accountid: 33, name: "Wendy",   password: "wendy123",    monthlybill: 2800
accountid: 34, name: "Xander",  password: "xanderPass",  monthlybill: 2900
accountid: 35, name: "Yara",    password: "yara789",     monthlybill: 3000
accountid: 36, name: "Zane",    password: "zane456",     monthlybill: 3100
accountid: 37, name: "Aiden",   password: "aiden321",    monthlybill: 3200
accountid: 38, name: "Bella",   password: "bella999",    monthlybill: 3300

Demo Video :
https://drive.google.com/file/d/1m6FKt5DKp5_1krRWJhUPDbHWxSKnXFQX/view?usp=drive_link


Limitations : 
I Used cloud based n8n to deploy this , for the best  hashing practices "bcrypt / Argon2" wasn't used because cloud integration is not possible with n8n. 
Using the n8n via docker would have served the purpose as there are freedom to use external NPM packages.For now , used the 'Secure Hash Algorithm 256-bit' that was pre built node from n8n
