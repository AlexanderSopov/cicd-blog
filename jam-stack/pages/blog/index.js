import Link from "next/link"
import { createClient }  from "contentful"

const getclient = () => createClient({
  space: process.env.SPACE_KEY,
  accessToken: process.env.ACCESS_TOKEN,
})

export async function getStaticProps () {
  const client = getclient()
  return {
    props: {
      posts: (await client.getEntries()).items
    },
  }
}

const Blogposts = ({ posts }) => <>
  { posts.map((post, i) => <article key={i}>
    <Link href={'/blog/' + post.fields.slug}>
      <h1> {post.fields.title} </h1>
      <img src={ post.fields.image.fields.file.url } />
      <p> { post.fields.body.content[1] } </p>
      <p> { JSON.stringify(post.fields.body.content[0].content[0].value)} </p>
    </Link>
  </article>) }
</>

export default Blogposts