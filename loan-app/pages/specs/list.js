import Button from "../../components/button";
import styles from "../../styles/form.module.css";
import Table from "../../components/table";
import { APILoader } from "../../components/api";
import { BinIcon } from "../../components/icons";
import { useState } from "react";

function ListSpecs() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Specs</h1>
      <APILoader
        url={"http://localhost:8080/api/v1/specs"}
        Component={SpecsTable}
      />
      <Button text="Cancel" href="/home" />
    </div>
  );
}

//USerTable function displays all specs in a table
function SpecsTable({ data }) {
  const [specs, setSpecs] = useState(data);
  console.log(data);

  let specsList = specs.sort((a, b) => {
    if (a.specsID < b.specsID) {
      return -1;
    }
    if (a.specsID > b.specsID) {
      return 1;
    }
    return 0;
  });
  const deleteSpecsCall = async (specsID) => {
    return await fetch("http://localhost:8080/api/v1/specs/" + specsID, {
      method: "DELETE",
    });
  };

  const deleteSpecs = (specsID) => {
    const array = [...specsList];
    for (let i = 0; i < array.length; i++) {
      if (specsID === array[i].specsID) {
        let promise = deleteSpecsCall(specsID);
        promise
          .then((response) => {
            if (!response.ok) {
              alert("Something went wrong");
            }
            array.splice(i, 1);

            setSpecs(array);
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
      headers={["Specs ID", "CategoryID", "Description", "Action"]}
      rows={specsList.map((service) => [
        service.specsID,
        service.categoryID,
        service.description,
        <div className="parent inline-flex-parent">
          <div className="child">
            <BinIcon onClick={() => deleteSpecs(service.specsID)} />
          </div>
        </div>,
      ])}
    />
  );
}

export default ListSpecs;
