import './App.css';
import Navbar from './Components/Navbar';
import Newsblock from './Components/Newsblock';


function App() {
  return (
    <div className='flex flex-col h-auto gap-y-1.5 '>
   <Navbar/>
   <h1 className='text-center text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold  border-b-2 py-0.5 border-black'>Top Headlines</h1>
   <Newsblock/>
   <h1  className='text-center text-xl mb-8 mt-3 font-semibold'>That's all, go to top</h1>
   </div>
  );
}

export default App;
