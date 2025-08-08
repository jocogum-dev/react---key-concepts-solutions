import { useState } from 'react';

import classes from './NewPost.module.css';

function NewPost() {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleUpdateTitle(event) {
    setEnteredTitle(event.target.value);
  }
  async function sendBlog(enteredTitle){
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          title: `${enteredTitle}`,
          body: `${enteredTitle}`,
          userId: 1,
        })
      });

      if(!response.ok) {
        throw new Error("Failed to send post");
      }
      const data = await response.json();
      return data;
    } catch(error) {
      console.error("Error: ", error.message);
    }
  }

  async function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    // Todo: Handle the creation of new posts and send new post data to https://jsonplaceholder.typicode.com/posts (via a POST) request
    console.log(enteredTitle);
    const result = await sendBlog(enteredTitle);
    console.log("result: ", result);
    setEnteredTitle("");
    setIsLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={handleUpdateTitle} value={enteredTitle} />
      </div>
      <button>{isLoading ? 'Saving...' : 'Save'}</button>
    </form>
  );
}

export default NewPost;