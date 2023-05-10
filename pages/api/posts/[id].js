import Post from "../../../models/post"
import User from "../../../models/user"
import dbConnect from "../../../lib/mongoose"

export default async function handler(req, res) {
  await dbConnect()

  if (req.method === "GET") {
    const post = await Post.findById(req.query.id)
    const author = await User.findById(post.author)

    res.status(200).json({
      ...post._doc,
      author,
    })
  }

  if (req.method === "PUT") {
    await Post.findOneAndUpdate(
      {
        _id: req.query.id,
      },
      req.body
    )
    res.status(200).json({ message: "ok" })
  }

  return res.status(405).json({ message: "Method not allowed" })
}
