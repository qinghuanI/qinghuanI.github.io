export function filterBlog(blogs = []) {
  return blogs.filter((blog) => blog.regularPath?.substr(0, 5) === "/read" && blog?.relativePath !== "read/README.md");
}

export function filterRead(blogs) {
  return blogs.filter((blog) => blog.regularPath?.substr(0, 5) === "/read" && blog?.relativePath !== "read/README.md");
}

export function filterNotes(blogs) {
  return blogs.filter(
    (blog) => blog.regularPath?.substr(0, 6) === "/notes" && blog?.relativePath !== "notes/README.md"
  );
}
