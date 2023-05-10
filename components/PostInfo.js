import { formatDate } from "../lib/utils"

export default function PostInfo({ post }) {
  return (
    <p>
      Posted by <strong>{post.author.name}</strong> on{" "}
      <time>{formatDate(post.createdAt)}</time>
    </p>
  )
}
