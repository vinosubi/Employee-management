import React, { useState, useEffect } from "react";
import { Employee } from "../types/Employee";
import { getEmployees, deleteEmployee } from "../services/api";
import EmployeeForm from "./EmployeeForm";
import EmployeeCard from "./EmployeeCard";

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee | undefined
  >(undefined);
  const [showForm, setShowForm] = useState(false);

  const fetchEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleEdit = (employee: Employee) => {
    setSelectedEmployee(employee);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    await deleteEmployee(id);
    fetchEmployees();
  };

  const handleSave = () => {
    setShowForm(false);
    setSelectedEmployee(undefined);
    fetchEmployees();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Employee Management
      </h1>
      <button
        onClick={() => setShowForm(true)}
        className="mb-4 bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Add Employee
      </button>
      {showForm && (
        <EmployeeForm employee={selectedEmployee} onSave={handleSave} />
      )}
      <div className="flex flex-wrap gap-4">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
