import type { FC } from 'react';
import EmployeeCard from '../EmployeeCard/';

export type Employee = {
  img: string;
  name: string;
  surname: string;
  position: string;
};

interface MainGridProps {
  employees: Employee[];
}

const MainGrid: FC<MainGridProps> = ({ employees }) => {
  return (
    <>
      {employees.map((employee) => (
        <div key={employee.name + employee.position} className={'gridCell'}>
          <EmployeeCard {...employee} />
        </div>
      ))}
    </>
  );
};

export default MainGrid;
