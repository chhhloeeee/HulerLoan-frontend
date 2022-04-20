import Button from "../../components/button";
import styles from '../../styles/form.module.css';
import Table from "../../components/table";
import { APILoader } from "../../components/api";
import { useAlert } from 'react-alert';
import {BinIcon} from "../../components/icons"
import {useState} from 'react';


function ListLoan() {
    return (
      <div className={styles.app}>
      <h1 className={styles.title}>Loan</h1>
      <APILoader
            url={'http://localhost:8080/api/v1/loan'}
            Component={
              LoanTable
            }
          />
      <Button text="Cancel" href="/home" />
    </div>
    )
  }

  //USerTable function displays all equipment in a table
function LoanTable({data}){
  console.log(data)
  //const alert = useAlert() 
  const [loan, setLoan] = useState(data)
 
  let loanList = loan.sort((a, b) => {
    if (a.loanID.toLowerCase() < b.loanID.toLowerCase()) {
      return -1;
    }
    if (a.loanID.toLowerCase() > b.loanID.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  const deleteUserCall = async (userID) => {
    return await fetch('https://maint.airsensa.tech/pulse/V01/deleteuser?wf_tkn=' + currentUser.token + '&userid=' + userID)
  }
 
  const deleteUser = (userID) => {
    const array = [...userList]
    for (let i = 0; i < array.length; i++) {
        if (userID === array[i].UserID) {
            let promise = deleteUserCall(userID)
            promise.then((response) => {
              if (!response.ok) {
                throw Error("Internal Server Error");
              }
              array.splice(i, 1)
        
              setLoan(array)
              return
            })
            .catch((error)=>{
              alert.show('Internal Server Error')
              return
            })
        }    
    }
    return
  }
  return (
  <Table
    headers={["Loan ID", "User ID", "Category ID", "Issue Date", "Return Date", "Days Elapsed", "Active?", "Actions"]}
    rows= {loanList.map((service)=> (
      [
        service.loanID,
        service.userID,
        service.categoryID,
        service.issueDate,
        service.returnDate,
        service.daysElapsed,
        service.active,
        <div className='parent inline-flex-parent'>
        <div className='child'><BinIcon onClick={() => deleteUser(service.UserID)}/></div>
      </div> 
      ]
    ))}
  />
  )
}

export default ListLoan;