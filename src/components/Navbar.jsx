import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import AuthModal from './AuthModal'
import './Navbar.css'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showAuth, setShowAuth] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const handleLogout = () => {
    signOut(auth)
  }

  return (
    <nav className="navbar">
      {/* LEFT - Logo */}
      <a href="#hero" onClick={() => setMobileMenuOpen(false)}>
        <img src={logo} alt="Logo" className="navbar-logo" />
      </a>

      {/* CENTER - Navigation Links */}
      <div className="navbar-links">
        <a href="#programs">Programs</a>
        <a href="#pricing">Pricing</a>
        <a href="#trading-rules">Trading Rules</a>
        <a href="#faqs">FAQs</a>
        <a href="#affiliates">Affiliates</a>
      </div>

      {/* RIGHT - Auth Buttons */}
      <div className="navbar-auth">
        {!currentUser ? (
          <button className="navbar-login" onClick={() => setShowAuth(true)}>
            Login
          </button>
        ) : (
          <div className="navbar-user">
            <span className="navbar-user-email">
              {currentUser.email || currentUser.displayName || 'User'}
            </span>
            <button className="navbar-logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>

      {/* MOBILE - Hamburger Icon */}
      <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        ☰
      </button>

      {/* MOBILE MENU DROPDOWN */}
      <div className={`mobile-menu ${!mobileMenuOpen ? 'hidden' : ''}`}>
        <button className="mobile-close" onClick={() => setMobileMenuOpen(false)}>
          ✕
        </button>
        <a href="#" onClick={() => setMobileMenuOpen(false)}>Programs</a>
        <a href="#" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
        <a href="#" onClick={() => setMobileMenuOpen(false)}>Trading Rules</a>
        <a href="#" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
        <a href="#" onClick={() => setMobileMenuOpen(false)}>Affiliates</a>
        {!currentUser ? (
          <button className="mobile-login-btn" onClick={() => {
            setMobileMenuOpen(false)
            setShowAuth(true)
          }}>
            Log in
          </button>
        ) : (
          <button className="mobile-login-btn" onClick={() => {
            setMobileMenuOpen(false)
            handleLogout()
          }}>
            Logout
          </button>
        )}
      </div>

      {/* AUTH MODAL */}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </nav>
  )
}

export default Navbar
