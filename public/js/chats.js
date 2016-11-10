
//make the message input field fire off an AJAX POST to the /chats endpoint, sending the message field value use the headers below in the fetch. 
 // headers: { 'Content-Type': 'application/json'}
sendChat(){
  if(){
    fetch(){

    }
  else {

  }
  }

}


// Pusher Setup
var pusher = new Pusher('6e5f67bde794d28881ed', {
  encrypted: true
})

var pusherChannel = pusher.subscribe('chat_app')

pusherChannel.bind('new_chat', function(chat) {
  addChatMessage(chat)
})
