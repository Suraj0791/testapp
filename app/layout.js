import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Quiz Master - Interactive Learning Platform",
  description: "Test your knowledge with our gamified quiz experience",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">{children}</div>
      </body>
    </html>
  )
}

