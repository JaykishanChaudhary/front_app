import '../tablebox/tablebox.css'
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Delete from '../../asset/delete.png'
import Lens from '../../asset/lens.png'
import Filter from '../../asset/filter.png'


function TableBox(){
    const [Button1Color,setButton1Color]=useState('blue');
    const [Button2Color,setButton2Color]=useState('white');
    const [Text1Color,setText1Color]=useState('white');
    const [Text2Color,setText2Color]=useState('blue');
    const [ActiveButton,setActiveButton]=useState(null);
    const [SearchField,setSearchField]=useState(null);
    const [SearchData,setSearchData]=useState(null);
    const [filteredData,setfilteredData]=useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [isfiltering, setisfiltering]=useState(false);
    const navigate=useNavigate();

    function HandleColor(buttonNumber){
        if(ActiveButton!==buttonNumber){
            let temp1=Button1Color;
            setButton1Color(Button2Color);
            setButton2Color(temp1);
            let temp2=Text1Color;
            setText1Color(Text2Color);
            setText2Color(temp2);
        }
      setActiveButton(buttonNumber)
    }
    
    function ViewClick(data){
        navigate('/viewdetail')
        localStorage.setItem('SelectedItem',JSON.stringify(data))
        let StoredItem=localStorage.getItem('SelectedItem')
        console.log('stored',StoredItem)
    }

    function CreateClick(){
        navigate('/createtask')
    }



    useEffect(()=>{
        console.log(isfiltering);
        if(!isfiltering){
            axios.get(`http://52.90.211.46:5000/task`).then((response)=>{
                setfilteredData(response.data.result)
                console.log(response)
            }).catch((err)=>{
                console.error(err)
            })
        }
    },[isfiltering,originalData])



    console.log('filteredData',filteredData)
    function FilterdFunc(){
           
                setisfiltering(true);
                axios.get(`http://52.90.211.46:5000/task/filter?field=${SearchField}&value=${SearchData}`).then((response)=>{
                    setfilteredData(response.data.result);
                }).catch((err)=>{
                    console.error(err);
                    setisfiltering(false);
                })
            }
        
   
   

   function HandleDelete(taskId){
        axios.delete(`http://52.90.211.46:5000/task/${taskId}`).then((response)=>{
            console.log(`deleted successfully`);
            const updatedData = filteredData.filter((data) => data._id !== taskId);
            setfilteredData(updatedData);
        }).catch((err)=>{
            console.error(err);
        })
   }

   function HandleSearchData(e){
        setSearchData(e.target.value);
   }

    function  SearchValue(e){
        console.log(e.target.value);
        setSearchField(e.target.value)
    }


    return <>
        <div className='tablediv'>
            <div id='button-box'>
                <div id='buttondiv'>
                    <button className='custom-button' id='button1' style={{backgroundColor:Button1Color,color:Text1Color}} onClick={()=>HandleColor(1)}>My Audit</button>
                    <button className='custom-button' id='button2' style={{backgroundColor:Button2Color,color:Text2Color}} onClick={()=>HandleColor(2)}>Provider's Audit</button>
                </div>
                <button className='task-button' onClick={CreateClick}>Create Task</button>
            </div>
            <div id='searchdiv'>
                <div id='labelselectdiv'>
                    <label htmlFor='searchoption' id='searchlabel' >Search by:</label>
                    <select id='searchoption' onChange={ SearchValue}>
                        <option>Select Criteria</option>
                        <option>_id</option>
                        <option>HOSid</option>
                        <option>ProviderName</option>
                        <option>ActionPerformed</option>
                        <option>Time Stamps</option>
                        <option>Remarks</option>
                    </select>
                </div>
                
                <input type='text' id='searchinput' onChange={HandleSearchData} placeholder='Search by Task id'/>
                <img width="20" height="20" className="searchicon" onClick={FilterdFunc} src={Lens} alt="external-search-interface-kiranshastry-gradient-kiranshastry"/>
                <img width="40" height="40" className='filterimg'  src={Filter} alt="filter--v1"/>
            </div>
            <div id='table'>
                <table>
                    <thead>
                        <tr>
                            <th>Task id</th>
                            <th>HOS id</th>
                            <th>Provider Name</th>
                            <th>Action Performed</th>
                            <th>Time Stamps</th>
                            <th>Remarks</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                     {filteredData.map((data)=>{
                        return(
                            <tr key={data._id}>
                            <td>{data._id}</td>
                            <td>{data.HOSid}</td>
                            <td>{data.ProviderName}</td>
                            <td>{data.ActionPerformed}</td>
                            <td>{data.createdAt}</td>
                            <td>{data.remarks}</td>
                            <td>
                                <div className='update-div'>
                                    <button className='detail-button' onClick={()=>ViewClick(data)}  >VIEW DETAIL</button>
                                    <img width="25" height="25" className='delete-icon' onClick={()=>{HandleDelete(data._id)}} src={Delete} alt="delete--v1"/>
                                </div>
                            </td>
                        </tr>
                        )
                       
                     })}
                        
                    </tbody>
                </table>
            </div>

        </div>
    
    </>
}


export default TableBox