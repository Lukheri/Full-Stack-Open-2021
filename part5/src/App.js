import { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs.sort((a, b) => b.likes - a.likes) )
    )  
  }, [])

  // const loginForm = () => (
  //   <form onSubmit={handleLogin}>
  //     <div>
  //       username
  //         <input
  //         type="text"
  //         value={username}
  //         name="Username"
  //         onChange={({ target }) => setUsername(target.value)}
  //       />
  //     </div>
  //     <div>
  //       password
  //         <input
  //         type="password"
  //         value={password}
  //         name="Password"
  //         onChange={({ target }) => setPassword(target.value)}
  //       />
  //     </div>
  //     <button type="submit">login</button>
  //   </form>      
  // )

  const handleLogin = async (event) => {
    event.preventDefault()
    
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedBlogUser', JSON.stringify(user)
      ) 
      
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage(['Wrong credentials', {color: 'red'}])
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogUser')
    setUser(null)
  }

  const blogFormRef = useRef()

  const createBlog = async (blogObject) => {
    blogFormRef.current.toggleVisibility()
    const blogCreated = await blogService.create(blogObject)

    setBlogs(blogs.concat(blogCreated))
    
    setErrorMessage(
      [`Added new blog ${blogObject.title} by ${blogObject.author}`, {color: 'green'}]
      )
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  const updateBlog = async (blogObject) => {
    const blogUpdated = await blogService.update(blogObject)

    setBlogs(blogs.map(blog => blog.id !== blogObject.id ? blog : blogUpdated).sort((a, b) => b.likes - a.likes))
  }

  const deleteBlog = async (blogObject) => {
    if(window.confirm(`Delete ${blogObject.title} by ${blogObject.author}?`)) {
      blogService.remove(blogObject.id)
    }
    setBlogs(blogs.filter(blog => blog.id !== blogObject.id))

    setErrorMessage(
      [`Deleted ${blogObject.title} by ${blogObject.author}`, {color: 'red'}]
      )
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  return (
    <div>
      {user === null ?
        <h2>log in to application</h2> :
        <h2>blogs</h2>
      }
      <Notification message={errorMessage} />

      {user === null ?
          <LoginForm 
            handleLogin={handleLogin}
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}/> :
        <div>
          <p>{user.name} is logged-in <button onClick={handleLogout}>logout</button></p>
          <Togglable buttonLabel="new blog" ref={blogFormRef}>
            <BlogForm
              createBlog={createBlog}
            />
          </Togglable>
          {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} updateBlog={updateBlog} deleteBlog={deleteBlog} userLoggedIn={user} />
          )}
        </div>
      }
    </div>
  )
}

export default App
