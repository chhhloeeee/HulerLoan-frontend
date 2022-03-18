import Link from 'next/link'

export default function AddReturn() {
  let navigate = useNavigate(); 
  var start = new Date()
  start.setDate(start.getDate() - 1)
  const [startDate, setStartDate] = useState(start);
    return (
    <div className="App">
          <h1 className="title">
              Create Return
            </h1>
            <div className='form'>
            <form action="" method="post">
            <FormElement for="id" text="User ID" type="text" name="id" className="input-field" required></FormElement>
            <FormElement for="name" text="Name" type="text" name="name" className="input-field"required></FormElement>
            <label for="item"><span>Item <span class="required">*</span></span><select name="item" className="select-field">
                <option value="General Question">General</option>
                <option value="Advertise">Advertisement</option>
                <option value="Partnership">Partnership</option>
              </select></label>
              <label for="return"><span>Return Date<span className="required">*</span></span></label>
              <DatePicker selected={startDate} name="return" className="input-field date" onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy"/>
            <FormElement for="days" text="Days Elapsed" type="text" name="days" className="input-field"required></FormElement>
            <label><span> </span><input type="submit" value="Submit" /></label>
            </form>
        </div> 
        <Button className="bttn" text="Back" onClick={() => navigate({ pathname: "/return"})}/>
        </div>
  
    )
  }