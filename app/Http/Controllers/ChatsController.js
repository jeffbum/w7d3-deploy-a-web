'use strict'

const Pusher = require('pusher')

const Chat = use('App/Model/Chat')

class ChatsController {

  * index(request, response) {
    //
    var allChats = yield Chat.query().select('*').orderBy('id','desc')

    yield response.sendView('chats', {
        chats: allChats
    })
  }

  * create(request, response) {
    //
    yield response.sendView('chats')
  }

  * store(request, response) {

   var message = request.input('message')

var pusher = new Pusher({
  appId: '131622',
  key: '6e5f67bde794d28881ed',
  secret: 'cc5ab615a7d0aa9056c4',
  encrypted: true
})

pusher.trigger('chat_app', 'new_chat', {
  message: message
})

yield chat.save()

response.redirect('/chats')

// save the message to your Chat model here...

response.json(true)
  }

  * show(request, response) {
    //
    var singleChat = yield Chat.find(request.param('id'))

    yield response.sendView('chat', {
      chat: singleChat
    })
  }

  // * edit(request, response) {
  //   //
  // }

  * update(request, response) {
    //
  }


}

module.exports = ChatsController
