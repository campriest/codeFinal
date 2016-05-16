
var request = require("request"),
    cheerio =require("cheerio"),
    url="https://newyork.craigslist.org/search/mis";

    request(url, function(error, response, body){
        if(!error){
            var $ = cheerio.load(body),
            // titles= $('div[class=rows]').html()
            titles= $('span[id=titletextonly]').html()

                var config = require('./config.js');
                var T = new Twit(config);

                function poster (){
                    T.post('statuses/update', {status: titles},
                    function (err, data, response){
                    console.log(data);
                    console.log(err);
                    console.log(response);


                });
                }

                    setInterval(poster, 10*60*1000);

            // var T = new Twit(config);

            // var update = 'statuses/update';
            // var tweet = {status:'hello world!'};

                        console.log(titles);
                    }else{
                        console.log("We’ve encountered an error: " + error);
                    }


    });

var Twit = require('twit');
