var _ = require('underscore');

exports.handler = {

  GET : function($){
    $.json({})
        .link('artists', $.uri.child('artist'))
        .link('many', $.uri.child('many'))
        .link('qstring', $.uri.child('qstring'))
        .link('restricted', $.uri.child('restricted'))
        .send();
  }


};
