import './App.scss';
import {Routes,Route} from 'react-router-dom';

import Layout from './components/Layout';

function App() {
  return (

    <>

    <Routes>
       <Route Path="/" element={<Layout />}></Route>

    </Routes>
    
    
    </>


  )
    
  }

export default App;
