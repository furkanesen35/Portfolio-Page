import './App.css';
import History from './components/History';
import Navbar from "./components/Navbar"

function App() {
 return (
  <div className="h-[1000vh] bg-gray-500">
   <Navbar/>
   <History/>
  </div>
 );
}

export default App;