var couchapp = require('couchapp');
var path = require('path');

var ddoc = {
  _id: '_design/app',
  rewrites: [{
    "from": "",
    "to": "/index.html"
  }, {
    "from": "*",
    "to": "/*"
  }],
  views: {},
  indexes: {},
  lists: {},
  shows: {},
  filters: {}
};

couchapp.loadAttachments(ddoc, path.join(__dirname, 'dist'));

module.exports = ddoc;