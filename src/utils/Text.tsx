export const toTitleCase = (sentence: string): string => {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()
}

export const toSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}
