import { FC } from 'react'

export type Employee = {
  img: string,
  name: string,
  surname: string,
  position: string,
}

interface MainGridProps {
  employees: Employee[]
}

const MainGrid: FC<MainGridProps> = ({ employees }) => {
  return (
    <>
      {employees.map(employee => <div className={"gridCell"}><EmployeeCard {...employee} /></div>)}
    </>
  )
}

export default MainGrid 
