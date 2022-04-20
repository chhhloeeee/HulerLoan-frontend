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
  console.log(data)
 
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
    return await fetch('http://localhost:8080/api/v1/equipment/' + equipmentID, {
      method: "DELETE"
    })
  }
 
  const deleteEquipment = (equipmentID) => {
    const array = [...equipmentList]
    for (let i = 0; i < array.length; i++) {
        if (equipmentID === array[i].equipmentID) {
            let promise = deleteEquipmentCall(equipmentID)
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
        <div className='child'><BinIcon onClick={() => deleteEquipment(service.equipmentID)}/></div>
      </div> 
      ]
    ))}
  />
  )
}

export default ListEquipment;