import React from 'react'
import {Loader,FormField} from '../components'
import { useState,useEffect } from 'react'
import {useNavigate, useNavigation} from 'react-router-dom'
import { preview } from '../assets';
import { getRandomPrompt } from '../utils'

const CreatePost = () => {
  const [generatingImg, setgeneratingImg] = useState(false)
    const navigate = useNavigate()
    const [Form, setForm] = useState({
        name:"",
        prompt:"",
        photo:""
    })

    const handleSubmit=(() => {})
    const handleChange = (e) => {}
    const handleSupriseMe= () =>{
    }
  return (
    <>
    <section className='max-w-7xl mx-auto  text-white '>
    <div className="text-white   flex justify-center items-center">
  <h1 className="text-4xl font-bold mr-4">Create Post</h1>
  <img className="w-40 h-40 rounded-full" src="https://i.gifer.com/NfI3.gif" alt="Create Post" />
</div>
 <p cLassName="mt-2 text-3xl max-w [500px]">Create imaginative and visually stunning images through DALL-E AI and share them with the
community</p>

<form onSubmit={handleSubmit} className='mt-16 max-w-3xl'>
  <div className='flex flex-col gap-5' >
    <FormField
    labelName="Name"
    name="name"
    type="text"
    value={Form.name}
    handleChange={handleChange}
    placeholder="Aditya"
    />

<FormField
    labelName="Prompt"
    name="Prompt"
    type="text"
    value={Form.prompt}
    handleChange={handleChange}
    placeholder="A pluse toy"
    isSupriseMe
    handleSupriseMe={handleSupriseMe}
    />

    <div className='relativeclassName-"relative bg-gray-50 border
•border-gray-300 Otext-gray-900 text-sm rounded focus: ring-blue-500 focus :border-blue-500 w-64 p-3
h-64 flex justify-center items-center'>{
  Form.photo?(
    <img src={Form.photo}
    alt={Form.prompt}
    className='w-ful'
    />

  ):(
  <img className='opacity-40 object-contain'
  src={preview}
  alt='Preview'/>
  )
}
{generatingImg &&(
  <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]
  rounded-lg">
  <Loader />
</div>
)
 
}
</div>
  </div>
<div>
  <button >Generate Image </button>
</div>
</form>


    </section>
    
    </>
  )
}

export default CreatePost