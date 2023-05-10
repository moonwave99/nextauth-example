import Layout from "../../../components/layout"
import PostForm from "../../../components/PostForm"
import Link from "next/link"
import { useRouter } from "next/router"
import useSWR from "swr"

export default function EditPostPage() {
  const router = useRouter()
  const { query } = router
  const { data } = useSWR(query.id ? `/api/posts/${query.id}` : null)

  if (!data) {
    return "Loading..."
  }

  async function onSubmit(data) {
    const response = await fetch(`/api/posts/${query.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (response.ok) {
      router.push(`/posts/${query.id}`)
      return
    }
    alert("Something went wrong!")
  }

  return (
    <Layout>
      <h1>Edit Post</h1>
      <PostForm onSubmit={onSubmit} post={data} />
      <p>
        <Link href={`/posts/${query.id}`}>Back</Link>
      </p>
    </Layout>
  )
}
