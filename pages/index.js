import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Next JS APP - Pre-rendering in the browser</h1>
      
        <Link href="/blog">
          <a>
            View all posts
          </a>
        </Link>  
    </div>
  )
}
