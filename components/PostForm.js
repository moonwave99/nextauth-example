export default function PostForm({ post = {}, onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.target))
    onSubmit(data)
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        Title
        <input
          required
          name="title"
          placeholder="Post title"
          defaultValue={post.title}
        />
      </label>
      <label>
        Title
        <textarea
          name="body"
          rows={20}
          placeholder="Post body"
          defaultValue={post.body}
        ></textarea>
      </label>
      <button>Done</button>
    </form>
  )
}
