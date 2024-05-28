
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home.js';
import Addcar from './Addcar.js'
import Bookings from './Bookings.js'
import Bookcar from './Bookcar.js'
function App() {
  return (
   <BrowserRouter>
   <Routes> 
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/Home' element={<Home/>} />
    <Route exact path='/bookings' element={<Bookings/>} />
    <Route exact path='/Addcar' element={<Addcar/>} />
    <Route exact path='/Bookcar' element={<Bookcar/>} />
   </Routes>
   </BrowserRouter>
  );
}
export default App;
