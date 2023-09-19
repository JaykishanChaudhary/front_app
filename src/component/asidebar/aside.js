import './aside.css'
import DashB from '../../asset/dashboard.png'
import TaskQ from '../../asset/taskq.png'
import NetWorkPro from '../../asset/networkPro.png'
import Document from '../../asset/document.png'
import Profile from '../../asset/profile.png'
import UserManagement from '../../asset/usermanagement.png'
import AuditTrail from '../../asset/audittrial.png'
import Support from '../../asset/support.png'
import Search from '../../asset/search.png'
import MasterConfig from '../../asset/masterconfig.png'

function AsideBar(){
    return <>
    <div className='sidenavbar'>
        <div className='navbar'>
            <img width="20" height="20" className="imageicon" src={DashB} alt="external-pie-chart-business-kmg-design-glyph-kmg-design"/>    
            <h3 className='txthead'>Dashboard</h3>
        </div>
        <div className='navbar'>
            <img width="25" height="25" className="imageicon" src={TaskQ} alt="clipboard-list"/>
            <h3 className='txthead'>Task Queue</h3>
        </div>
        <div className='navbar'>
            <img width="25" height="25" className="imageicon" src={NetWorkPro} alt="broadcasting"/>
            <h3 className='txthead'>Network Providers</h3>
        </div>
        <div className='navbar'>
            <img width="25" height="25" className="imageicon" src={NetWorkPro} alt="broadcasting"/>
            <h3 className='txthead'>Non-Network Providers</h3>
        </div>
        <div className='navbar'>
            <img width="25" height="25"  className="imageicon" src={Document} alt="document"/>
            <h3 className='txthead'>My Documents</h3>
        </div>
        <div className='navbar'>
            <img width="20" height="20" className="imageicon" src={Profile} alt="user-male-circle--v1"/>
            <h3 className='txthead'>Profile</h3>
        </div>
        <div className='navbar'>
            <img width="20" height="20" className="imageicon" src={UserManagement} alt="commercial-development-management"/>
            <h3 className='txthead'>User Management</h3>
        </div>
        <div className='navbar'>
            <img width="20" height="20" className="imageicon" src={AuditTrail} alt="accounting"/>
            <h3 className='txthead'>Audit trail</h3>
        </div>
        <div className='navbar'>
            <img width="20" height="20" className="imageicon" src={Support} alt="technical-support"/>
            <h3 className='txthead'>Support</h3>
        </div>
        <div className='navbar'>
            <img width="20" height="20" className="imageicon" src={Search} alt="search--v1"/>
            <h3 className='txthead'>Search</h3>
        </div>
        <div className='navbar'>
            <img width="20" height="20" className="imageicon" src={MasterConfig}/>
            <h3 className='txthead'>Master Configurator</h3>
        </div>
    </div>
    </>
}


export default AsideBar