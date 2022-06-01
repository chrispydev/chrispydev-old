import Link from "next/link";
import Heading from "./Heading";

export default function Post({ post }) {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-2 my-7 mx-auto">
        <div className="mx-auto">
          <img
            className="w-[330px] md:w-full h-[200px] mb-2 dark:border-white dark:border-[1px]"
            src={post.frontmatter.cover_image}
            alt={post.frontmatter.title}
          />

          <small className="font-light italic text-xs p-1 bg-secondary dark:bg-dark dark:text-white rounded">
            Posted on {post.frontmatter.date}
          </small>
        </div>

        <div className="md:col-span-2">
          <div className="">
            <div className="w-full flex justify-start items-center">
              <a href={`/blog/${post.slug}`} className="mb-7 xs:ml-4 md:ml-0">
                <Heading small headingText={post.frontmatter.title} />
              </a>
            </div>

            <p className="text-gray-700 text-sm font-light leading-6 tracking-normal dark:text-white">
              {post.frontmatter.excerpt}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-secondary dark:bg-gray-500" />
    </>
  );
}
