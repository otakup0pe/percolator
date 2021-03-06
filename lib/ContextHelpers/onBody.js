/*
 This helper just adds an onBody function to the
 req and calls back when done.

 The onBody function takes a callback in the form
 function(err, body){ ...
 where error is an error that may have occurred and body
 is the entire body of the request.

 onBody is useful when you don't care about streaming the
 body and would rather just wait to get the whole thing to
 do any processiong.

 */


var onBodyHelper = function(req, res, handler, cb){
  req.onBody = function(onBodyCB){
    var body = '';
    req.on('data', function(data){
      body += data;
    });
    req.on('error', function(err){
      return onBodyCB(err, body);
    });
    req.on('end', function(){
      return onBodyCB(null, body);
    });
  };
  if (cb){
    cb();
  }
};


module.exports = onBodyHelper;




