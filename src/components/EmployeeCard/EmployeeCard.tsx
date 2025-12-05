import type { FC } from 'react';
import type { Employee } from '../MainGrid';

const EmployeeCard: FC<Employee> = ({ img, name, surname, position }) => {
  return (
    <section className="">
      <div>
        <img src={img} alt={`Portrait of ${name} ${surname}`} />
      </div>
      <div>{name}</div>
      <div>{surname}</div>
      <div>{position}</div>
    </section>
  );
};

export default EmployeeCard;
