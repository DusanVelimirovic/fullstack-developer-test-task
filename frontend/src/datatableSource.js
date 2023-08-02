// Temporary file

// Define table columns
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "formName",
    headerName: "Form name",
    width: 250,
  },
  {
    field: "status",
    headerName: "Form status",
    width: 160,

    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.formStatus}`}>
          {params.row.formStatus}
        </div>
      );
    },
  },
];

// temporary data
// Later we will catch this data from backend
export const userRows = [
  {
    id: 1,
    name: " John C",
    email: "john@gmail.com",
    phone: "+381612223334",
    formName: "E0 Nurse Aid Training Program",
    status: "active",
  },
  {
    id: 2,
    name: " John C",
    email: "john@gmail.com",
    phone: "+381612223334",
    formName: "E0 Nurse Aid Training Program",
    status: "active",
  },
  {
    id: 3,
    name: " John C",
    email: "john@gmail.com",
    phone: "+381612223334",
    formName: "E0 Nurse Aid Training Program",
    status: "active",
  },
  {
    id: 4,
    name: " John C",
    email: "john@gmail.com",
    phone: "+381612223334",
    formName: "E0 Nurse Aid Training Program",
    status: "active",
  },
  {
    id: 5,
    name: " John C",
    email: "john@gmail.com",
    phone: "+381612223334",
    formName: "E0 Nurse Aid Training Program",
    status: "active",
  },
];
