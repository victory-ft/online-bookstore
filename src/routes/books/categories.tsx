import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/books/categories')({
  component: Categories,
})

function Categories() {
  return <div>Hello "/books/categories"!</div>
}
