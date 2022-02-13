import './App.css';
import EmployeeDetail from './pages/EmployeeDetails';
import EditEmployee from './pages/EditEmployee';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";


function App(props) {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<EmployeeDetail/>} />
        <Route exact path="/EditEmployee/editID/:id" element={<EditEmployee/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
