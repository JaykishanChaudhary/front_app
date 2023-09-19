import './dashboard.css'
import Image from '../../asset/JayImage.jpeg'
import Notifcation from '../../asset/notification.png'

function Dashboard(){
    return <>
            <div className="dashdiv">
                <div>
                    <h2>Dashboard</h2>
                </div>
                <div className='imgdiv'>
                    <p id='welpara'> Welcome Jaykishan</p>
                    <img src={Image}  id='image' alt=''/>
                    <img width="35" height="35" id="iconimage" src={Notifcation} alt="appointment-reminders"/>
                </div>
                
            </div>
    </>
}


export default Dashboard