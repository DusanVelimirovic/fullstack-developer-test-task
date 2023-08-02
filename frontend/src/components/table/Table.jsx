// Import internal modules 
import "./table.scss";

// Import external modules
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "@mui/material";
import {
  useQuery
} from '@tanstack/react-query'


// Import temp data - later we will fetch data from backend
import { userColumns, userRows } from "../../datatableSource.js";
import { makeRequest } from '../../axios';



const Datatable = () => {

    // Fetch forms data from DB
    const { data } = useQuery(["forms"], () =>
    makeRequest.get("/forms").then((res) => {
         return (res.data);
    }));



  // Capture data from userRows array  
  const [inputs, setData] = useState(userRows);




  // Handle delete request
  const handleDelete = (id) => {
    setData(inputs.filter((item) => item.id !== id));
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
           
         
         <button className="deleteButton"
              onClick={() => handleDelete(params.row.id)}>
              Delete

         </button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">

        <button>
          Delete
        </button>


      </div>

      {/* Structure table with all neccessery data */}
      
      <DataGrid
        className="datagrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]} // Nums of rows per page
        checkboxSelection
        />
    </div>
  );
};

export default Datatable;