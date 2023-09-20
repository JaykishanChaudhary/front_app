import { useEffect, useState } from 'react';
import './updatedetail.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


function UpdateDetail(){
    const navigate=useNavigate();
    const [selectedItem,setselectedItem]=useState(null);

    useEffect(()=>{
        console.log("UpdateDetail component mounted.")
        let StoredItem=localStorage.getItem('SelectedItem')
         console.log('StoredItem',StoredItem)
        if(StoredItem){
            setselectedItem(JSON.parse(StoredItem) );
            console.log(JSON.parse(StoredItem) )
        }
    },[])
    console.log('selectedItem',selectedItem)
    async function NavigateClick(){
        const UpdateData={
            HOSid:selectedItem.HOSid,
            ProviderName:selectedItem.ProviderName,
            ActionPerformed:selectedItem.ActionPerformed,
            remarks:selectedItem.remarks,
            description:selectedItem.description
        }
        try {
            await axios.put(`http://52.90.211.46:5000/task/${selectedItem._id}`, UpdateData);
            console.log('Data updated successfully');
            navigate('/');
          } catch (error) {
            console.error('Error updating data:', error);
          }
    }
  
    if(!selectedItem){
        return <>
        <p>not found</p>
        </>
    }else{
        return <>
        <div id="update-form">
            <h1>{selectedItem.taskTitle}</h1>
            {selectedItem && ( <div className='inputdiv'>
                <table>
                    <tr>
                        <th> <label htmlFor='hosid'>HOS id</label></th>
                        <th><input type='text' id='hosid' name='hosid' value={selectedItem.HOSid} onChange={(e) => {setselectedItem({ ...selectedItem, HOSid: e.target.value });}}/></th>
                    </tr>
                    <tr>
                        <th><label htmlFor='providername'>Provider Name</label></th>
                        <th><input type='text' id='providername' name='providername' value={selectedItem.ProviderName} onChange={(e) => {setselectedItem({ ...selectedItem, ProviderName: e.target.value });}} /> </th>
                    </tr>
                    <tr>
                        <th><label htmlFor='actionperformed'>Action Performed</label></th>
                        <th><input type='text' id='actionperformed' name='actionperformed' value={selectedItem.ActionPerformed} onChange={(e) => {setselectedItem({ ...selectedItem, ActionPerformed: e.target.value });}}/></th>
                    </tr>
                    <tr>
                        <th><label htmlFor='remarks'>Remarks</label></th>
                        <th><input type='text' id='remarks' name='remarks' value={selectedItem.remarks} onChange={(e) => {setselectedItem({ ...selectedItem,remarks: e.target.value });}}/> </th>
                    </tr>
                    <tr>
                        <th><label htmlFor='description'>Description</label></th>
                        <th><input type='text' id='description' name='description' value={selectedItem.description} onChange={(e) => {setselectedItem({ ...selectedItem, description: e.target.value });}}/> </th>
                    </tr>
                </table>
            </div>)}
            <button onClick={NavigateClick} className='create-button'>Save</button>
        </div>
       
    </>
    }
   
}

export default UpdateDetail