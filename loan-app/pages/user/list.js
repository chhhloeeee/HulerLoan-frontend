import Button from "../../components/button";
import styles from '../../styles/form.module.css';
import Table from "../../components/table";



const ListUsers = ({ user }) => {
  const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const [responseUser, setResponseUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(USER_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [user, responseUser]);

  const deleteUser = (e, id) => {
    e.preventDefault();
    fetch(USER_API_BASE_URL + "/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (users) {
        setUsers((prevElement) => {
          return prevElement.filter((user) => user.id !== id);
        });
      }
    });
  };

  const editUser = (e, id) => {
    e.preventDefault();
    setUserId(id);
  };

  //USerTable function displays all users in a table
function UsersTable({data}){
  //const alert = useAlert() 
 // const [users, setUsers] = useState(data)
 
  let userList = users.sort((a, b) => {
    if (a.UserID.toLowerCase() < b.UserID.toLowerCase()) {
      return -1;
    }
    if (a.UserID.toLowerCase() > b.UserID.toLowerCase()) {
      return 1;
    }
    return 0;
  });
 
  // const deleteUserCall = async (userID) => {
  //   return await fetch('https://maint.airsensa.tech/pulse/V01/deleteuser?wf_tkn=' + currentUser.token + '&userid=' + userID)
  // }
 
  // const deleteUser = (userID) => {
  //   const array = [...userList]
  //   for (let i = 0; i < array.length; i++) {
  //       if (userID === array[i].UserID) {
  //           let promise = deleteUserCall(userID)
  //           promise.then((response) => {
  //             if (!response.ok) {
  //               throw Error("Internal Server Error");
  //             }
  //             array.splice(i, 1)
        
  //             setUsers(array)
  //             return
  //           })
  //           .catch((error)=>{
  //             alert.show('Internal Server Error')
  //             return
  //           })
  //       }    
  //   }
  //   return
  // }
  return (
  <Table
    headers={["User ID", "Name", "Admin?", "Email"]}
    rows= {userList.map((service)=> (
      [
        service.UserID,
        service.Name,
        service.Admin.toString(),
        service.Email,
        <div className='parent inline-flex-parent'>
      </div> 
      ]
    ))}
  />
  )
}

export default ListUsers;