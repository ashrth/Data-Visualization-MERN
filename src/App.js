import Home from './pages/dashboard/Home'
import BarChart from './components/Charts/BarChart';
import './App.css';
import Analytics from './pages/analytics/Analytics';
import DoughnutChart from './components/Charts/DoughnutChart';
import LineChart from './components/Charts/LineChart';
import PieChart from './components/Charts/PieChart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path='analytics' element={<Analytics/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
