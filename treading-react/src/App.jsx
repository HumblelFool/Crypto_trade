
import { Route, Router, Routes } from 'react-router-dom'
import { Button } from './components/ui/button'
import Home from './page/Home/Home'
import Navbar from './page/Navbar/Navbar'
import Portfolio from './page/Portfolio/Portfolio'
import Activity from './page/Activity/Activity'
import Wallet from './page/Wallet/Wallet'
import Withdrawal from './page/Withdrawal/Withdrawal'
import PaymentDetails from './page/PaymentDetails/PaymentDetails'
import WatchList from './page/WatchList/WatchList'
import Profile from './page/Profile/Profile'
import StockDetails from './page/Stock_Details/StockDetails'
import SearchCoin from './page/Search/SearchCoin'
import NotFound from './page/NotFound/NotFound'
import Auth from './page/Auth/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { store } from './Store/Store'
import { useEffect } from 'react'
import { getUser } from './Store/Auth/Action'

function App() {

  const { auth } = useSelector(store => store)


  console.log("auth : ", auth);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser(auth.jwt || localStorage.getItem("jwt")))
  }, [auth.jwt])

  return (
    <>

      {
        auth.user ? <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/watchlist' element={<WatchList />} />
            <Route path='/activity' element={<Activity />} />
            <Route path='/wallet' element={<Wallet />} />
            <Route path='/payment-details' element={<PaymentDetails />} />
            <Route path='/withdrawal' element={<Withdrawal />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/market/:id' element={<StockDetails />} />
            <Route path='/search' element={<SearchCoin />} />
            <Route path='/*' element={<NotFound />} />
            <Route path='/logout' element={<Activity />} />
          </Routes>
        </div> : <Auth />
      }



    </>
  )
}

export default App
