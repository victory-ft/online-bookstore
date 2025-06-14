import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  ArticleIcon,
  BookOpenIcon,
  HeadphonesIcon,
  HeartIcon,
  ImageIcon,
  StarIcon,
} from '@phosphor-icons/react'

import { Button, LargeButton } from '@/components/Buttons'
import { BookDescription } from '@/components/books/BookDescription'
import { BookAuthor } from '@/components/books/BookAuthor'
import { BookPublisher } from '@/components/books/BookPublisher'
import { BookReview } from '@/components/books/BookReview'

import '../../styles/bookdetails.scss'

type bookType = 'ebook' | 'audio'

export const Route = createFileRoute('/books/$bookId')({
  component: RouteComponent,
})

function RouteComponent() {
  const [selectedBookType, setSelectedBookType] = useState<bookType>('ebook')
  const [infoSectionIndex, setInfoSectionIndex] = useState(0)

  return (
    <main className="book-details">
      <section className="book-details-overview">
        <div className="details-overview-left">
          <div className="quick-actions">
            <div className="quick-action-block">
              <div className="action-container">
                <button>
                  <HeartIcon size={24} />
                </button>
              </div>

              <div className="action-container">
                <button>
                  <StarIcon size={20} /> 4.8
                </button>
              </div>
            </div>

            <div className="quick-action-block">
              <div className="action-container">
                <button>
                  <BookOpenIcon size={24} />
                </button>
              </div>

              <div className="action-container">
                <button>
                  <ImageIcon size={24} />
                </button>
              </div>
            </div>
          </div>
          <div className="overview-image">
            <div className="image-container">
              <img src="/images/harrypotter1.jpg" alt="o" />
            </div>
          </div>
        </div>

        <div className="details-overview-right">
          <h2 className="overview-title lexend">
            Harry Potter and the Sorcerer's Stone
          </h2>

          <p className="overview-summary">
            In Harry Potter and the Sorcerer's Stone, an orphaned boy discovers
            on his eleventh birthday that he is a wizard and begins attending
            Hogwarts School of Witchcraft and Wizardry. There, he makes friends,
            uncovers secrets about his past, and confronts the dark wizard who
            killed his parents.
          </p>

          <p className="overview-author">J.K. Rowling</p>

          <div className="book-type-container">
            <button
              className={`book-type ${selectedBookType == 'ebook' ? 'active' : ''}`}
              onClick={() => {
                setSelectedBookType('ebook')
              }}
            >
              <div className="book-type-top-row">
                <ArticleIcon size={20} /> eBook
              </div>
              <p className="book-price">$ 50</p>
            </button>

            <button
              className={`book-type ${selectedBookType == 'audio' ? 'active' : ''}`}
              onClick={() => {
                setSelectedBookType('audio')
              }}
            >
              <div className="book-type-top-row">
                <HeadphonesIcon size={20} /> Audio
              </div>
              <p className="book-price">$ 20</p>
            </button>
          </div>

          <p className="publish-detail">Publisher - Pottermore</p>
          <p className="publish-detail">Date published - 26 June, 1997</p>
          <p className="publish-detail">Language - English</p>
          <p className="publish-detail">Page count - 309</p>

          <div className="overview-actions">
            <LargeButton color="pastel-lime" filled={true}>
              Buy Now
            </LargeButton>

            <LargeButton color="light-gray">Add to Cart</LargeButton>
          </div>
        </div>
      </section>

      <section className="book-info-section">
        <div className="info-component-buttons">
          <Button
            color="light-gray"
            filled={infoSectionIndex === 0}
            onClick={() => setInfoSectionIndex(0)}
          >
            Description
          </Button>
          <Button
            color="light-gray"
            filled={infoSectionIndex === 1}
            onClick={() => setInfoSectionIndex(1)}
          >
            About author
          </Button>
          <Button
            color="light-gray"
            filled={infoSectionIndex === 2}
            onClick={() => setInfoSectionIndex(2)}
          >
            Publisher collection
          </Button>
          <Button
            color="light-gray"
            filled={infoSectionIndex === 3}
            onClick={() => setInfoSectionIndex(3)}
          >
            Reviews
          </Button>
        </div>
        <div className="info-component-content">
          {infoSectionIndex === 0 && <BookDescription />}
          {infoSectionIndex === 1 && <BookAuthor />}
          {infoSectionIndex === 2 && <BookPublisher />}
          {infoSectionIndex === 3 && <BookReview />}
        </div>
      </section>
    </main>
  )
}
