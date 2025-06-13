import { Link } from '@tanstack/react-router'

type BookCardProps = {
  title: string
  author: string
  price: number
  image: string
}

export const BookCard = (props: BookCardProps) => {
  return (
    <Link to="/" className="book-card">
      <div className="book-card-image-container">
        <img src={props.image} alt={props.title} />
      </div>
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <h2 className="price">${props.price}</h2>
    </Link>
  )
}
