import './aside.css'

function AsideBar(){
    return <>
    <div className='sidenavbar'>
        <div className='navbar'>
            <img width="20" height="20" className="imageicon" src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/external-pie-chart-business-kmg-design-glyph-kmg-design.png" alt="external-pie-chart-business-kmg-design-glyph-kmg-design"/>    
            <h3 className='txthead'>Dashboard</h3>
        </div>
        <div className='navbar'>
            <img width="25" height="25" className="imageicon" src="https://img.icons8.com/wired/64/clipboard-list.png" alt="clipboard-list"/>
            <h3 className='txthead'>Task Queue</h3>
        </div>
        <div className='navbar'>
            <img width="25" height="25" className="imageicon" src="https://img.icons8.com/ios/50/broadcasting.png" alt="broadcasting"/>
            <h3 className='txthead'>Network Providers</h3>
        </div>
        <div className='navbar'>
            <img width="25" height="25" className="imageicon" src="https://img.icons8.com/ios/50/broadcasting.png" alt="broadcasting"/>
            <h3 className='txthead'>Non-Network Providers</h3>
        </div>
        <div className='navbar'>
            <img width="25" height="25"  className="imageicon" src="https://img.icons8.com/dotty/80/document.png" alt="document"/>
            <h3 className='txthead'>My Documents</h3>
        </div>
        <div className='navbar'>
            <img width="20" height="20" className="imageicon" src="https://img.icons8.com/ios/50/user-male-circle--v1.png" alt="user-male-circle--v1"/>
            <h3 className='txthead'>Profile</h3>
        </div>
        <div className='navbar'>
            <img width="20" height="20" className="imageicon" src="https://img.icons8.com/ios-filled/50/commercial-development-management.png" alt="commercial-development-management"/>
            <h3 className='txthead'>User Management</h3>
        </div>
        <div className='navbar'>
            <img width="20" height="20" className="imageicon" src="https://img.icons8.com/ios/50/accounting.png" alt="accounting"/>
            <h3 className='txthead'>Audit trail</h3>
        </div>
        <div className='navbar'>
            <img width="20" height="20" className="imageicon" src="https://img.icons8.com/ios/50/technical-support.png" alt="technical-support"/>
            <h3 className='txthead'>Support</h3>
        </div>
        <div className='navbar'>
            <img width="20" height="20" className="imageicon" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/>
            <h3 className='txthead'>Search</h3>
        </div>
        <div className='navbar'>
            <img width="20" height="20" className="imageicon" src="https://img.icons8.com/external-prettycons-lineal-prettycons/49/external-lan-connections-prettycons-lineal-prettycons-1.png" alt="external-lan-connections-prettycons-lineal-prettycons-1"/>
            <h3 className='txthead'>Master Configurator</h3>
        </div>
    </div>
    </>
}


export default AsideBar