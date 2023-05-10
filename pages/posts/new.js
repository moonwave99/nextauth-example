import { FormEvent } from "react"
import Layout from "../../components/layout"
import PostForm from "../../components/PostForm"
import { useRouter } from "next/router"

async function createPost(data) {
  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
  return response.ok
}

export default function NewPostPage() {
  const router = useRouter()
  async function onSubmit(data) {
    const success = await createPost(data)
    if (success) {
      router.push("/posts")
    }
  }

  return (
    <Layout>
      <h1>New Post</h1>
      <PostForm onSubmit={onSubmit} />
    </Layout>
  )
}
