import Layout from "../../components/layout"
import PostList from "../../components/PostList"
import Link from "next/link"
import useSWR from "swr"

export default function PostsPage() {
  const { data } = useSWR("/api/posts")

  return (
    <Layout>
      <h1>Posts</h1>
      <PostList posts={data} />
      <p>
        <Link href="/posts/new">New Post</Link>
      </p>
    </Layout>
  )
}
