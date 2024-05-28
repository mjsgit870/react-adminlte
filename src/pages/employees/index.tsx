import { useEffect, useState } from "react";
import ContentWrapper from "../../components/admin-layout/ContentWrapper";
import EmployeesTable, { EmployeeProps } from "./EmployeesTable";

export default function EmployeesPage() {
  const [loading, setLoading] = useState<boolean>(false)
  const [employees, setEmployees] = useState<EmployeeProps[]>([])

  const getEmployees = async (searchFilter?: string) => {
    setLoading(true)
    let employeesFiltered = [
      {
        id: 1, 
        nama_lengkap: 'Muhammad Julian Saputra', 
        email: 'saputraj870@gmail.com', 
        tanggal_lahir: '02/07/2002', 
        jenis_kelamin: 'Laki-laki' 
      },
      {
        id: 1, 
        nama_lengkap: 'Muhammad Julian Saputra', 
        email: 'saputraj870@gmail.com', 
        tanggal_lahir: '02/07/2002', 
        jenis_kelamin: 'Laki-laki' 
      },
    ]
    if (searchFilter) employeesFiltered = employeesFiltered.filter(employee => employee.nama_lengkap.indexOf(searchFilter) === -1)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setEmployees(employeesFiltered)
    setLoading(false)
  }
  
  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <ContentWrapper title="Karyawan">
      <EmployeesTable
        headerCard={<HeaderCard />} 
        data={employees}
        isLoading={loading}
      />
    </ContentWrapper>
  )
}

const HeaderCard = () => (
  <div className="card-tools mr-0">
    <button className="btn btn-warning"><span className="fad fa-plus-circle"></span> Tambah</button>
  </div>
)
