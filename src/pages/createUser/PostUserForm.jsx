import React, { useState } from 'react'
import { ApiService } from '../../service'

const PostUserForm = () => {

  const [form, setForm] = useState({})

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value

    })
  }
 const handleSubmit =(e)=>{
  e.preventDefault()
  ApiService.create(form)

 }

  return (
    <>
      <div>Creando usuarios mediante un formulario</div>
      <form  onSubmit={handleSubmit}   className="container">
        <div className="header">
          <div className="text">Create your user</div>
          {/* <div className="underline"></div> */}
        </div>
        <div className="inputs">
          <div className="input">
            <input type="text" name='name' value={form.name} placeholder='type your name' onChange={handleChange} />
          </div>

          <div className="input">
            <input type="text" name='job' value={form.job} placeholder='ingrese su oficio' onChange={handleChange} />
          </div>

          <div className="input">
            <input type="submit" value='Post' className='input' />
          </div>
        </div>
      </form>
    </>
  )
}

export default PostUserForm