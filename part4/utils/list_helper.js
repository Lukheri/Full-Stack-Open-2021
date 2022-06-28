const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favBlog = (blogs) => {
  const likesList = blogs.map(blog => blog.likes)
  const max = Math.max(...likesList)
  const fav = blogs[likesList.indexOf(max)]
  return {
    'title': fav.title,
    'author': fav.author,
    'likes': fav.likes
  }
}

module.exports = {
  dummy,
  totalLikes,
  favBlog
}

