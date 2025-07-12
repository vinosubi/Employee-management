import React from "react";
import { Employee } from "../types/Employee";

interface EmployeeCardProps {
  employee: Employee;
  onEdit: (employee: Employee) => void;
  onDelete: (id: number) => void;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  employee,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-64">
      <h3 className="text-lg font-bold">{`${employee.firstName} ${employee.lastName}`}</h3>
      <p className="text-gray-600">{employee.email}</p>
      <p className="text-gray-600">{employee.position}</p>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => onEdit(employee)}
          className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(employee.id!)}
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
