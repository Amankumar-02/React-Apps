import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
    <h1>Context Api Project 01</h1>
    <Login />
    <Profile />
    </UserContextProvider>

    // <UserContextProvider.Provider>
    // <h1>Context Api Project 01</h1>
    // </UserContextProvider.Provider>
  )
}

export default App
