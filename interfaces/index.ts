export type Slide = {
  _id: string
  title: string
  imageUrl: string
  link: string
}

export type LinkItem = {
  id: string
  title: string
  link: string
}

export type BreadCrumb = {
  title: string,
  link: string
}

export type Article = {
  node: {
    id: string
    title: string
    excerpt: string
    featuredImage: {
      node: {
        sourceUrl: string
      }
    }
    uri: string
  }
}
