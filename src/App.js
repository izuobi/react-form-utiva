import "./App.css";
import { useState } from "react"

function App() {
  // ----------------State value
  const [form, setForm] = useState({
    name: "",
    email: "",
    description: "",
    country: "",
    gender: "",
    agree: true
  });

  /*onChange*/
  const onChange = (e) => {
    const { value, type, checked, name } = e.target
    setForm((state) => ({
      ...state,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const subMit = (e) => {
    //prevent the page from reloading
    e.preventDefault();

    console.log("form:", form)
  }

  return (
    <div className="wrapper">
      <div className="formImg">

      </div>
      <form>

        <div className="inputField">
          <h1>Register to order</h1>
          <div class="mb-3">
            <input type="name" onChange={onChange} name="name" value={form.name} class="form-control" id="exampleFormControlInput1" placeholder="Your name" />
          </div>
          <div class="mb-3">
            <input type="email" onChange={onChange} name="email" value={form.email} class="form-control" id="exampleFormControlInput1" placeholder="email" />
          </div>
          <div class="mb-3">
            <input type="description" onChange={onChange} name="description" value={form.description} class="form-control" id="exampleFormControlInput1" placeholder="description" />
          </div>

          <select class="form-select form-sel" onChange={onChange} name="country" value={form.country} aria-label="Default select example">
            <option selected="true" disabled="disabled" value="">Select Country</option>
            <option value="france">France</option>
            <option value="uk">United Kingdom</option>
            <option value="spain">Spain</option>
          </select>

          <div class="mb-3" >
            <div class="form-check form-check-inline">
              <label class="form-check-label" for="">Gender</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="gender" id="male" value="male" onChange={onChange} checked={form.gender === "male"} />
              <label class="form-check-label" for="">Male</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="gender" id="female" value="female" onChange={onChange} checked={form.gender === "female"} />
              <label class="form-check-label" for="">Female</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="gender" id="other" value="other" onChange={onChange} checked={form.gender === "other"} />
              <label class="form-check-label" for="">Other</label>
            </div>
          </div>
          <div class="mb-3">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="agree" value="agree" />
              <label class="form-check-label" for="">Agree</label>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button onClick={subMit} className="btn btn-lg btn-success">Submit</button>
        </div>
      </form >
    </div >
  );
}

export default App;
