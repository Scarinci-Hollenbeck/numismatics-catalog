export const makeTitle = (link: string) => {
  const modLink = link.replace(/-|\s/g, ' ').replace(/\+/g, ' ')
  return modLink.charAt(0).toUpperCase() + modLink.slice(1)
}
