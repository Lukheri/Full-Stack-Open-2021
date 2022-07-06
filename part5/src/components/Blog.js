import { useState } from 'react'

const Blog = ({ blog, updateBlog }) => {
  const blogStyle = {
    display: 'flex',
    paddingTop: 5,
    paddingBottom:5,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
    alignItems: 'center'
  }

  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const addLike = (event) => {
    event.preventDefault()

    console.log(blog.likes)
    updateBlog({
      ...blog,
      likes: blog.likes +1
    })

  }

  return (
    <div style={blogStyle}>
      <div style={hideWhenVisible}>
        {blog.title} {blog.author} <button className='btn' onClick={toggleVisibility}>view</button>
      </div>
      <div style={showWhenVisible}>
        {blog.title} {blog.author} <button onClick={toggleVisibility}>hide</button><br/>
        {blog.url}<br/>
        {blog.likes} <button onClick={addLike}>like</button><br/>
        {blog.user.name}
      </div>
    </div>  
  )
}

export default Blog