import React, {useState} from 'react'
// import AddComment from './AddComment';


function Photos({ photo, setPhoto, updateComments }) {

 
  // const [comments, setComments] = useState("");


    // function handlePhoto(event) {
    //     event.preventDefault();
    //   let newComment = {
    //     comments: comments}
        
    //   // persist changes on server
    //   fetch(`/photos/${photo.id}`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(newComment),
    //   })
    //     .then((r) => r.json())
    //     .then((data) => console.log(data));
    //   // then use onUpdateTodo to update todo in state
    // }
    
  

  return (
    <div className="container">
      {photo.map((pic) => (
        <div class="row">
          <div classNam="col">
            <img
              src={pic.url}
              className="img-fluid"
              alt=""
              width="400"
              height="350"
            />
            <h3>{pic.name}</h3>
            <button type="button" className="btn btn-danger">
              <i class="bi bi-star"></i>
              like
            </button>
            <h5>{pic.likes}</h5>

  
            </div>
            </div>))}
    </div>
  );
}

export default Photos