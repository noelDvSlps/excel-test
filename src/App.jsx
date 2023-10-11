import { useRef } from "react";
import "./App.css";
import { useDownloadExcel } from "react-export-table-to-excel";
import { Table } from "./components/Table";

function App() {
  const tableRef = useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "user_info",
    sheet: "userData",
  });
  const data = [
    {
      id: 1,
      name: "noel",
      email: "noel@gmail.com",
    },
    {
      id: 2,
      name: "noel",
      email: "noel@gmail.com",
    },
    {
      id: 3,
      name: "noel",
      email: "noel@gmail.com",
    },
  ];

  return (
    <div>
      <div className="App">
        <div className="container">
          <Table r={tableRef} />
        </div>
      </div>
      <button onClick={onDownload}>export</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dd) => {
            return (
              <tr key={dd.id}>
                <td>{dd.id}</td>
                <td>{dd.name}</td>
                <td>{dd.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
