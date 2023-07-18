const User = require("../Models/UserSchema.js");
const db = require("../config/dbConnect.js");

const users = [
  new User({
    name: 'Usuario Um',
    email: 'um@gmail.com',
    role: 'admin',
    sector: '60660af3786b3c00470115c9',
  }),
  new User({
    name: 'Usuario Dois',
    email: 'dois@gmail.com',
    role: 'professional',
    sector: '60660af3786b3c00470115c9',
  }),
  new User({
    name: 'Usuario Três',
    email: 'tres@gmail.com',
    role: 'receptionist',
    sector: '60660af3786b3c00470115c9',
  }),
  new User({
    name: 'Usuario Quatro',
    email: 'quatro@gmail.com',
    role: 'admin',
    sector: '60660af3786b3c00470115c9',
  }),
  new User({
    name: 'Usuario Cinco',
    email: 'cinco@gmail.com',
    role: 'receptionist',
    sector: '60660af3786b3c00470115c9',
  }),
  new User({
    name: 'Usuario Seis',
    email: 'seis@gmail.com',
    role: 'professional',
    sector: '60660af3786b3c00470115c9',
  }),
  new User({
    name: 'Usuario Sete',
    email: 'sete@gmail.com',
    role: 'admin',
    sector: '60660af3786b3c00470115c9',
  }),
  new User({
    name: 'Usuario Oito',
    email: 'oito@gmail.com',
    role: 'receptionist',
    sector: '60660af3786b3c00470115c9',
  }),
  new User({
    name: 'Usuario Nove',
    email: 'nove@gmail.com',
    role: 'professional',
    sector: '60660af3786b3c00470115c9',
  }),
  new User({
    name: 'Usuario Dez',
    email: 'dez@gmail.com',
    role: 'admin',
    sector: '60660af3786b3c00470115c9',
  }),
  new User({
    name: 'Usuario Onze',
    email: 'onze@gmail.com',
    role: 'professional',
    sector: '60660af3786b3c00470115c9',
  }),
  new User({
    name: 'Usuario Doze',
    email: 'doze@gmail.com',
    role: 'receptionist',
    sector: '60660af3786b3c00470115c9',
  }),
  new User({
    name: 'Usuario Treze',
    email: 'treze@gmail.com',
    role: 'admin',
    sector: '60660af3786b3c00470115c9',
  }),
  new User({
    name: 'Usuario Quatorze',
    email: 'quatorze@gmail.com',
    role: 'professional',
    sector: '60660af3786b3c00470115c9',
  }),
  new User({
    name: 'Usuario Quinze',
    email: 'quinze@gmail.com',
    role: 'receptionist',
    sector: '60660af3786b3c00470115c9',
  }),
  new User({
    name: 'Usuario Dezesseis',
    email: 'dezesseis@gmail.com',
    role: 'admin',
    sector: '60660af3786b3c00470115c9',
  }),
  new User({
    name: 'Usuario Dezessete',
    email: 'dezessete@gmail.com',
    role: 'professional',
    sector: '60660af3786b3c00470115c9',
  }),
  new User({
    name: 'Usuario Dezoito',
    email: 'dezoito@gmail.com',
    role: 'receptionist',
    sector: '60660af3786b3c00470115c9',
  }),
  new User({
    name: 'Usuario Dezenove',
    email: 'dezenove@gmail.com',
    role: 'admin',
    sector: '60660af3786b3c00470115c9',
  }),
  new User({
    name: 'Usuario Vinte',
    email: 'vinte@gmail.com',
    role: 'professional',
    sector: '60660af3786b3c00470115c9',
  }),
];

db.on("error", console.log.bind(console, 'Error on connecting to MongoDB'));
db.once("open", () => {
  console.log('MongoDB is connected');
})

const usersLength = users.length;

users.forEach(async (user, index) => {
  try {
    await user.save();
    if (index === usersLength - 1) {
      console.log("DONE!");
      db.close();
    }
  } catch(error) {
    const err = new Error(`${error?.message}`);
    console.log(`User seed failed - ${err}`);
    db.close();
    process.exit(0);
  }
});