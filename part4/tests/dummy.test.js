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
    author: 'Lukei Heri',
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

const blogs = [
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  },
  {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12,
    __v: 0
  },
  {
    _id: '5a422b891b54a676234d17fa',
    title: 'First class tests',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10,
    __v: 0
  },
  {
    _id: '5a422ba71b54a676234d17fb',
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 0,
    __v: 0
  },
  {
    _id: '5a422bc61b54a676234d17fc',
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2,
    __v: 0
  }  
]
// test('dummy returns one', () => {
//   const blogs = []

//   const result = listHelper.dummy(blogs)
//   expect(result).toBe(1)
// })

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

  test('list with multiple blogs 2', () => {
    expect(listHelper.favBlog(blogs)).toEqual({
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      likes: 12,
    })
  })
})

describe('most blogs', () => {
  test('list with multiple blogs', () => {
    expect(listHelper.mostBlogs(listBlog)).toEqual({
      'author': 'Luke Heri',
      'blogs': 2
    })
  })

  test('list with same max blogs', () => {
    expect(listHelper.mostBlogs(listBlog2)).toEqual({
      'author': 'Luke Heriiiii',
      'blogs': 2
    })
  })

  test('list with multiple blogs 2', () => {
    expect(listHelper.mostBlogs(blogs)).toEqual({
      'author': 'Robert C. Martin',
      'blogs': 3
    })
  })
})

describe('most likes', () => {
  test('list with multiple blogs', () => {
    expect(listHelper.mostLikes(listBlog)).toEqual({
      'author': 'Luke Heri',
      'likes': 1005
    })    
  })

  test('test with multiple blogs 2', () => {
    expect(listHelper.mostLikes(blogs)).toEqual({
      'author': 'Edsger W. Dijkstra',
      'likes': 17
    })
  })
})