import { createClient }  from "contentful"

const getclient = () => createClient({
  space: process.env.SPACE_KEY,
  accessToken: process.env.ACCESS_TOKEN,
})
export async function getStaticPaths () {
  const client = getclient()
  const res = await client.getEntries()
  console.log('res is ', res.items[0])
  return {
    paths: res.items.map(
      entry => ({
        params: { slug: entry.fields.slug }
      })
    ),
    fallback: false
  }
}

export async function getStaticProps (context) {
  const client = getclient()

  const res = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug[match]': context.params.slug
  })
  return {
    props: {
      post: res.items[0]
    }
  }
}

const Blogpost = ({ post }) => {

  return <>
    <h1> {post.fields.title} </h1>
    <img src={ post.fields.image.fields.file.url } />
    <p> { post.fields.body.content[1] } </p>
    <p> { JSON.stringify(post.fields.body.content[0].content[0].value)} </p>
  </>
}

export default Blogpost