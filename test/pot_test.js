'use strict';

var grunt = require('grunt');

exports.pot = {
  setUp: function(done) {
    done();
  },
  files: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/my-text-domain.pot');
    var expected = grunt.file.read('test/expected/my-text-domain.pot');

    //Deal with the fact that actual will contain the timestamp of when the test is run
    expected = expected.replace( "YYYY-MM-DD HH:MM+ZZZZ", getTimestamp()+"+0000" );

    test.equal(actual, expected);

    test.done();
  },
};

var getTimestamp = function() {
    var date = new Date(); 
   var yyyy = date.getFullYear().toString();
   var mm = (date.getMonth()+1).toString(); // getMonth() is zero-based
   var dd  = date.getDate().toString();

  var hh = date.getHours().toString();
  var ii = date.getMinutes().toString();

   return yyyy + "-"+ (mm[1]?mm:"0"+mm[0])+ "-" + ( dd[1] ? dd :"0"+dd[0] ) + " " + ( hh[1] ? hh :"0"+hh[0] ) + ":" + ( ii[1] ? ii :"0"+ii[0] ); // padding
  };

