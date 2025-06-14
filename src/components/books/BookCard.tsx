import { Link } from '@tanstack/react-router'
import { Button } from '../Buttons'

type BookCardProps = {
  title: string
  author: string
  price: number
  image: string
  id: string
}

export const BookCard = (props: BookCardProps) => {
  return (
    <Link
      to="/books/$bookId"
      className="book-card"
      params={{ bookId: props.id }}
    >
      <div className="book-card-image-container">
        <img src={props.image} alt={props.title} />
        <div className="book-btns">
          <Button color="pastel-lime" filled={true}>
            Buy Now
          </Button>
          <Button color="light-gray" filled={true}>
            Add to Cart
          </Button>
        </div>
      </div>
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <h2 className="price">${props.price}</h2>
    </Link>
  )
}
