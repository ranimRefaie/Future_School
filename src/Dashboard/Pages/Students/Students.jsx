import { useState } from "react";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import "./Students.css";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const initialData = [
  {
    id: 1,
    username: "ahmad1234",
    password: "20232023",
    fullName: "Ahmad Rashad",
    fatherName: "Sameer",
    motherName: "Lana",
    class: "first",
    sex: "male",
  },
];

const Students = () => {
  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(20);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleDelete = () => {
    setData(data.filter((item) => !selectedRows.includes(item.id)));
    setSelectedRows([]);
  };

  const handleEdit = (id) => {
    alert`(Edit record with ID: ${id})`;
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = data.filter((item) =>
    item.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div className="flex">
      <Sidebar />
      <div className="page-student">
        <h1>Future Typical School</h1>
        <div className="row-table flex">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearch}
          />

          <div>
            <span>
              Records {indexOfFirstRow + 1} to{" "}
              {Math.min(indexOfLastRow, filteredData.length)} of{" "}
              {filteredData.length}
            </span>
            <button onClick={() => alert("Add new record")}>Add Row</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>ID</th>
              <th>Username</th>
              <th>Password</th>
              <th>Full Name</th>
              <th>Father Name</th>
              <th>Mother Name</th>
              <th>Class</th>
              <th>Sex</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row) => (
              <tr key={row.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleSelectRow(row.id)}
                  />
                </td>
                <td>
                  <button onClick={() => handleEdit(row.id)}>Edit</button>
                </td>
                <td>{row.id}</td>
                <td>{row.username}</td>
                <td>{row.password}</td>
                <td>{row.fullName}</td>
                <td>{row.fatherName}</td>
                <td>{row.motherName}</td>
                <td>{row.class}</td>
                <td>{row.sex}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedRows.length > 0 && (
          <button onClick={handleDelete}>Delete Selected</button>
        )}
        <div className="row-table flex">
          <div className="group-btn-table flex">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              <GoArrowLeft />
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(
                    prev + 1,
                    Math.ceil(filteredData.length / rowsPerPage)
                  )
                )
              }
            >
              <GoArrowRight />
            </button>
          </div>
          <span>
            Page {currentPage} of {Math.ceil(filteredData.length / rowsPerPage)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Students;
