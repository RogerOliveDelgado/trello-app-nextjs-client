import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoginComponent from './components/login/LoginComponent'

const Home: NextPage = () => {
  return (
    <LoginComponent />
  )
}

export default Home
