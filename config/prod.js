// prod.js - production keys here !!!
module.exports = {
  // googleClientID: '1037879908719-6talg9vt54d9l96rqmthtag2o5fojor7.apps.googleusercontent.com',
  // googleClientSecret: 'WC0j8FePtcX4AuNptMHhnwpP',
  // mongoURI: 'mongodb://root:abc123@ds121996.mlab.com:21996/fullstackreactjsnodejs-prod',
  // cookieKey: 'jdfhgkslaoeiofjaskdfjlaksfjlksjflksafnkjngjkngkjn'
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
};
