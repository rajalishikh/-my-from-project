import './App.css';
import ResubleCom from './Components/Resuable/ResubleCom';

function App() {
  const handleSignUPSubmit = data => {
    console.log('here is the data',data);
}
 
  const handleProfileUpdate = data => {
    console.log(data)
    
  }
  return (
    <>
      
      <h1 className='text-3xl bg-teal-800 text-white '>Vite + React</h1>
      {/* <FromSubmit></FromSubmit> */}
      {/* <StateFullFrom></StateFullFrom> */}
      {/* <NameRefer></NameRefer> */}
      <ResubleCom hadingName={'SignUP'} Submit={'Submit'} handleSubmit={handleSignUPSubmit}></ResubleCom>
      <ResubleCom hadingName={'Login'} Submit={'Update'} handleSubmit={handleProfileUpdate}></ResubleCom>
     
      
      
    </>
  )
}

export default App
