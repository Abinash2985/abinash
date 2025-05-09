import React from 'react'


export function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
    <div className="flex justify-center space-x-6">
      <a href="https://www.linkedin.com/feed/" className="hover:text-blue-400">LinkedIn</a>
      <a href="https://github.com/Abinash2985" className="hover:text-blue-400">GitHub</a>
      <a href="#" className="hover:text-blue-400">Twitter</a>
    </div>
    <p className="mt-4">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
  </footer>
  )
}

export default Footer