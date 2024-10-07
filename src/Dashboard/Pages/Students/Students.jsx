import { useState } from "react";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import "./Students.css";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { MdAdd } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

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

  // State to manage form visibility
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editItemId, setEditItemId] = useState(null); // Store ID of item being edited
  const [formValues, setFormValues] = useState({
    id: "",
    username: "",
    password: "",
    fullName: "",
    fatherName: "",
    motherName: "",
    class: "",
    sex: "",
  });

  const handleAdd = () => {
    // Validate the form values (you might want to add validation here)
    // ...

    // Add the new student to the data array
    setData([...data, formValues]);

    // Reset the form values
    setFormValues({
      id: "",
      username: "",
      password: "",
      fullName: "",
      fatherName: "",
      motherName: "",
      class: "",
      sex: "",
    });

    // Hide the add form
    setShowAddForm(false);
  };
  const handleEdit = (id) => {
    // Find the student to be edited
    const studentToEdit = data.find((item) => item.id === id);

    // Set the form values with existing data
    setFormValues({
      id: studentToEdit.id,
      username: studentToEdit.username,
      password: studentToEdit.password,
      fullName: studentToEdit.fullName,
      fatherName: studentToEdit.fatherName,
      motherName: studentToEdit.motherName,
      class: studentToEdit.class,
      sex: studentToEdit.sex,
    });

    // Set the edit item ID
    setEditItemId(id);

    // Show the edit form
    setShowEditForm(true);
  };

  // Function to handle saving edits
  const handleSaveEdit = () => {
    // Validate the form values (you might want to add validation here)
    // ...

    // Update the student in the data array
    setData((prevData) =>
      prevData.map((item) => (item.id === editItemId ? formValues : item))
    );

    // Reset the form values
    setFormValues({
      id: "",
      username: "",
      password: "",
      fullName: "",
      fatherName: "",
      motherName: "",
      class: "",
      sex: "",
    });

    // Hide the edit form
    setShowEditForm(false);

    // Reset the edit item ID
    setEditItemId(null);
  };

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  // ... rest of your code (handleSearch, handleSelectRow, handleDelete, etc.)

  // Calculate pagination data (you already have this)
  // ...

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
              {Math.min(indexOfLastRow, filteredData.length)} of{" "}
              {filteredData.length}
            </span>
            {/* Add button */}
            <button className="btn-tbl" onClick={() => setShowAddForm(true)}>
              <MdAdd /> Add
            </button>
          </div>
        </div>
        {showAddForm && (
          <div className="add-form">
            <h2>Add New Student</h2>
            <form>
              <div>
                <label htmlFor="id">ID:</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={formValues.id}
                  onChange={handleInputChange}
                />
              </div>
              {/* ... other form inputs for username, password, etc. */}
              <button type="button" onClick={handleAdd}>
                Save
              </button>
              <button type="button" onClick={() => setShowAddForm(false)}>
                Cancel
              </button>
            </form>
          </div>
        )}

        {/* Edit Form (conditionally rendered) */}
        {showEditForm && (
          <div className="edit-form">
            <h2>Edit Student</h2>
            <form>
              <div>
                <label htmlFor="id">ID:</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={formValues.id}
                  onChange={handleInputChange}
                  readOnly // Make ID readonly
                />
              </div>
              {/* ... other form inputs for username, password, etc. */}
              <button type="button" onClick={handleSaveEdit}>
                Save
              </button>
              <button type="button" onClick={() => setShowEditForm(false)}>
                Cancel
              </button>
            </form>
          </div>
        )}

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
                  <button
                    className="btn-tbl"
                    onClick={() => handleEdit(row.id)}
                  >
                    <FaRegEdit />
                  </button>
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

export default Students;
