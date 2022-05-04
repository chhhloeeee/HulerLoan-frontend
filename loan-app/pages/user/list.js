import Button from "../../components/button";
import styles from "../../styles/form.module.css";
import Table from "../../components/table";
import { APILoader } from "../../components/api";
import { BinIcon } from "../../components/icons";
import { useState } from "react";

function ListUsers() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Users</h1>
      <APILoader
        url={"http://localhost:8080/api/v1/users"}
        Component={UsersTable}
      />
      <Button text="Cancel" href="/home" />
    </div>
  );
}

//USerTable function displays all users in a table
function UsersTable({ data }) {
  const [users, setUsers] = useState(data);
  console.log(data);

  let userList = users.sort((a, b) => {
    if (a.userID < b.userID) {
      return -1;
    }
    if (a.userID > b.userID) {
      return 1;
    }
    return 0;
  });
  const deleteUserCall = async (userID) => {
    return await fetch("http://localhost:8080/api/v1/users/" + userID, {
      method: "DELETE",
    });
  };

  const deleteUser = (userID) => {
    const array = [...userList];
    for (let i = 0; i < array.length; i++) {
      if (userID === array[i].userID) {
        let promise = deleteUserCall(userID);
        promise
          .then((response) => {
            if (!response.ok) {
              alert("Something went wrong");
              return;
            }
            array.splice(i, 1);

            setUsers(array);
            return;
          })
          .catch((error) => {
            alert("Internal Server Error");
            return;
          });
      }
    }
    return;
  };
  return (
    <Table
      headers={["User ID", "Name", "Admin?", "Email", "Action"]}
      rows={userList.map((service) => [
        service.userID,
        service.name,
        service.admin.toString(),
        service.email,
        <div className="parent inline-flex-parent">
          <div className="child">
            <BinIcon onClick={() => deleteUser(service.userID)} />
          </div>
        </div>,
      ])}
    />
  );
}

export default ListUsers;
