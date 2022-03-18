import Link from 'next/link'

export default function AddLoan() {
  var start = new Date()
  start.setDate(start.getDate() - 1)
  const [startDate, setStartDate] = useState(start);
  const [endDate, setEndDate] = useState(new Date());
    return (
    <div className="App">
          <h1 className="title">
              New Loan
          </h1>
            <div className='form'>
              <form action="" method="post">
              <FormElement for="id" text="ID" type="text" name="id" className="input-field" required></FormElement>
              <FormElement for="name" text="Name" type="text" name="name" className="input-field" required></FormElement>
              <label for="item"><span>Item <span className="required">*</span></span><select name="item" className="select-field">
                <option value="General Question">General</option>
                <option value="Advertise">Advertisement</option>
                <option value="Partnership">Partnership</option>
              </select></label>
              <label for="from"><span>From<span className="required">*</span></span></label>
              <DatePicker selected={startDate} name="from" className="input-field date" onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy"/>
              <label for="to"><span>To<span className="required">*</span></span></label>
              <DatePicker selected={endDate} name="from" className="input-field date" onChange={(date) => setEndDate(date)} dateFormat="dd/MM/yyyy"/>
              <label><span> </span><input type="submit" value="Submit" /></label>
              </form>
            </div> 
            <Button className="bttn" text="Back" onClick={() => navigate({ pathname: "/loan"})}/>
        </div>
    )
  }