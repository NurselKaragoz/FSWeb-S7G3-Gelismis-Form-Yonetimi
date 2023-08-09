import { useState } from "react";
function Form() {
  const [formDatas, setFormDatas] = useState();
  function changeHandle(e) {
    const { name, value } = e.target.value;
    setFormDatas({ ...formDatas, [name]: value });
  }

  return (
    <div>
      <label>
        Name : <input name="myInput" onChange={changeHandle} />
      </label>
      <br />
      <label>
        Email: <input name="myInput" onChange={changeHandle} />
      </label>
      <br />
      <label>
        Password: <input name="myInput" onChange={changeHandle} />
      </label>
      <br />
      <label>
        <input type="checkbox" onChange={changeHandle} name="myCheckbox" />
      </label>
      <br />
      <button type="submit">Submit </button>
    </div>
  );
}

export default Form;
