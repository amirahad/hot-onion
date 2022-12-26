import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import AuthProvider from './context/authProvider'
import DelivaryDetails from './Pages/DelivaryDetails/DelivaryDetails'
import Error from './Pages/Error/Error'
import Home from './Pages/Home/Home'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import SignUp from './Pages/SignUp/SignUp'

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Switch >
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/placeorder">
              <PlaceOrder />
            </Route>
            <Route path="/delivarydetails">
              <DelivaryDetails />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
