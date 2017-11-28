const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
  //uri : 'mongodb://localhost:27017/' + this.db,
  uri : 'mongodb://<patil>:<shweta123>@ds121686.mlab.com:21686/angular-2-app'
  secret : crypto,
    db: 'angular-2-ap'
}
