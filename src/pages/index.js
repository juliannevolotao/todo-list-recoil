import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import MainContainer from '../components/mainContainer'
import ContentContainer from '../components/contentContainer'
import TodoHeader from '../components/todoHeader'
import TodoListArea from '../components/todoListArea'

export default function Home() {
  return (
    <MainContainer>
      <ContentContainer>
        <TodoHeader />
        <TodoListArea />
      </ContentContainer>
    </MainContainer>
  )
}
