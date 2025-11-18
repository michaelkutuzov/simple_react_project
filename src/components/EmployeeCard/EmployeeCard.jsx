import { Employee } from '../MainGrid'

const EmployeeCard: FC<Employee> = ({ img, name, surname, position }) => {
  return (
    <>
      <div>
        <img src={img} alt={`${name} ${surname}`}>
      </div>
      <div>
        {name}
      </div>
      <div>
        {surname}
      </div>
      <div>
        {position}
      </div>
    </>
  )
}

export default EmployeeCard
