export function filterBlog(blogs = []) {
  return blogs.filter((blog) => blog.regularPath?.substr(0, 5) === "/read" && blog?.relativePath !== "read/README.md");
}

export function filterRead(blogs) {
  return blogs.filter((blog) => blog.regularPath?.substr(0, 5) === "/read" && blog?.relativePath !== "read/README.md");
}

export function filterNotes() {}
