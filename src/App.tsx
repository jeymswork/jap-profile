import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile'

function App() {

  return (
    <Router basename='/jap-profile'>
      <div className='box-border overflow-x-hidden'>
      <Profile />
        <Navbar />
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
