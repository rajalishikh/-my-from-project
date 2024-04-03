import './App.css';
import Grandpa from './Components/Grandpa/Grandpa';

function App() {
//   const handleSignUPSubmit = data => {
//     console.log('here is the data',data);
// }
 
//   const handleProfileUpdate = data => {
//     console.log(data)
    
//   }
  return (
    <>
      
      <h1 className='text-3xl bg-teal-800 text-white text-center '>Form Master </h1>
      {/* <FromSubmit></FromSubmit> */}
      {/* <StateFullFrom></StateFullFrom> */}
      {/* <NameRefer></NameRefer> */}
      {/* <ResubleCom hadingName={'SignUP'} Submit={'Submit'} handleSubmit={handleSignUPSubmit}></ResubleCom>
      <ResubleCom hadingName={'Login'} Submit={'Update'} handleSubmit={handleProfileUpdate}></ResubleCom> */}
     <Grandpa></Grandpa>
      
      
    </>
  )
}

export default App
