import Layout from "../../../components/layout"
import PostInfo from "../../../components/PostInfo"
import Link from "next/link"
import { useRouter } from "next/router"
import useSWR from "swr"
import ReactMarkdown from "react-markdown"

export default function SinglePostPage() {
  const { query } = useRouter()
  const { data } = useSWR(query.id ? `/api/posts/${query.id}` : null)

  if (!data) {
    return "Loading..."
  }

  return (
    <Layout>
      <h1>{data.title}</h1>
      <PostInfo post={data} />
      <ReactMarkdown>{data.body}</ReactMarkdown>
      <p>
        <Link href={`/posts/${query.id}/edit`}>Edit Post</Link>
      </p>
    </Layout>
  )
}
