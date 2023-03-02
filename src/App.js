import './App.css';
import Navbar from './Components/Navbar';
import Newsblock from './Components/Newsblock';


function App() {
  return (
    <div className='flex flex-col h-auto gap-y-1.5 '>
   <Navbar/>
   <h1 className='text-center text-2xl md:text-3xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-semibold  border-b-2 py-0.5 border-black'>Top Headlines</h1>
   <Newsblock/>
   <hr className='bg-black h-0.5 w-28 mx-auto mt-4' ></hr>
<div className='flex text-center mx-auto mb-6'>
  <h1 className='text-md'>Made by <br/><span className='text-lg font-semibold'>Akarsh Srivastava</span></h1>
</div>
   </div>
  );
}

export default App;
