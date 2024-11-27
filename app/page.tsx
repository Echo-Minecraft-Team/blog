import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My posts
      </h1>
      <p className="mb-4">
        {`I'm a small dev, working on a project called Echo. This blog documents my journey, including technical challenges, progress updates, and insights into creating innovative solutions in the server hosting space. It also includes personal articles.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
