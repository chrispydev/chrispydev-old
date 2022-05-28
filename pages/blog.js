import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import Head from "next/head";
import Post from "../components/Post";
import { sortByDate } from "../lib";

export default function blog({ posts }) {
  return (
    <main className="lg:max-w-[70%] mx-auto p-2">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </main>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
