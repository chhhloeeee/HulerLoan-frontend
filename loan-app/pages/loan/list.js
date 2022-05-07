import Button from "../../components/button";
import styles from "../../styles/form.module.css";
import Table from "../../components/table";
import { APILoader } from "../../components/api";
import { BinIcon, ReturnIcon } from "../../components/icons";
import { useState } from "react";
import { useRouter } from "next/router";

function ListLoan() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Loan</h1>
      <APILoader
        url={"http://localhost:8080/api/v1/loan"}
        Component={LoanTable}
      />
      <Button text="Cancel" href="/home" />
    </div>
  );
}

//USerTable function displays all equipment in a table
function LoanTable({ data }) {
  console.log(data);
  const [loan, setLoan] = useState(data);

  let loanList = loan.sort((a, b) => {
    if (a.loanID < b.loanID) {
      return -1;
    }
    if (a.loanID > b.loanID) {
      return 1;
    }
    return 0;
  });
  const deleteLoanCall = async (loanID) => {
    return await fetch("http://localhost:8080/api/v1/loan/" + loanID, {
      method: "DELETE",
    });
  };

  const deleteLoan = (loanID) => {
    const array = [...loanList];
    for (let i = 0; i < array.length; i++) {
      if (loanID === array[i].loanID) {
        let promise = deleteLoanCall(loanID);
        promise
          .then((response) => {
            if (!response.ok) {
              console.log(response);
              alert("Something went wrong");
              return;
            }
            array.splice(i, 1);

            setLoan(array);
            return;
          })
          .catch((error) => {
            console.log(error);
            alert("Internal Server Error");
            return;
          });
      }
    }
    return;
  };

  return (
    <Table
      headers={[
        "Loan ID",
        "User ID",
        "Equipment ID",
        "Issue Date",
        "Return Date",
        "Actions",
      ]}
      rows={loanList.map((service) => [
        service.loanID,
        service.userID,
        service.equipmentID,
        service.issuedate,
        service.returndate,
        <div className="parent inline-flex-parent">
          <div className="child">
            <ReturnIcon onClick={() => deleteLoan(service.loanID)} />
          </div>
        </div>,
      ])}
    />
  );
}

export default ListLoan;
