import './index.css';
import Employee from './components/Employee';
import {useState} from "react";
import {v4 as uuidv4} from "uuid";

function App() {
  const showEmployees = true;
  const [role, setRole] = useState();
  const [employees, setEmployees] = useState(
    [
      {id: 1, name:"ahmad", role:"developer", img: "https://st3.depositphotos.com/5392356/13702/i/1600/depositphotos_137026300-stock-photo-programmer-working-in-a-software.jpg"},
      {id: 2, name:"hesham", role:"doctor", img: "https://st3.depositphotos.com/5392356/13702/i/1600/depositphotos_137026300-stock-photo-programmer-working-in-a-software.jpg"},
      {id: 3, name:"mohammed", role:"hr", img: "https://st3.depositphotos.com/5392356/13702/i/1600/depositphotos_137026300-stock-photo-programmer-working-in-a-software.jpg"},
      {id: 4, name:"fatma", role:"developer", img: "https://st3.depositphotos.com/5392356/13702/i/1600/depositphotos_137026300-stock-photo-programmer-working-in-a-software.jpg"},
      {id: 5, name:"khaled", role:"dentist", img: "https://st3.depositphotos.com/5392356/13702/i/1600/depositphotos_137026300-stock-photo-programmer-working-in-a-software.jpg"},
      {id: 6, name:"porto", role:"engineer", img: "https://st3.depositphotos.com/5392356/13702/i/1600/depositphotos_137026300-stock-photo-programmer-working-in-a-software.jpg"},
      {id: 7, name:"mostufa", role:"doctor", img: "https://st3.depositphotos.com/5392356/13702/i/1600/depositphotos_137026300-stock-photo-programmer-working-in-a-software.jpg"},
      {id: 8, name:"dina", role:"product designer", img: "https://st3.depositphotos.com/5392356/13702/i/1600/depositphotos_137026300-stock-photo-programmer-working-in-a-software.jpg"}
    ]
  );
  return (
    <div className="App">
      {showEmployees ? 
      <>
      <input type="text" onChange={(e) => {
        console.log(e.target.value);
        setRole(e.target.value);
      }}/>
      <div className="flex flex-wrap">
        {employees.map((employee) => {
          return(<Employee key={uuidv4()} name={employee.name} role={employee.role} img={employee.img}/>);
        })}
      </div>
      </> : <p>you cannot see the employees</p>}
    </div>
  );
}

export default App;
