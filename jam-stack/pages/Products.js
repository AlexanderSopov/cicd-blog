import React from 'react'
const contentful = require('contentful')

const client = contentful.createClient({
  space: 'fyodtxw8zw2s',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'qNSMwbxnQeTWCgOSAk0it04JvROHIkOl9uqVgT_CNRw'
})

const Products = () => {

    client.getEntries()
    .then((response) => console.log(response.items))
    .catch(console.error)

  return (
    <div>Products</div>
  )
}

export default Products