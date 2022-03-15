import Link from 'next/link'
import  FormElement  from "../../components/form";
import Button from '../../components/button'

export default function AddCategory() {
    return (
      <>
        <h1>Add Category</h1>
          <h2>
            <Link href="/home">
              <a>Back to home</a>
            </Link>
          </h2>
          <div className='form'>
            <form action="" method="post">
            <FormElement for="category" text="Category" type="text" name="category" className="input-field"required></FormElement>
            <FormElement for="active" text="Active?" type="checkbox" name="checkbox" className="checkbox"required></FormElement>
            <label><span> </span><input type="submit" value="Submit" /></label>
            </form>
          </div> 
            <Button className="bttn" text="Cancel" onClick={() => navigate({ pathname: "/category"})}/>
    </>
    )
  }
