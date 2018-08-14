var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    Employee = require('../models/employee'),
    config = require('../config/database');

module.exports = function (passport) {
    console.log(',,,,,,,,,,,,,,1' );
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        console.log(',,,,,,,,,,,,,,2' );
        Employee.getUserById(jwt_payload.data, function (err, employee) {
            console.log(',,,,,,,,,,,,,,3'+jwt_payload.data);
            if (err) {
                return done(err, false);s
            }
            if (employee) {
                return done(null, employee);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    }));
}