import "../Students/Students";
import { useState } from "react";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { MdAdd } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

const initialData = [
  {
    id: "1",
    fullName: "Ahmad Rashad",
    quizName: "",
    subject: "",
    score: "",
    maxScore: "",
  },
];
export const Quizzes = () => {
  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editItemId, setEditItemId] = useState(null);
  const [formValues, setFormValues] = useState({
    id: "1",
    fullName: "Ahmad Rashad",
    quizName: "",
    subject: "",
    score: "",
    maxScore: "",
  });

  const handleAdd = () => {
    setData([...data, formValues]);
    setFormValues({
      id: "1",
      fullName: "Ahmad Rashad",
      quizName: "",
      subject: "",
      score: "",
      maxScore: "",
    });

    setShowAddForm(false);
  };
  const handleEdit = (id) => {
    const studentToEdit = data.find((item) => item.id === id);

    if (studentToEdit) {
      setFormValues({
        id: studentToEdit.id,
        fullName: studentToEdit.fullName,
        quizName: studentToEdit.quizName,
        subject: studentToEdit.subject,
        score: studentToEdit.score,
        maxScore: studentToEdit.maxScore,
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
      id: "1",
      fullName: "Ahmad Rashad",
      quizName: "",
      subject: "",
      score: "",
      maxScore: "",
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
            {selectedRows.length > 0 && (
              <button onClick={handleDelete} className="btn-del">
                <MdOutlineDelete size={25} />
              </button>
            )}
          </div>
        </div>
        {showAddForm && (
          <div className="popup-overlay">
            <PopUp
              fun={handleInputChange}
              value_1={formValues.fullName}
              value_2={formValues.quizName}
              value_3={formValues.subject}
              value_4={formValues.score}
              value_5={formValues.maxScore}
              click_1={handleAdd}
              click_2={() => setShowAddForm(false)}
            />
          </div>
        )}

        {showEditForm && (
          <div className="popup-overlay">
            <PopUp
              fun={handleInputChange}
              value_1={formValues.fullName}
              value_2={formValues.quizName}
              value_3={formValues.subject}
              value_4={formValues.score}
              value_5={formValues.maxScore}
              click_1={handleSaveEdit}
              click_2={() => setShowEditForm(false)}
            />
          </div>
        )}
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Full Name</th>
              <th>Quiz Name</th>
              <th>Subject</th>
              <th>Score</th>
              <th>Max Score</th>
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
                <td>{row.quizName}</td>
                <td>{row.subject}</td>
                <td>{row.score}</td>
                <td>{row.maxScore}</td>
              </tr>
            ))}
          </tbody>
        </table>

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

const PopUp = ({
  fun,
  value_1,
  value_2,
  value_3,
  value_4,
  value_5,
  click_1,
  click_2,
}) => {
  // const dataInput=[{id:1,name:'Full Name', nameInput:'fullName',type:'text',value:{value_1}},
  // {id:1,name:'Date', nameInput:'date',type:'date',value:{value_2}},
  // {id:1,name:'Absence Pattern', nameInput:'absencePattern',type:'radio',value:{value_3}}]
  return (
    <div className="popup-content">
      <form className="flex">
        <div className="group-input">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={value_1}
            onChange={fun}
          />
        </div>
        <div className="group-input">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={value_2}
            onChange={fun}
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
              checked={value_3}
              onChange={fun}
            />
            Justified
          </label>

          <label htmlFor="Unjustified">
            <input
              type="radio"
              id="Unjustified"
              name="absencePattern"
              value="Unjustified"
              checked={value_4}
              onChange={fun}
            />
            Unjustified
          </label>
        </div>
      </form>
      <div className="group-btn-form">
        <button className="btn-save" type="button" onClick={click_1}>
          Save
        </button>
        <button type="button" onClick={click_2}>
          Cancel
        </button>
      </div>
    </div>
  );
};
