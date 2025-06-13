import { ArrowRightIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'

import '../styles/components.scss'

type CategoryCardProps = {
  color: string
  text: string
  link: string
  span?: string
}

export const CategoryCard = ({
  color,
  text,
  link,
  span,
}: CategoryCardProps) => {
  return (
    // <Link to="/">
    <div className={`category-card ${color} ${span}`}>
      <div className="category-card-arrow-container">
        <ArrowRightIcon />
      </div>
      <p className="category-card-text">{text}</p>
    </div>
    // </Link>
  )
}
