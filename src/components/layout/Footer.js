import React from 'react'

const Footer = () => {
    const footerYear = new Date().getFullYear()
  return (
    <footer className='footer p-10 bg-neutral text-primary footer-center shadow-lg'>
        <div>
            <p>Copyright &copy; {footerYear} All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer