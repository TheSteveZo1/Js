const newPost = (post, addedAt = Date()) => ({
  ...post,
  addedAt,
})

const firstPost = {
  id: 1,
  author: 'Bogdan',
}

console.log( newPost(firstPost))