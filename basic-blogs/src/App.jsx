import BlogPosts from './components/BlogPosts.jsx';
import NewPost from './components/NewPost.jsx';
import blogLogoImg from './assets/blog-logo.jpg';
import { useEffect, useState } from 'react';

function App() {
  // Todo: Fetch blog posts from https://jsonplaceholder.typicode.com/posts (see documentation on https://jsonplaceholder.typicode.com/guide/)
  // Pass fetched posts to <BlogPost /> via props & output the posts in that component
  const [fetchedPosts, setFetchedPosts] = useState({});

  async function fetchPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    async function getPosts() {
      const posts = await fetchPost();
      setFetchedPosts(posts);
    }

    getPosts();
  }, []);

  return (
    <>
      <header>
        <img src={blogLogoImg} from="Pen & paper" />
        <h1>
          My <em>Effectful</em> Blog
        </h1>
      </header>
      <NewPost />
      <BlogPosts fetchedPosts={fetchedPosts} />
    </>
  );
}

export default App;