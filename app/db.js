//db interaction
'use strict';

var Sequelize = require('sequelize');
var orm = new Sequelize(process.env.DATABASE_URL || 'sqlite://teachandtour.sqlite');
var bcrypt = require('bcrypt');
var promise = require('bluebird');
var compare = promise.promisify(bcrypt.compare);
var uuid = require('node-uuid');

/** SCHEMA **/

var User = orm.define('users', {
  username: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: true },
  profilePic: { type: Sequelize.STRING, defaultValue: 'https://s3-us-west-2.amazonaws.com/soundhub/defaultImg.jpg' }
});

orm.sync();

/** AUTH FUNCTIONS **/
var login = function(username, password, callback) {
  var response = {};
  response.success = false;
  var hashedPw;
  var userObj;
  User.findAll({
    where: {
      username: username
    }
  }).then(function(obj) {
    userObj = obj;
    hashedPw = obj[0].dataValues.password;
  }).then(function(obj) {
    return compare(password, hashedPw)
      .then(function(data) { //data = bool from compare
        if (data) {
          response.user = userObj;
          response.success = data;
          callback(response);
        }
      })
  })
};

var signup = function(username, password, email, callback) {
  var response = {};
  var exists;
  User.findOne({
    where: {
      username: username
    }
  }).then(function(user) {
    exists = user;
  }).then(function() {
    if(exists === null) {
      return bcrypt.genSalt(10, function(err, salt) {
        if (err) {
          console.log(err);
          return;
        }
        bcrypt.hash(password, salt, function(err, hash) {
          User.create({
              username: username,
              password: hash,
              email: email
            }).then(function(userData) {
              response.userData = userData;
              response.success = true;
              callback(response);
            })
        })
      })
    } else {
      response.success = false;
      callback(response);
    }
  })
};

var getuser = function(userId, callback) {
  User.findOne(
    {where: {id: userId}}
  )
  .then(function(data) {
    callback(data);
  })
}

var updateUsername = function(userId, newname, callback) {
  User.update({
    username: newname
  }, {
    where: {
      id: userId
    }
  })
  .then(function() {
    SongNode.update(
    {authorName: newname},
    {where: {author: userId}}
    )
    .then(function(data) {
      callback(data);
    })
  })
}

var updateImg = function(userId, imgUrl, callback) {
  User.update({
    profilePic: imgUrl
  }, {
    where: {
      id: userId
    }
  })
  .then(function() {
    SongNode.update(
      {authorPic: imgUrl},
      {where: {author: userId}}
    )
    .then(function(data) {
      callback(data);
    })
  })
}

var updatePassword = function(userId, newPass, callback) {
  return bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      console.log(err);
      return;
    }
    bcrypt.hash(newPass, salt, function(err, hash) {
      User.update({
        password: hash
      }, {
        where: {
          id: userId
        }
      })
      .then(function(data) {
        callback(data);
      })
    })
  })
}


exports.orm = orm; //so testing suite can sync/drop test.sqlite
exports.login = login;
exports.signup = signup;
exports.getuser = getuser;
exports.updateUsername = updateUsername;
exports.updateImg = updateImg;
exports.updatePassword = updatePassword;
