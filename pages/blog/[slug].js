import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
//import Image from "next/image";
import Heading from "../../components/Heading";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <main className="lg:max-w-[70%] mx-auto">
        <div className="py-3 px-5 lg:p-4">
          {/* <Image
            height={550}
            width={600}
            objectFit="fill"
            layout="responsive"
            src={cover_image}
            alt={title}
          /> */}
          <div className="-mt-36 -mb-36 md:-mb-0 md:-mt-0">
            <img
              loading="lazy"
              className="w-full h-[500px] object-contain"
              src={cover_image}
              alt={title}
            />
          </div>
          <div className="w-full flex justify-start items-center my-3">
            <Heading small headingText={title} />
          </div>

          <small className="text-xs bg-secondary p-1 rounded">
            Posted on {date}
          </small>
          <div className="post-body">
            <div
              className="post-wrapper"
              dangerouslySetInnerHTML={{ __html: marked(content) }}
            ></div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
