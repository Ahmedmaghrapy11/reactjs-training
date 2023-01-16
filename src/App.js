import './App.css';
import Employee from './components/Employee';
import {useState} from "react";

function App() {
  const showEmployees = true;
  const [role, setRole] = useState();
  return (
    <div className="App">
      {showEmployees ? 
      <>
      <input type="text" onChange={(e) => {
        console.log(e.target.value);
        setRole(e.target.value);
      }}/>
      <Employee name="ahmad" role="Intern"/>
      <Employee name="hesham" role={role}/>
      </> : <p>you cannot see the employees</p>}
    </div>
  );
}

export default App;
