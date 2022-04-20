import Button from "../../components/button";
import styles from '../../styles/form.module.css';
import Table from "../../components/table";
import { APILoader } from "../../components/api";
import { useAlert } from 'react-alert';
import {BinIcon} from "../../components/icons"
import {useState} from 'react';


function ListEquipment() {
    return (
      <div className={styles.app}>
      <h1 className={styles.title}>Equipment</h1>
      <APILoader
            url={'http://localhost:8080/api/v1/equipment'}
            Component={
              EquipmentTable
            }
          />
      <Button text="Cancel" href="/home" />
    </div>
    )
  }

  //USerTable function displays all equipment in a table
function EquipmentTable({data}){
  //const alert = useAlert() 
  const [equipment, setEquipment] = useState(data)
 
  let equipmentList = equipment.sort((a, b) => {
    if (a.equipmentID.toLowerCase() < b.equipmentID.toLowerCase()) {
      return -1;
    }
    if (a.equipmentID.toLowerCase() > b.equipmentID.toLowerCase()) {
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
        
              setEquipment(array)
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
    headers={["Equipment ID", "Category ID", "Specs ID", "Availability", "Action"]}
    rows= {equipmentList.map((service)=> (
      [
        service.equipmentID,
        service.categoryID,
        service.specsID,
        service.availability,
        <div className='parent inline-flex-parent'>
        <div className='child'><BinIcon onClick={() => deleteUser(service.UserID)}/></div>
      </div> 
      ]
    ))}
  />
  )
}

export default ListEquipment;