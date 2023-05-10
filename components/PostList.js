import Link from "next/link"
import PostInfo from "./PostInfo"

export default function PostList({ posts }) {
  if (!posts) {
    return <p>No posts yet</p>
  }
  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li key={post._id}>
          <article>
            <h2>
              <Link href={`/posts/${post._id}`}>{post.title}</Link>
            </h2>
            <PostInfo post={post} />
          </article>
        </li>
      ))}
    </ul>
  )
}
