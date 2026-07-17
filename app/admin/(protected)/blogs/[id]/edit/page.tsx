import { notFound } from "next/navigation";
import BlogForm from "../../BlogForm";
import { updateBlogPost } from "@/lib/actions/blogs";
import { adminFetch } from "@/lib/admin-auth";
import { getBlogPosts, type BlogPost } from "@/lib/api";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditBlogPostPage({ params }: Props) {
  const { id } = await params;
  const res = await adminFetch(`/api/blogposts/${id}`);
  if (!res.ok) notFound();
  const post: BlogPost = await res.json();
  const posts = await getBlogPosts();
  const categories = Array.from(new Set(posts.map((p) => p.category).filter(Boolean)));

  return (
    <div>
      <h1 className="font-display font-bold text-2xl text-text mb-6">Edit Blog Post</h1>
      <BlogForm action={updateBlogPost.bind(null, post.id)} post={post} categories={categories} />
    </div>
  );
}
