import { error } from "console";

type Post = {
  id: string;
  title: string;
  description: string;
  date: Date;
};

let posts: Post[] = [];

// handlers
export const getPosts = () => posts;

export const getById = (id: string) => {
  return posts.find((post) => post.id === id);
};

export const addPosts = (post: Post) => {
  try {
    posts.push(post);
    // Useless (but correct), because .push method always works in this case ;)
  } catch (error) {
    throw new Error("Error: Can't add new post");
  }
};

export const updatePosts = (id: string, title: string, description: string) => {
  const post = posts.find((post) => post.id === id);

  if (post) {
    if (title) {
      post.title = title;
    }

    if (description) {
      post.description = description;
    }
  } else {
    throw new Error("Error: No post found!");
  }
};

export const deletePosts = (id: string) => {
  try {
    posts = posts.filter((post) => post.id !== id);
  } catch (error) {
    throw new Error("Error: Wrong id, can't delete");
  }
};
