'use strict'

const Schema = use('Schema')

class PostsTableSchema extends Schema {

  up () {
    this.create('posts', (table) => {
      table.increments()
      //naming table columns. .string() = varchar is limited to 255 characters. .text() is 64,000 characters.
      table.string('author') //CAN give a second parameter to dictate length of Author name.
      table.string('headline')
      table.text('body')
      table.string('image')
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }

}

module.exports = PostsTableSchema
