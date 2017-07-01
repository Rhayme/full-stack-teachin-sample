var chats = [];
module.exports = {

  getChats:function(req,res){

    res.send(chats);
  },
  getChatsByScreenname:function(req,res){
    var results = chats.filter(function(chat) {
      return chat.screenname === req.params.screenname;
    })
    res.send(results);
  },
  postChats:function(req,res){
    var newChat = {
      message: req.body.message,
      screenname: req.session.screenname
    };

    chats.push(newChat);

    res.send(chats);
  },
  deleteChats:function(req,res){
    chats = [];
    res.send(chats);
  }
}
