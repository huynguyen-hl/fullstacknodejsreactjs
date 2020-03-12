const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// clientID 899338678945-mrqu994ja1p3jktbfov2f383hrprmj78.apps.googleusercontent.com
// clientSecret I3TWwXzJNSLLCY9-ng9PQgSm
passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);
