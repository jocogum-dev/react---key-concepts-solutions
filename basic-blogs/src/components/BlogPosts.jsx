import classes from './BlogPosts.module.css';

function BlogPosts({fetchedPosts}) {
  if (!Array.isArray(fetchedPosts)) {
    return <p>No posts available.</p>;
  }
  return (
    <ul className={classes.posts}>
      {
        fetchedPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))
      }
    </ul>
  );
}

export default BlogPosts;