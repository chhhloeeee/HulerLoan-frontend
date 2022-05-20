import Button from "../../components/button";
import styles from "../../styles/form.module.css";
import Table from "../../components/table";
import { APILoader } from "../../components/api";
import { BinIcon, ItemIcon } from "../../components/icons";
import { useState } from "react";

function ListCategory() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Category</h1>
      <APILoader
        url={"http://localhost:8080/api/v1/category"}
        Component={CategoryTable}
      />
      <Button text="Cancel" href="/home" />
    </div>
  );
}

//USerTable function displays all equipment in a table
function CategoryTable({ data }) {
  const [category, setCategory] = useState(data);
  console.log(data);

  let categoryList = category.sort((a, b) => {
    if (a.categoryID < b.categoryID) {
      return -1;
    }
    if (a.categoryID > b.categoryID) {
      return 1;
    }
    return 0;
  });
  const deleteCategoryCall = async (categoryID) => {
    return await fetch("http://localhost:8080/api/v1/category/" + categoryID, {
      method: "DELETE",
    });
  };

  const deleteCategory = (categoryID) => {
    const array = [...categoryList];
    for (let i = 0; i < array.length; i++) {
      if (categoryID === array[i].categoryID) {
        let promise = deleteCategoryCall(categoryID);
        promise
          .then((response) => {
            if (!response.ok) {
              alert("Something went wrong");
              return;
            }
            alert("Delete Success");
            array.splice(i, 1);

            setCategory(array);
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
      headers={["Category ID", "Name", "Action", "Image"]}
      rows={categoryList.map((service) => [
        service.categoryID,
        service.name,
        <div className="parent inline-flex-parent">
          <div className="child">
            <BinIcon onClick={() => deleteCategory(service.categoryID)} />
          </div>
        </div>,
        <div className="parent inline-flex-parent">
          <ItemIcon name={service.name} />
        </div>,
      ])}
    />
  );
}

export default ListCategory;
