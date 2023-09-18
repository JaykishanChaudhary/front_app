import './App.css';
import Main from './component/main/main';
import ViewDetail from './component/view-detail/viewdetail';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateTask from './component/createtask/createtask';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
          <Route path='/home' element={<Main/>}/>
          <Route path='/viewdetail' element={<ViewDetail/>}/>
          <Route path='/createtask' element={<CreateTask/>}/>
        </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
