const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {
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
    
  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test('list with multiple blogs', () => {
    expect(listHelper.totalLikes(listBlog)).toBe(1011)
  })
})