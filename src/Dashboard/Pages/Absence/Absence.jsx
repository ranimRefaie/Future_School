import "../Students/Students";
import { useState } from "react";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { MdAdd } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const initialData = [
  {
    fullName: "Ahmad Rashad",
    absencePattern: "justified ",
    data: "15/1/2024",
  },
];
export const Absence = () => {
  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // State to manage form visibility
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editItemId, setEditItemId] = useState(null); // Store ID of item being edited
  const [formValues, setFormValues] = useState({
    fullName: "",
    absencePattern: "",
    data: "",
  });

  const handleAdd = () => {
    setData([...data, formValues]);
    setFormValues({
      fullName: "",
      absencePattern: "",
      data: "",
    });

    // Hide the add form
    setShowAddForm(false);
  };
  const handleEdit = (id) => {
    const studentToEdit = data.find((item) => item.id === id);

    if (studentToEdit) {
      setFormValues({
        fullName: studentToEdit.fullName,
        absencePattern: studentToEdit.absencePattern,
        data: studentToEdit.data,
      });

      setEditItemId(id); // Set the ID of the student being edited
      setShowEditForm(true); // Show edit form
    }
  };

  // Function to handle saving edits
  const handleSaveEdit = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === editItemId ? { ...item, ...formValues } : item
      )
    );

    setFormValues({
      fullName: "",
    });

    setShowEditForm(false); // Hide edit form
    setEditItemId(null); // Reset the edit item ID
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
            {/* Add button */}
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
                  <label htmlFor="fullName">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formValues.fullName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="group-input">
                  <label htmlFor="absencePattern">Absence Pattern</label>
                  <label>
                    <input
                      type="radio"
                      id="absencePattern"
                      name="absencePattern"
                      value={formValues.absencePattern}
                      onChange={handleInputChange}
                      checked
                    />
                    Justified
                  </label>
                  <label>
                    <input
                      type="radio"
                      id="absencePattern"
                      name="absencePattern"
                      value={formValues.absencePattern}
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
                    value={formValues.fullName}
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
                <td>{row.data}</td>
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
