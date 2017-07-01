angular.module("myChats").service("mainSrvc", function($http){

  this.getChats = function(screenname){
    var url = '/api/chats';
    if (screenname) {
      url += '/' + screenname;
    }
    return $http({
      method: 'GET',
      url: url
    })
  }

  this.addChat = function(chat){
    return $http({
      method: 'POST',
      url: '/api/chats',
      data: chat
    })
  }

  this.deleteChats = function(){
    return $http({
      method: 'DELETE',
      url: '/api/chats'
    })
  }

  this.setScreenname = function (screenname) {
    return $http({
      method: 'POST',
      url: '/api/screenname',
      data: {
        screenname: screenname
      }
    })
  }
});
