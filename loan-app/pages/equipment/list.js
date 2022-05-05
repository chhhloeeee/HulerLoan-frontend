import Button from "../../components/button";
import styles from "../../styles/form.module.css";
import Table from "../../components/table";
import { APILoader } from "../../components/api";
import { BinIcon, SearchIcon } from "../../components/icons";
import { useState } from "react";

function ListEquipment() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Equipment</h1>
      <APILoader
        url={"http://localhost:8080/api/v1/equipment"}
        Component={EquipmentTable}
      />
      <Button text="Cancel" href="/home" />
    </div>
  );
}

//USerTable function displays all equipment in a table
function EquipmentTable({ data }) {
  const [equipment, setEquipment] = useState(data);
  console.log(data);

  let equipmentList = equipment.sort((a, b) => {
    if (a.equipmentID < b.equipmentID) {
      return -1;
    }
    if (a.equipmentID > b.equipmentID) {
      return 1;
    }
    return 0;
  });
  const deleteEquipmentCall = async (equipmentID) => {
    return await fetch(
      "http://localhost:8080/api/v1/equipment/" + equipmentID,
      {
        method: "DELETE",
      }
    );
  };

  const deleteEquipment = (equipmentID) => {
    const array = [...equipmentList];
    for (let i = 0; i < array.length; i++) {
      if (equipmentID === array[i].equipmentID) {
        let promise = deleteEquipmentCall(equipmentID);
        promise
          .then((response) => {
            if (!response.ok) {
              alert("Something went wrong");
              return;
            }
            array.splice(i, 1);

            setEquipment(array);
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

  function SearchFunc() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("equipmentTBL");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  return (
    <>
      <input
        type="text"
        id="myInput"
        onKeyUp={SearchFunc}
        placeholder="Search for names.."
        className={styles.search}
      ></input>
      <Table
        id="equipmentTBL"
        headers={[
          "Equipment ID",
          "Category Name",
          "Specs Description",
          "Availability",
          "On Loan",
          "Action",
        ]}
        rows={equipmentList.map((service) => [
          service.equipmentID,
          service.categoryName,
          service.specsDescription,
          service.availability,
          service.onloan,
          <div className="parent inline-flex-parent">
            <div className="child">
              <BinIcon onClick={() => deleteEquipment(service.equipmentID)} />
            </div>
          </div>,
        ])}
      />
    </>
  );
}

export default ListEquipment;
