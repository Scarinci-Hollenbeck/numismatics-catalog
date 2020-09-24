export const makeTitle = (link: string) => {
  const modLink = link.replace(/-|\s/g, ' ').replace(/\+/g, ' ')
  return modLink.charAt(0).toUpperCase() + modLink.slice(1)
}

export const postFetcher = async (url: string, data: any) => {
  const request = await fetch(url, {
    method: 'POST',
    body: data,
  })

  const json = await request.json()

  return json
}
