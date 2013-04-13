var fs = require('fs');

var TermUI = require('node-term-ui');
var Twit = require('twit');

exports.run = function () {
    var twitter = new Twit(JSON.parse(fs.readFileSync('./keys.json')));

    var stream = twitter.stream('user')

    stream.on('tweet', function (tweet) {
	TermUI.pos(0, 0)
	    .fg(TermUI.C.g).out(tweet.user.name + ": ")
	    .fg(TermUI.C.b).out(tweet.text)
	    .fg(TermUI.C.w).out("\n-----------");
    });
}
