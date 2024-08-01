import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  // State to hold fetched data from API
  const [data, setData] = useState([]);
  // State to handle input values from the form
  const [input, setInput] = useState({});

  // Function to fetch data from the API
  const getdata = () => {
    axios
      .get(`http://localhost:3001/user`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Handler to update input state on form field change
  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Handler to submit form data to the API
  const submitHandler = () => {
    axios.post(`http://localhost:3001/user`, input);
  };

  /*
   * useEffect to fetch data when component mounts or data state changes
   * This effect runs the getdata function every time the `data` state changes,
   * which can cause an infinite loop. Ideally, the dependency should be an empty array `[]`
   * to run the effect only once on mount.
   */
  useEffect(() => {
    getdata();
  }, [data]);

  return (
    <div>
      {/* Form for user input */}
      <form
        className="row g-3 w-50 mt-5 d-flex mx-auto text-light needs-validation bg-img"
        novalidate
      >
        <div>
          <label className="form-label">First name</label>
          <input
            type="text"
            placeholder="firstname"
            minlength="2"
            maxlength="8"
            className=" form-control"
            name="fname"
            value={input.fname}
            onChange={inputHandler}
          ></input>
        </div>
        <div>
          <label className="form-label">Last name</label>
          <input
            type="text"
            className="form-control"
            minlength="2"
            maxlength="8"
            value={input.lname}
            onChange={inputHandler}
            name="lname"
          ></input>
        </div>
        <div>
          <label for="validationCustomUsername" className="form-label">
            Password
          </label>
          <div className="input-group has-validation">
            <input
              type="password"
              id="password"
              name="pass"
              value={input.pass}
              className="form-control"
              onChange={inputHandler}
              minlength="2"
              maxlength="8"
              required
            ></input>
          </div>
        </div>
        <div>
          <label className="form-label">Mobile No.</label>
          <input
            type="number"
            id="password2"
            placeholder="mobole no."
            name="mono"
            value={input.mono}
            className="form-control"
            onChange={inputHandler}
            minlength="10"
            maxlength="10"
            required
          ></input>
        </div>
        <div className="col-12">
          <button
            className="btn btn-dark  mx-auto d-block"
            type="submit"
            onClick={submitHandler}
          >
            Submit form
          </button>
        </div>
      </form>

      {/* Render fetched data */}
      {data?.map((value, id) => {
        return (
          <div
            className="border border-1  bg-col text-dark border-dark my-2 w-50 text-center mx-auto d-block p-2"
            key={value.id}
          >
            <h3>id:{value.id}</h3>
            <h3>Firstname: {value.fname}</h3>
            <h3>Last name : {value.lname}</h3>
            <h3>Password : {value.pass}</h3>
            <h3>Mobile No. : {value.mono}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default App;
