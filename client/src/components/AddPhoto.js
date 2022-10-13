import React,{ useState }  from 'react'

function AddPhoto({setPhoto, photo}) {

    const [name, setName]= useState ("")
    const [errors, setErrors] = useState("");
    const [url, setUrl] = useState("");
    const [category, setCategory] = useState("");

     function addPhoto(newSetPhoto) {
       setPhoto([...photo, newSetPhoto]);
     }

    function handleSubmit(event) {
      event.preventDefault();
      let newPhoto = {
        name: name,
        url: url,
        category: category,
      };

      fetch("/photos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPhoto),
      })
        .then((response) => {
    if (response.ok) {
      response.json().then((data) => addPhoto(data));
    } else {
      response.json().then((errorData) => setErrors(errorData.errors));
    }
  });

      setName("");
      setUrl("");
      setCategory("");
    }



  return (
    <div>
      <form style={{ alignContent: "center" }}>
        <div className="row">
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Photo name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Image url"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
            />
          </div>
          <div className="col-sm-1">
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option>nature</option>
              <option>animal</option>
              <option>building</option>
              <option>human</option>
              <option>forest</option>
              <option>car</option>
            </select>
          </div>
        </div>

        {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <br></br>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleSubmit}
        >
          create
        </button>
      </form>
    </div>
  );
}

export default AddPhoto