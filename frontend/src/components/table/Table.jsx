// Import internal modules
import "./table.scss";

// Import external modules
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "@mui/material";

// Import temp data - later we will fetch data from backend
import { userColumns, userRows } from "../../datatableSource.js";
import { useState } from "react";


const Datatable = () => {

  // Capture data from userRows array  
  const [data, setData] = useState(userRows);

  // Handle delete request
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // Separate Delete and View options in the independent structure
  // Later we will concatonate them with other columns from the table
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/form/:123" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Delete form
        <Link to="/users/new" className="link">
          Delete
        </Link>
      </div>
      {/* Structure table with all neccessery data */}
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]} // Nums of rows per page
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;