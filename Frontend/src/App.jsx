import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import { useContext } from 'react'
import { UserDataContext } from './context/UserContext'
import UserProtectPage from './pages/UserProtectPage'
import UserLogOut from './pages/UserLogOut'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainHome from './pages/CaptainHome'
import UserHome from './pages/UserHome'
import Riding from './pages/Riding'
import DriverRiding from './pages/DriverRiding'

const App=()=>{
  const ans=useContext(UserDataContext);
  console.log(ans);
  return (
    <div>
      <Routes>
         <Route path='/' element={<Home/>}  />
         <Route path='/login' element={<UserLogin/>}  />
         <Route path='/riding' element={<Riding/>}  />
         <Route path='/signup' element={<UserSignup/>}  />
         <Route path='/captain-login' element={<CaptainLogin/>}  />
         <Route path='/captain-signup' element={<CaptainSignup/>}  />
         <Route path='/home' element={
            <UserProtectPage>
              <Home/>
            </UserProtectPage>
         }/>
         <Route path='/logout' element={<UserLogOut/>} />
         <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            {<CaptainHome/>}
          </CaptainProtectWrapper>
          } />
          <Route path='/user-home' element={
           <UserHome/>
          } />
          <Route path='/driver-riding' element={<DriverRiding/>}></Route>
      </Routes>
    </div>
  )
}

export default App