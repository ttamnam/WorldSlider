var express = require("express");
var app = express();
var request = require("request")
app.set("view engine", "ejs")

app.get("/results", function(req, res){
	res.render("search")
});

app.get("/", function(req, res){
	var query = req.query.search;
	
	request('https://www.reddit.com/r/EarthPorn/hot/.api', function (error, response, body){
		if(!error && response.statusCode == 200) {
			var data = JSON.parse(body)
			var arr = []
			for (i = 0; i < 5; i++){
				num = Math.floor(Math.random() * 101)
				arr.push(num)
			}
			var urlArr = []
			for ( i in arr){
				console.log(arr[i])
				url = data["data"]["children"][i]["data"]["url"]
				urlArr.push(url)
			}
			console.log(arr)
			console.log(urlArr)
			res.render("fullscreen", {urlArr: urlArr});
			console.log(data["data"]["children"][0]["data"]["url"])
		}	
	});
});

app.listen(3000, function(){
	console.log("Server has started!!!");
});
