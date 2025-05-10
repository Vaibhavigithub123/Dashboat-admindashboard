import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userData as initialData } from "../../data/data";
import css from "./Users.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState(initialData);

  const handleDelete = (id) => {
    const updatedUsers = users.filter((_, index) => index + 1 !== id);
    setUsers(updatedUsers);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "username", headerName: "Username", width: 170 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "profit", headerName: "Profit ($)", width: 130 },
    { field: "status", headerName: "Status", width: 140 },
    {
      field: "image",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return params.value ? (
          <img src={params.value} alt="User Avatar" className={css.avatar} />
        ) : (
          "-"
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return (
          <div className={css.actionBtns}>
            <Link to={"/user/" + params.row.id}>
              <button className={css.userListEdit}>Edit</button>
            </Link>
            <AiOutlineDelete
              className={css.userListDelete}
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  const rows = users.map((user, index) => ({
    id: index + 1,
    username: user.name.firstName,
    email: user.name.email || "-",
    image: user.name.image ? String(user.name.image) : null, // Ensuring it's a string as MUI takes everything as a text
    profit: user.profit || "-",
    status: user.name.status || "-",
  }));

  return (
    <div className={css.userTablelists}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          color: "white",
          ".MuiDataGrid-container--top [role=row]": {
            background: "transparent",
            "& .MuiCheckbox-root svg": {
              fill: "white",
            },
          },
        }}
      />
    </div>
  );
};

export default Users;
