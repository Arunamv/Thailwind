import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const ReactForms = () => {

    const initialValue = { firstname: "", lastname:"",email:"", phonenumber:"",pannumber:"", age:"",dateofbirth:"",collegename:"",year:"",address:"" };
    const[formValues,setFormValues] = useState(initialValue);
    const[formErrors,setFormErrors] = useState({});
    const[isSubmit,setIsSubmit]= useState(false);
    const[selectedDate,setSelectedDate] = useState(null)

    const handleChange = (e) => {

        console.log(e.target.value)
const {name,value} = e.target;
setFormValues({...formValues,[name]:value});

    }

    const handleSubmit = (e) => {
        e.preventDefault();
      setFormErrors(validation(formValues));
      setIsSubmit(true);

    }
    const handleCancel= () => {
     
      //setFormValues("");
      console.log(formValues)
    }
    useEffect(() => {
       
        if(Object.keys(formErrors).length === 0 && isSubmit){
           // console.log(formValues)
        }

    },[formErrors])

    const validation = (values) => {
        const errors={};
        //const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
       if(!values.firstname){
        errors.firstname ='Firstname is requried!'
       }
       if(!values.lastname){
        errors.lastname ='Lastname is requried!'
       }
       if(!values.email){
        errors.email = 'Email is required!'
       }
       if(!values.phonenumber){
        errors.phonenumber='Phone Number is required!'
       }
       if(!values.pannumber){
        errors.pannumber='Field is required!'
       }
       if(!values.age){
        errors.age='Field is required!'
       }
       if(!values.dateofbirth){
        errors.dateofbirth='Field is required!'
       }
       if(!values.collegename){
        errors.collegename='Field is required!'
       }
       if(!values.year){
        errors.year='Field is required!'
       }
       if(!values.address){
        errors.address='Field is required!'
       }
       return errors;

    }
  return (
    <div className='max-w-4xl  bg-gray shadow mx-auto '>
      <div className="p-4 w-full bg-sky-50 rounded-t-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700">
        <div className='grid'>
          <h1  className='text-4xl font-bold px-6'>Personal Information</h1>
        </div>
      </div>
     <div className='m-4 p-4'> 
<form  onSubmit={handleSubmit}>
    <div className="grid gap-6 mb-6 mt-5 md:grid-cols-2">
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
            <input type="text" id="last_name" name='firstname'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            onChange={handleChange}
      value={formValues.firstname}
            required=""/>
             <p className='text-red-600'>{formErrors.firstname}</p>
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
            <input type="text" id="last_name" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  name="lastname"
            onChange={handleChange}
            value={formValues.lastname}
            required=""/>
             <p className='text-red-600'>{formErrors.lastname}</p>
        </div>
        
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
            <input type="tel" id="phone" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern='[0-9]{10}' name='phonenumber'
            onChange={handleChange}
            value={formValues.phonenumber}
            required=""/>
            <p className='text-red-600'>{formErrors.phonenumber}</p>

        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date of Birth</label>
            <input type="date" id="visitors" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='dateofbirth'
            onChange={handleChange}
            value={formValues.dateofbirth}
            required=""/>
            <p className='text-red-600'>{formErrors.dateofbirth}</p>

        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gender</label>
            <input type="text" id="company" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='age' placeholder='Male/Female'
            onChange={handleChange}
            value={formValues.age}
            required=""/>
            <p className='text-red-600'>{formErrors.age}</p>

        </div> 
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">PAN/Aadhar Number</label>
            <input type="text" id="" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='pannumber'
            onChange={handleChange}
            value={formValues.pannumber}
            required=""/>
          <p className='text-red-600'>{formErrors.pannumber}</p>

        </div>
       
    </div>
    <div className="mb-6">
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
        <input type="email" id="email" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='email'
            onChange={handleChange}
            value={formValues.email}
            required=""/>
            <p className='text-red-600'>{formErrors.email}</p>

    </div> 
    <div className="mb-6">
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">College Name</label>
        <input type="text" id="college" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='collegename'
        onChange={handleChange}
        value={formValues.collegename}
        required=""/>
      <p className='text-red-600'>{formErrors.collegename}</p>

    </div> 
    <div className="mb-6">
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
        <input type="text" id="confirm_password" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='address'
        onChange={handleChange}
        value={formValues.address}
        required=""/>
     <p className='text-red-600'>{formErrors.address}</p>

    </div> 
    <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >
        City
      </label>
      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >
        State
      </label>
      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
    </div>
   
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Zip
      </label>
      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
    </div>
   
    </div>
    
    <div className='flex justify-center space-x-5 m-3'>
<button className='w-32 bg-blue-100 px-5 mt-6 p-2 rounded-full text-black' onClick={handleCancel}>Cancel</button>
    <button className='w-32 bg-blue-400 px-5 mt-6 p-2 rounded-full text-white'>Submit</button>
</div></form>
</div>

    </div>
    
  )
}

export default ReactForms
