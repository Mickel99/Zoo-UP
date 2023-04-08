import React from 'react'
import { data } from './data'
import './nav_section.scss'

export const Nav = () => {
  return (
    <nav>
      <div className="container  nav__container">
        <a href="/" className="nav__logo">
          <img
            src="https://cdn.dribbble.com/users/3499895/screenshots/6481025/tiger_zoo_logo_4x.jpg?compress=1&resize=1200x900&vertical=top"
            alt="logoimage"
          />
        </a>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.Link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
