const listHelper = require('../utils/list_helper')

const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  }
]

const listBlog = [
  {
    title: 'luke blog lmao',
    author: 'Luke',
    url: 'www.luke.com/blog',
    likes: 5,
    id: '62b9623fc203e66ef987ff53'
  },
  {
    title: 'luke blog 2 hakhak',
    author: 'Luke Heri',
    url: 'www.luke.com/blog/hakhak',
    likes: 6,
    id: '62b968614e77eb1183646db7'
  },
  {
    title: 'luke blog 3 hilak',
    author: 'Luke Heri',
    url: 'www.luke.com/blog/cry',
    likes: 999,
    id: '62b977d1f4a2bce86494d524'
  },
  {
    title: 'luke blog 4 final',
    author: 'Luke Heri',
    url: 'www.luke.com/blog/YESSSSS',
    likes: 1,
    id: '62b979180a0d20fb704ab892'
  }
]

const listBlog2 = [
  {
    title: 'luke blog lmao',
    author: 'Luke Heriiiii',
    url: 'www.luke.com/blog',
    likes: 5,
    id: '62b9623fc203e66ef987ff53'
  },
  {
    title: 'luke blog 2.5 idk',
    author: 'Luke Heriiiii',
    url: 'www.luke.com/blog/??',
    likes: 999,
    id: '62b979180a0d20fb704ab892'
  },
  {
    title: 'luke blog 3 hilak',
    author: 'Luke Heri',
    url: 'www.luke.com/blog/cry',
    likes: 999,
    id: '62b977d1f4a2bce86494d524'
  },
  {
    title: 'luke blog 4 final',
    author: 'Luke Heri',
    url: 'www.luke.com/blog/YESSSSS',
    likes: 1,
    id: '62b979180a0d20fb704ab892'
  }
]
  
test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => { 
  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test('list with multiple blogs', () => {
    expect(listHelper.totalLikes(listBlog)).toBe(1011)
  })
})

describe('favorite blog', () => {
  test('list with multiple blogs', () => {
    expect(listHelper.favBlog(listBlog)).toEqual({
      title: 'luke blog 3 hilak',
      author: 'Luke Heri',
      likes: 999,
    })
  })

  test('list with same max likes', () => {
    expect(listHelper.favBlog(listBlog2)).toEqual({
      title: 'luke blog 2.5 idk',
      author: 'Luke Heriiiii',
      likes: 999
    })
  })
})

describe('most blogs', () => {
  test('list with multiple blogs', () => {
    expect(listHelper.mostBlogs(listBlog)).toEqual({
      'author': 'Luke Heri',
      'blogs': 3
    })
  })

  test('list with same max blogs', () => {
    expect(listHelper.mostBlogs(listBlog2)).toEqual({
      'author': 'Luke Heriiiii',
      'blogs': 2
    })
  })
})
