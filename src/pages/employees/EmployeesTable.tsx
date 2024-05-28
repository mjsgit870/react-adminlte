export type EmployeeProps = {
  id: number,
  nama_lengkap: string,
  tanggal_lahir: string,
  jenis_kelamin: string,
  email: string
}

interface EmployeesTableProps {
  data: EmployeeProps[],
  headerCard?: React.ReactNode,
  isLoading?: boolean
}

export default function EmployeesTable({
  data,
  headerCard,
  isLoading = false
}: EmployeesTableProps) {
  return (
    <div className="card">
      <div className="card-header">{headerCard}</div>
      <div className="card-body">
        <div className="mb-3 row">
          <div className="col-md-6">
            <select className="custom-select" style={{ width: 'auto' }}>
              <option selected>10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="all">All</option>
            </select>
          </div>
          <div className="col-md-6">
            <div className="input-group float-right" style={{ maxWidth: '300px' }}>
              <input type="text" className="form-control" />
              <div className="input-group-append">
                <button className="btn btn-primary">
                  <i className="fas fa-search"></i> Cari
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered text-nowrap">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Email</th>
                <th>Tanggal Lahir</th>
                <th>Jenis Kelamin</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {TableBody(isLoading, data)}
            </tbody>
          </table>
        </div>
      </div>
      <div className="card-footer clearfix">
        <Pagination />
      </div>
    </div>
  )
}

const TableBody = (isLoading: boolean, data: EmployeeProps[]) => {
  if (isLoading) {
    return <LoaderComponent />
  }

  return (
    data.length === 0 ? (
      <tr><td colSpan={5} className="text-center">Tidak ada data</td></tr>
    ) : data.map((item, index) => (
      <tr key={index}>
        <td className="align-middle">{item.nama_lengkap}</td>
        <td className="align-middle">{item.email}</td>
        <td className="align-middle">{item.tanggal_lahir}</td>
        <td className="align-middle">{item.jenis_kelamin}</td>
        <td className="align-middle">
          <button className="btn btn-sm btn-info">Edit</button>
          <button className="btn btn-sm btn-danger ml-1">Hapus</button>
        </td>
      </tr>
    ))
  )
}


const LoaderComponent = () => (
  <tr>
    <td colSpan={5} className="text-center py-5">
      <span className="fas fa-spinner fa-spin" style={{ fontSize: '2rem' }}></span>
    </td>
  </tr>
)

const Pagination = () => (
  <ul className="pagination m-0">
    <li className="page-item">
      <a className="page-link text-white" href="#">«</a>
    </li>
    <li className="page-item active">
      <a className="page-link text-white" href="#">1</a>
    </li>
    <li className="page-item">
      <a className="page-link text-white" href="#">2</a>
    </li>
    <li className="page-item">
      <a className="page-link text-white" href="#">3</a>
    </li>
    <li className="page-item">
      <a className="page-link text-white" href="#">»</a>
    </li>
  </ul>
)
