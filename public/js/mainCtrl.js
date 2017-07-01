angular.module("myChats").controller("mainCtrl", function($scope, mainSrvc, $interval){

  $scope.chatAppName = "Name my chatapp";

  //Dummy data to show what the chat messages should look like
  // to work with the frontend
  // TODO Remove once server is integrated;

  $scope.addChat = function(chatmessage){
    mainSrvc.addChat(chatmessage).then(function(response) {
      $scope.chats = response.data;
    })
  }

  $scope.getChats = function(screenname){
    mainSrvc.getChats(screenname).then(function(response) {
      $scope.chats = response.data;
    })
  }

  $scope.deleteChats = function(){
    mainSrvc.deleteChats().then(function(response) {
      $scope.chats = response.data;
    })
  }

  $scope.setScreenname = function (screenname) {
    mainSrvc.setScreenname(screenname);
  }

  // Gets initial chats
  // getChats();

  // Set up repeating call to get chats
  // $interval(getChats, 3000);

})
