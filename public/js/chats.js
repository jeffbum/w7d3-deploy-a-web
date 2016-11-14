
//make the message input field fire off an AJAX POST to the /chats endpoint, sending the message field value use the headers below in the fetch.
 // headers: { 'Content-Type': 'application/json'}
 document.getElementById('message').addEventListener('keypress', searchEnter)

 var messageInput = document.getElementById('messages')

 function searchEnter(event) {
    if (event.key === 'Enter') {
        fetchChat()
        // console.log('Enter')
    }
 }
 function fetchChat() {
    fetch('/chats', {
     method: 'post',
    headers: {
            'Content-Type': 'application/json'
       },
     body: JSON.stringify({
         message: messageInput.value
     })
 });

 }

 function addChatMessage(chat) {
    var messages = document.getElementById('messages')
    var othersMessage = document.createElement('li')
    var othersMessageText = chat.message
    othersMessage.classList.add('list-group-item')
    othersMessage.innerHTML = othersMessageText
    messages.insertBefore(othersMessage, messages.childNodes[0])
    messageInput.value = ''
 }

 // Pusher Setup
 var pusher = new Pusher('6e5f67bde794d28881ed', {
  encrypted: true
 })

 var pusherChannel = pusher.subscribe('chat_app')

 pusherChannel.bind('new_chat', function(chat) {
  addChatMessage(chat)
 })
