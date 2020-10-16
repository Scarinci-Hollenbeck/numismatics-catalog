export type Slide = {
  _id: string
  title: string
  imageUrl: string
  link: string
  category: string
}

export type LinkItem = {
  _id: string
  title: string
  link: string
  categoryId: string
  count: number
}

export type BreadCrumb = {
  title: string
  link: string
}

export type Article = {
  node: {
    id: string
    title: string
    excerpt: string
    date: string
    uri: string
  }
}
