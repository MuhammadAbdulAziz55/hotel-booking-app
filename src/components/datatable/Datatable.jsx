import React, { useEffect, useState } from "react";
import { userColumns, userRows } from "../../dataTableSource";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Datatable = ({ columns }) => {
  // const [data, setData] = useState(userRows);
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState();
  const { data, loading, error } = useFetch(
    `http://localhost:8800/api/${path}`
  );

  console.log(data);
  console.log("list", list);
  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/api/${path}/${id}`);
      const updatedData = list.filter((item) => item._id === id);
      setList(updatedData);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {}
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
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
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      {loading
        ? "loading"
        : list && (
            <DataGrid
              className="datagrid"
              rows={list}
              columns={columns.concat(actionColumn)}
              {...list}
              initialState={{
                ...list.initialState,
                pagination: { paginationModel: { pageSize: 10 } },
              }}
              pageSizeOptions={[5, 10, 25]}
              checkboxSelection
              getRowId={(row) => row._id}
            />
          )}
    </div>
  );
};

export default Datatable;

// import "./datatable.scss";
// import { DataGrid } from "@mui/x-data-grid";

// import { Link, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import useFetch from "../../hooks/useFetch";
// import axios from "axios";

// const Datatable = ({ columns }) => {
//   const location = useLocation();
//   const path = location.pathname.split("/")[1];
//   console.log("path", path);

//   // console.log("list", list);
//   const { data, loading } = useFetch(`http://localhost:8800/api/${path}`);
//   console.log("data", data);
//   const [list, setList] = useState();
//   useEffect(() => {
//     setList(data);
//   }, [data]);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8800/api/${path}/${id}`);
//       setList(list.filter((item) => item._id !== id));
//     } catch (err) {}
//   };

//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <Link to="/users/test" style={{ textDecoration: "none" }}>
//               <div className="viewButton">View</div>
//             </Link>
//             <div
//               className="deleteButton"
//               onClick={() => handleDelete(params.row._id)}
//             >
//               Delete
//             </div>
//           </div>
//         );
//       },
//     },
//   ];
//   return (
//     <div className="datatable">
//       <div className="datatableTitle">
//         {path}
//         <Link to={`/${path}/new`} className="link">
//           Add New
//         </Link>
//       </div>
//       <DataGrid
//         className="datagrid"
//         rows={list}
//         columns={columns.concat(actionColumn)}
//         {...data}
//         initialState={{
//           ...data.initialState,
//           pagination: { paginationModel: { pageSize: 10 } },
//         }}
//         pageSizeOptions={[5, 10, 25]}
//         checkboxSelection
//         getRowId={(row) => row._id}
//       />
//     </div>
//   );
// };

// export default Datatable;
