import { useState } from 'react';
import './createform.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function CreateForm(){
    const navigate=useNavigate();
    const [formData,setformData]=useState({
        HOSid:'',
        ProviderName:'',
        ActionPerformed:'',
        remarks:'',
        taskTitle:'',
        description:''
    })

    console.log(formData);
    const HandleFormData=(event)=>{
            const {name,value}=event.target
            setformData({...formData,
            [name]:value})
    }

    async function NaviCreate(){
        axios.post('http://localhost:5000/task',formData).then((response)=>{
            console.log('response',response);
            navigate('/home')
         }).catch((err)=>{
            console.error(err);
        })

    }
    return <>
             <div id="update-form">
                <tr>
                    <th><label htmlFor='hosid'>HOS id</label></th>
                    <th><input type='text' id='hosid' onChange={HandleFormData} name='HOSid' /></th>
                </tr>
                <tr>
                    <th><label htmlFor='providername'>Provider Name</label></th>
                    <th><input type='text' id='providername' onChange={HandleFormData} name='ProviderName' /> </th>
                </tr>
                <tr>
                    <th><label htmlFor='actionperformed'>Action Provider</label></th>
                    <th><input type='text' id='actionperformed'onChange={HandleFormData} name='ActionPerformed' /></th>
                </tr>
                <tr>
                    <th><label htmlFor='remarks'>Remarks</label></th>
                    <th><input type='text' id='remarks' onChange={HandleFormData} name='remarks' /> </th>
                </tr>
                <tr>
                    <th><label htmlFor='tasktitle'>Task Title</label></th>
                    <th><input type='text' id='tasktitle'onChange={HandleFormData} name='taskTitle'/> </th>
                </tr>
                <tr>
                    <th><label htmlFor='description'>Description</label></th>
                    <th><input type='text' id='description'onChange={HandleFormData} name='description'/> </th>
                </tr>
           <button className='create-button' onClick={NaviCreate}>Create Task</button>
        </div>
    
    </>
}

export default CreateForm