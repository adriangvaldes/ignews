import { GetStaticProps } from 'next';
import Head from 'next/head';
import styles from './styles.module.scss';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../services/prismic';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Google bloqueia grande operação de contra-terrorismo</strong>
            <p>o grupo hacker que estava explorando 11 vulnerabilidades zero-day para comprometer dispositivos iOS, Android e Windows era na verdade de uma nação ocidental em uma operação de contra-terrorismo</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Google bloqueia grande operação de contra-terrorismo</strong>
            <p>o grupo hacker que estava explorando 11 vulnerabilidades zero-day para comprometer dispositivos iOS, Android e Windows era na verdade de uma nação ocidental em uma operação de contra-terrorismo</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Google bloqueia grande operação de contra-terrorismo</strong>
            <p>o grupo hacker que estava explorando 11 vulnerabilidades zero-day para comprometer dispositivos iOS, Android e Windows era na verdade de uma nação ocidental em uma operação de contra-terrorismo</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'posts')
  ], {
    fetch: ['posts.title', 'posts.content'],
    pageSize: 100,
  })

  console.log(response)
  
  return {
    props: {}
  }
}