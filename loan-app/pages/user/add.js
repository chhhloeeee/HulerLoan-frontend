import Link from 'next/link'

export default function AddUser() {
    return (
    <div className="App">
          <h1 className="title">
              Create User
          </h1>
          <div className='form'>
            <form action="" method="post">
            <FormElement for="name" text="Name" type="text" name="name" className="input-field" required></FormElement>
            <FormElement for="email" text="Email" type="text" name="email" className="input-field"required></FormElement>
            <FormElement for="admin" text="Admin?" type="checkbox" name="checkbox" className="checkbox"required></FormElement>
            <FormElement for="password" text="Password" type="password" name="password" className="input-field"required></FormElement>
            <label><span> </span><input type="submit" value="Submit" /></label>
            </form>
        </div> 
        <Button className="bttn" text="Back" onClick={() => navigate({ pathname: "/user"})}/>
        </div>
    )
  }