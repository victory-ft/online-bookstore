import { Link, createFileRoute } from '@tanstack/react-router'
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from '@phosphor-icons/react'

import { CategoryCard } from '@/components/CategoryCard'
import { Button } from '@/components/Buttons'
import { BookCard } from '@/components/books/BookCard'

import '../styles/homepage.scss'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main className="homepage">
      <h1 className="home-header-text lexend">
        Welcome <p>to the book store</p>
      </h1>
      <div className="homepage-category-showcase">
        <CategoryCard color="lime" link="/" text="Fiction" span="col-span-4" />
        <CategoryCard
          color="mint"
          link="/"
          text="Non-Fiction"
          span="col-span-2"
        />
        <CategoryCard
          color="cream"
          link="/"
          text="Academic"
          span="col-span-3"
        />
        <CategoryCard
          color="dark-gray"
          link="/"
          text="Children's"
          span="col-span-6"
        />
        <CategoryCard color="pink" link="/" text="Thriller" span="col-span-3" />
      </div>

      <section className="homepage-booklist">
        <div className="category-btns">
          <Button>All Books</Button>
          <Button>New</Button>
          <Button>Best Sellers</Button>
          <Button>Sale</Button>
        </div>
        <div className="homepage-books">
          <BookCard
            image="/images/book1.jpg"
            title="restaurant"
            author="Brian Duff"
            price={35}
            id="1"
          />
          <BookCard
            image="/images/book2.jpg"
            title="Positive Stories for Negative Times"
            author="Wonder Fools"
            price={15}
            id="2"
          />
          <BookCard
            image="/images/book3.jpg"
            title="Comics, Culture, and Religion"
            author="Faith Imagined"
            price={24.4}
            id="3"
          />
          <BookCard
            image="/images/harrypotter1.jpg"
            title="Harry Potter and the Philosopher's Stone"
            author="JK Rowling"
            price={45}
            id="4"
          />
          <BookCard
            image="/images/harrypotter4.jpg"
            title="Harry Potter and the Goblet of Fire"
            author="JK Rowling"
            price={42.5}
            id="5"
          />
          <BookCard
            image="/images/harrypotter1.jpg"
            title="Harry Potter and the Philosopher's Stone"
            author="JK Rowling"
            price={45}
            id="6"
          />
        </div>
      </section>

      <section className="about-us-section">
        <h1 className="about-header lexend">About us</h1>
        <Link to="/" className="light-gray about-box about-box-1">
          <h2>Our Community</h2>
          <p>
            Join community Of like—minded passionate about technology and
            innovation.
          </p>
        </Link>

        <Link to="/" className="light-gray about-box about-box-2">
          <h2>What We Offer</h2>
          <p>
            Explore the diverse range of content and resources we provide,
            catering to various interests and needs.
          </p>
        </Link>

        <Link to="/" className="about-dual-box">
          <div className="mint about-box">
            <p>
              <ArrowDownIcon weight="bold" />
            </p>
            <p>
              Explore the principles that guide our work, including
              transparency, integrity, and innovation.
            </p>
          </div>
          <h2 className="box-header mint-outline">Our Values</h2>
        </Link>

        <Link to="/" className="about-dual-box">
          <h2 className="box-header pink-outline">Our Story</h2>
          <div className="pink about-box">
            <p>
              <ArrowUpRightIcon weight="bold" />
            </p>
            <p>
              Learn how we started, evolved, and the faces behind our journey.
            </p>
          </div>
        </Link>

        <Link to="/" className="about-dual-box">
          <div className="lime about-box">
            <p>
              <ArrowDownIcon weight="bold" />
            </p>
            <p>
              Discover our purpose and goals, dedicated to providing value and
              insights to our audience.
            </p>
          </div>
          <h2 className="box-header lime-outline">Our Mission</h2>
        </Link>
      </section>

      <section className="featured-section">
        <div className="featured-book-container">
          <img src="/images/harrypotter1.jpg" alt="featured-book" />
        </div>
        <h2>Featured</h2>
        <CategoryCard
          color="pink-outline new-releases"
          link="/"
          text="New Releases"
        />

        <Link to="/" className="small-category-card lime-outline">
          <p className="category-card-text">Award Winners</p>
          <div className="category-card-arrow-container">
            <ArrowRightIcon />
          </div>
        </Link>

        <CategoryCard color="pink editor" link="/" text="Editor's Picks" />
        <CategoryCard
          color="lime-outline trending"
          link="/"
          text="Trending now"
        />
        <CategoryCard color="lime-outline" link="/" text="Staff Favourites" />
      </section>
    </main>
  )
}
