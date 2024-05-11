import { Routes, Route, Navigate } from 'react-router-dom'


function App() {

  return (
    <>
    <Routes>
      <Route path='*' element={<Navigate to="/landingpage" /> } /> 
      <Route path='/login' />
      <Route path='/signup' />
      <Route path="/home" />
    </Routes>
    </>
  )
}

export default App
