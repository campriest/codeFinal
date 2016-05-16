
var check = 'two files';
var entry;


//
var url = 'https://newyork.craigslist.org/search/mis?format=rss&sort=date&query=w4m';
feednami.load(url,function(result){
        if(result.error){
                console.log(result.error)
        }
        else{
            var entries = result.feed.entries
                for(var i = 0; i < entries.length; i++){
                    entry = entries[i];
                    check.push(entry);
                    console.log(entry.title)
                }
            }
})
