export default function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[æ]/g, "e") // replace special characters
    .replace(/[ø]/g, "o")
    .replace(/[å]/g, "a")
    .replace(/[^a-z0-9]+/g, "-"); // remove leading and trailing dashes
}
