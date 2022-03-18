import Link from 'next/link'

export default function AddEquipment() {
    return (
    <div className="App">
          <h1 className="title">
              Add Equipment
            </h1>
            <div className='form'>
              <form action="" method="post">
              <label for="category"><span>Category <span className="required">*</span></span><select name="category" className="select-field">
                <option value="General Question">General</option>
                <option value="Advertise">Advertisement</option>
                <option value="Partnership">Partnership</option>
              </select></label>
              <label for="specs"><span>Specs <span class="required">*</span></span><select name="specs" className="select-field">
                <option value="General Question">General</option>
                <option value="Advertise">Advertisement</option>
                <option value="Partnership">Partnership</option>
              </select></label>
              <label><span> </span><input type="submit" value="Submit" /></label>
              </form>
            </div> 
            <Button className="bttn" text="Back" onClick={() => navigate({ pathname: "/equipment"})}/>
        </div>
    )
  }