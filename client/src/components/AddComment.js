import React from 'react'

function AddComment({photo}) {
    
  function updateComments(id, comments) {
    const myComments = photo.map((pic) => {
      if (pic.id === id) {
        return { ...photo, comments};
      } else {
        return photo;
      }
    });
  }
 
  return (
    <div>AddComment</div>
  )
}

export default AddComment