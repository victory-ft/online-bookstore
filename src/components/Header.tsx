import { useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'

import '../styles/header.scss'
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from '@phosphor-icons/react'

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current && currentScrollY > 30) {
        // Scrolling down AND scrolled past an initial threshold (30px)
        // The threshold prevents the header from immediately disappearing on a tiny scroll down
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setIsVisible(true)
      }
      // Update the last scroll position for the next check
      lastScrollY.current = currentScrollY
    }
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <nav className="nav-container">
        <section className="nav-top-row">
          <Link to="/">
            <h1 className="nav-header-text lexend">
              <span>books </span>
              <span>store</span>
            </h1>
          </Link>
          <div className="middle">
            <div className="search-container">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search title, author or ISBN"
              />
              <button className="search-btn">
                <MagnifyingGlassIcon color="#dddbd7" size={24} />
              </button>
            </div>
            <section className="nav-bottom-row">
              <Link to="/books/categories">Categories</Link>
              <Link to="/">New</Link>
              <Link to="/">Popular</Link>
              <Link to="/">About us</Link>
              <Link to="/">Checkout</Link>
            </section>
          </div>
          <div className="nav-quick-actions">
            <Link to="/">
              <HeartIcon color="white" size={32} />
            </Link>
            <Link to="/">
              <UserCircleIcon color="white" size={32} />
            </Link>
            <Link to="/">
              <ShoppingCartIcon color="white" size={32} />
            </Link>
          </div>
        </section>
      </nav>
    </header>
  )
}
