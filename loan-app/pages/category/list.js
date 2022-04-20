import Button from "../../components/button";
import styles from '../../styles/form.module.css';
import Table from "../../components/table";
import { APILoader } from "../../components/api";
import { useAlert } from 'react-alert';
import {BinIcon} from "../../components/icons"
import {useState} from 'react';


function ListCategory() {
    return (
      <div className={styles.app}>
      <h1 className={styles.title}>Category</h1>
      <APILoader
            url={'http://localhost:8080/api/v1/category'}
            Component={
              CategoryTable
            }
          />
      <Button text="Cancel" href="/home" />
    </div>
    )
  }

  //USerTable function displays all users in a table
function CategoryTable({data}){
  //const alert = useAlert() 
  const [category, setCategory] = useState(data)
 
  let categoryList = category.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  const deleteUserCall = async (userID) => {
    return await fetch('https://maint.airsensa.tech/pulse/V01/deleteuser?wf_tkn=' + currentUser.token + '&userid=' + userID)
  }
 
  const deleteUser = (userID) => {
    const array = [...categoryList]
    for (let i = 0; i < array.length; i++) {
        if (userID === array[i].UserID) {
            let promise = deleteUserCall(userID)
            promise.then((response) => {
              if (!response.ok) {
                throw Error("Internal Server Error");
              }
              array.splice(i, 1)
        
              setUsers(array)
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
    headers={["Category ID", "Name","Action"]}
    rows= {categoryList.map((service)=> (
      [
        service.id,
        service.name,
        <div className='parent inline-flex-parent'>
        <div className='child'><BinIcon onClick={() => deleteUser(service.UserID)}/></div>
      </div> 
      ]
    ))}
  />
  )
}

export default ListCategory;