import BlogForm from "../BlogForm";
import { createBlogPost } from "@/lib/actions/blogs";
import { getBlogPosts } from "@/lib/api";

export default async function NewBlogPostPage() {
  const posts = await getBlogPosts();
  const categories = Array.from(new Set(posts.map((p) => p.category).filter(Boolean)));

  return (
    <div>
      <h1 className="font-display font-bold text-2xl text-text mb-6">New Blog Post</h1>
      <BlogForm action={createBlogPost} categories={categories} />
    </div>
  );
}
