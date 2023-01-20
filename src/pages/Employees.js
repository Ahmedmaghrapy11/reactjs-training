import '../index.css';
import Employee from '../components/Employee';
import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import Header from '../components/Header';

function Employees() {
  const showEmployees = true;
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
    function updateEmployee(id, newName, newRole) {
      const updatedEmployees = employees.map((employee) => {
        if(id === employee.id) {
          return {...employee, name: newName, role:newRole};
        }
        return employee;
      });
      setEmployees(updatedEmployees);
    }
    function newEmployee(name, role, img) {
      const newEmployee = {
        id: uuidv4(),
        name: name,
        role: role,
        img: img
      }
      setEmployees([...employees, newEmployee]);
    }
  return (
    <div className="App bg-gray-300 min-h-screen">
      {showEmployees ? 
      <>
      <div className="flex flex-wrap justify-center">
        {employees.map((employee) => {
          const editEmployee = <EditEmployee 
          id={employee.id}
          name={employee.name} 
          role={employee.role} 
          updateEmployee={updateEmployee}/>
          return(<Employee 
            key={employee.id} 
            id={employee.id}
            name={employee.name} 
            role={employee.role} 
            img={employee.img} 
            editEmployee={editEmployee}/>);
        })}
      </div>
      <AddEmployee newEmployee = {newEmployee}/>
      </> : <p>you cannot see the employees</p>}
    </div>
  );
}

export default Employees;
