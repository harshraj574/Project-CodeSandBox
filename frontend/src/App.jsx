import './App.css';
import {Route, Routes} from 'react-router-dom';
import { CreateProject } from './pages/createProject';


function App() {

  return(
    <>
    <Routes>
      <Route path='/' element={<CreateProject />} />
    </Routes>
    </>
  )

}

export default App
