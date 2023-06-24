import React from 'react'

const FormField = ({labelName,type,name,placeholder,value,handleChange,isSupriseMe,handleSupriseMe}) => {
  return (
    <div >
      <label htmlFor={name} className="block text-center gap-2 mb-2">
        
        {labelName}
        <input className='ml-2 rounded ' type={type} name={name} placeholder={placeholder} id={name} value={value} onChange={handleChange} />

      </label>{
        isSupriseMe &&(<button
          type="button" 
          onClick={handleSupriseMe}
          className="font-semibold text -xs
          • bg- [#ECECF1] ру-1
          px-2 rounded- [5px] Otext-black"
        >
        Suprise Me
       </button>)
      }
      
    </div>
  )
}

export default FormField