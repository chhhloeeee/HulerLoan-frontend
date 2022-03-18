export default function AddUser() {
    return (
    <div className="App">
          <h1 className="title">
              Create User
          </h1>
          <div className='form'>
            <form action="" method="post">
            <FormElement for="name" text="Name" type="text" name="name" className="inputField" required></FormElement>
            <FormElement for="email" text="Email" type="text" name="email" className="inputField"required></FormElement>
            <FormElement for="admin" text="Admin?" type="checkbox" name="checkbox" className="checkbox"required></FormElement>
            <FormElement for="password" text="Password" type="password" name="password" className="inputField"required></FormElement>
            <label><span> </span><input type="submit" value="Submit" /></label>
            </form>
        </div> 
        <Button
        text="Cancel"
        href="/home"
      />
        </div>
    )
  }