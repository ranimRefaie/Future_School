import "../Students/Students";
import { useState } from "react";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { MdAdd } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const initialData = [
  {
    id: "1",
    fullName: "Ahmad Rashad",
    absencePattern: "justified ",
    date: "2024-10-01",
  },
];
export const Absence = () => {
  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editItemId, setEditItemId] = useState(null);
  const [formValues, setFormValues] = useState({
    id: "",
    fullName: "",
    absencePattern: "Justified",
    date: "",
  });

  const handleAdd = () => {
    setData([...data, formValues]);
    setFormValues({
      id: "",
      fullName: "",
      absencePattern: "Justified",
      date: "",
    });

    setShowAddForm(false);
  };
  const handleEdit = (id) => {
    const studentToEdit = data.find((item) => item.id === id);

    if (studentToEdit) {
      setFormValues({
        fullName: studentToEdit.fullName,
        absencePattern: studentToEdit.absencePattern,
        date: studentToEdit.data,
      });

      setEditItemId(id);
      setShowEditForm(true);
    }
  };

  const handleSaveEdit = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === editItemId ? { ...item, ...formValues } : item
      )
    );

    setFormValues({
      id: "",
      fullName: "",
      absencePattern: "",
      date: "",
    });

    setShowEditForm(false);
    setEditItemId(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleDelete = () => {
    setData(data.filter((item) => !selectedRows.includes(item.id)));
    setSelectedRows([]);
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
            className="input-search"
          />

          <div className=" flex item-center" style={{ gap: "10px" }}>
            <span>
              Records {indexOfFirstRow + 1} to{" "}
              {Math.min(indexOfLastRow, filteredData.length)} of
              {filteredData.length}
            </span>
            <button className="btn-tbl" onClick={() => setShowAddForm(true)}>
              <MdAdd /> Add
            </button>
          </div>
        </div>
        {showAddForm && (
          <div className="popup-overlay">
            <div className="popup-content">
              <form className="flex">
                <div className="group-input">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formValues.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="group-input">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formValues.date}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="group-input">
                  <label htmlFor="absencePattern">Absence Pattern</label>
                  <label htmlFor="Justified">
                    <input
                      type="radio"
                      id="Justified"
                      name="absencePattern"
                      value="Justified"
                      checked={formValues.absencePattern === "Justified"}
                      onChange={handleInputChange}
                    />
                    Justified
                  </label>

                  <label htmlFor="Unjustified">
                    <input
                      type="radio"
                      id="Unjustified"
                      name="absencePattern"
                      value="Unjustified"
                      checked={formValues.absencePattern === "Unjustified"}
                      onChange={handleInputChange}
                    />
                    Unjustified
                  </label>
                </div>
              </form>
              <div className="group-btn-form">
                <button className="btn-save" type="button" onClick={handleAdd}>
                  Save
                </button>
                <button type="button" onClick={() => setShowAddForm(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {showEditForm && (
          <div className="popup-overlay">
            <div className="popup-content">
              <form className="flex">
                <div className="group-input">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formValues.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="group-input">
                  <label htmlFor="fullName">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formValues.date}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="group-input">
                  <label htmlFor="fullName">Absence Pattern</label>
                  <input
                    type="radio"
                    id="absencePattern"
                    name="absencePattern"
                    value={formValues.fullName}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
              <div className="group-btn-form">
                <button
                  className="btn-save"
                  type="button"
                  onClick={handleSaveEdit}
                >
                  Update
                </button>
                <button type="button" onClick={() => setShowEditForm(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Full Name</th>
              <th>Date</th>
              <th>Absence Pattern</th>
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
                  <button
                    className="btn-tbl"
                    onClick={() => handleEdit(row.id)}
                  >
                    <FaRegEdit />
                  </button>
                </td>
                <td>{row.fullName}</td>
                <td>{row.date}</td>
                <td>{row.absencePattern}</td>
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
              className="btn-tbl"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              <GoArrowLeft />
            </button>
            <button
              className="btn-tbl"
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
