
'use client'
import { AuthContextProvider } from './context/AuthContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard-Openinapp',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Montserrat&family=Open+Sans:wght@300&display=swap" rel="stylesheet"/>
   
      <body className={inter.className}>
      <AuthContextProvider>
      {children}
      </AuthContextProvider>
      </body>
    </head>
      </html>
  )
}
