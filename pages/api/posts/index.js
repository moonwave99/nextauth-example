import Post from "../../../models/post"
import User from "../../../models/user"
import dbConnect from "../../../lib/mongoose"
import { getToken } from "next-auth/jwt"

export default async function handler(req, res) {
  await dbConnect()

  if (req.method === "GET") {
    const posts = await Post.find()

    const output = await Promise.all(
      posts.map(async (p) => {
        const author = await User.findById(p.author)
        return {
          ...p._doc,
          author,
        }
      })
    )

    res.status(200).json(output)
  }

  if (req.method === "POST") {
    const token = await getToken({ req })
    if (!token) {
      return res.status(401).json({ status: "Unauthorized" })
    }

    try {
      await Post.create({
        ...req.body,
        author: token.sub,
      })

      res.status(200).json({ status: "Post created" })
    } catch (error) {
      console.log("POST /api/posts", error)
      res.status(500).json({ message: "Error creating post" })
    }
  }
}
