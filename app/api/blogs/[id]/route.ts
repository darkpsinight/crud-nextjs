import { deletePosts, getById, getPosts, updatePosts } from "@/app/lib/data";
import { NextResponse } from "next/server";

// get post by id
export const GET = async (req: Request) => {
  try {
    const id = req.url.split("blogs/")[1];
    const post = getById(id);
    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Here your post data:", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error: ", error }, { status: 500 });
  }
};

// update post by id
export const PUT = async (req: Request) => {
  try {
    const id = req.url.split("blogs/")[1];
    const { title, description } = await req.json();

    if (title === "" && description === "") {
      return NextResponse.json(
        { message: "Post cannot be updated" },
        { status: 400 }
      );
    }

    updatePosts(id, title, description);
    const post = getById(id);
    return NextResponse.json({ message: "Updated!", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error: ", error }, { status: 500 });
  }
};

// delete post by id
export const DELETE = async (req: Request) => {
    try {
        const id = req.url.split("blogs/")[1];
        deletePosts(id);
        const post = getPosts();
        return NextResponse.json({ message: "Deleted!", post }, { status: 200 });
      } catch (error) {
        return NextResponse.json({ message: "Error: ", error }, { status: 500 });
      }
};
