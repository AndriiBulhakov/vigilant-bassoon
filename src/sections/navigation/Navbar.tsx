import { useState, useEffect } from "react"
import { Button } from '@/components/Button';
import Link from 'next/link';
import { Logo } from '../../components/Logo';
import navStyles from './NavbarMobile.module.css';

const navLinks = [
  {
    id: 1,
    name: "Interview Copilot®️",
    href: "#",
    icon: true,
  },
  {
    id: 2,
    name: "AI Resume Builder",
    href: "#",
    icon: false,
  },
  {
    id: 3,
    name: "Question Bank",
    href: "#",
    icon: false,
  },
  {
    id: 4,
    name: "Testimonials",
    href: "#",
    icon: false,
  },
  {
    id: 5,
    name: "Scholarships",
    href: "#",
    icon: false,
  },
  {
    id: 6,
    name: "Log in",
    href: "#",
    icon: false,
    mobileOnly: true,
  },
  {
    id: 7,
    name: "Get Started Free",
    href: "#",
    icon: false,
    mobileOnly: true,
    type: "button"
  },
]

function Navbar () {
  const [menuToggle, setMenuToggle] = useState(false)
  const [navColor, setNavColor] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [navTranslate, setNavTranslate] = useState(0)

  const handleScroll = () => {
    const currentScrollY = window.pageYOffset
    if (currentScrollY > lastScrollY) {
      setNavTranslate(-100)
    } else {
      setNavTranslate(0)
    }
    setLastScrollY(currentScrollY)
  }

  function handleMenuToggle() {
    setMenuToggle(!menuToggle)
  }

  function handleNavColor() {
    if (window.scrollY > 100) {
      setNavColor(true)
    } else {
      setNavColor(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleNavColor()
    })
    return () => {
      window.removeEventListener("scroll", () => {
        handleNavColor()
      })
    }
  }, [])

    useEffect(() => {
      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, [lastScrollY])

  useEffect(() => {
    if (menuToggle) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [menuToggle])

  return (
    <nav
      style={{ transform: `translateY(${navTranslate}%)` }}
      className={`flex flex-row items-center justify-between font-medium text-body/medium ease-in-out duration-300 lg:py-6 lg:px-5 xs:p-4 fixed z-10 top-0 left-0 right-0 ${navColor ? "nav-scroll" : ""}`}
    >
      <Link
        href="/"
        className="relative z-10 lg:visible-translate-y-2 xs:visible-translate-y-0"
      >
        <Logo className="navbar-logo" />
      </Link>
      <div
        className={`navbar-menu__wrapper ${navStyles["navbar-menu__wrapper"]} ${menuToggle ? navStyles["is--active"] : ""}`}
      >
        <ul className="navbar flex  gap-8 items-center">
          {navLinks.map((item, i) => {
            return (
              <li
                key={i + 1}
                className={item.mobileOnly ? "xl:hidden xs:block" : ""}
              >
                <Link
                  href={item.href}
                  className={item.icon ? "flex items-center gap-[0.38rem]" : ""}
                >
                  {item.type === "button" ? (
                    <Button className="btn-primary">{item.name}</Button>
                  ) : (
                    item.name
                  )}
                  {item.icon ? (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                      >
                        <path
                          d="M2 8.86603C1.33333 8.48113 1.33333 7.51888 2 7.13397L11 1.93782C11.6667 1.55292 12.5 2.03405 12.5 2.80385L12.5 13.1962C12.5 13.966 11.6667 14.4471 11 14.0622L2 8.86603Z"
                          fill="#FF4800"
                        />
                      </svg>
                    </span>
                  ) : undefined}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      <ul className="navbar gap-5  items-center lg:flex xs:hidden">
        {navLinks.map((item, i) => {
          if (item.mobileOnly) {
            return (
              <li key={i + 1}>
                <Link href={item.href}>
                  {item.type === "button" ? (
                    <Button className="btn-primary">{item.name}</Button>
                  ) : (
                    item.name
                  )}
                </Link>
              </li>
            )
          }
          return
        })}
      </ul>

      <button
        className="xl:hidden xs:block bg-gray-primary p-4 rounded-lg relative z-10"
        onClick={handleMenuToggle}
      >
        <div className="flex flex-col gap-1.5 items-center justify-center w-6 h-6">
          <div
            className={`h-[0.09375rem] w-[1.375rem] rounded-lg bg-white-primary ease-in-out duration-300 origin-center ${menuToggle ? "transform rotate-45 translate-y-[0.21875rem]" : ""}`}
          ></div>
          <div
            className={`h-[0.09375rem] w-[1.375rem] rounded-lg bg-white-primary ease-in-out duration-300 origin-center ${menuToggle ? "transform -rotate-45 -translate-y-[0.21875rem]" : ""}`}
          ></div>
        </div>
      </button>
    </nav>
  )
}

export { Navbar};
