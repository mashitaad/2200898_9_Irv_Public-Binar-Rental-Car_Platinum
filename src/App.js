import './App.css';
import Signup from './components/signup';
import SignIn from './components/signin';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<SignIn />}/>
      </Routes>
    </>
  );
}

export default App;
