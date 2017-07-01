var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var chatCtrl = require('./controllers/chatCtrl');
var port = 3737;

app.use(bodyParser.json());

app.use(express.static('../public'));

app.use(session({ secret: 'raccoons r awesome' }));

app.post("/api/screenname", function(req, res){
  req.session.screenname = req.body.screenname;
  res.status(200).send('ok');
})

app.get("/api/chats", chatCtrl.getChats);
app.get("/api/chats/:screenname", chatCtrl.getChatsByScreenname);
app.post("/api/chats", chatCtrl.postChats);
app.delete("/api/chats", chatCtrl.deleteChats);

app.listen(port, function(){
  console.log("Hi everyone ", port);
});
