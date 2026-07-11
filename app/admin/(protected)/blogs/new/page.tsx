import BlogForm from "../BlogForm";
import { createBlogPost } from "@/lib/actions/blogs";

export default function NewBlogPostPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-2xl text-text mb-6">New Blog Post</h1>
      <BlogForm action={createBlogPost} />
    </div>
  );
}
