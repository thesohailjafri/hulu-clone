import Head from 'next/head'
import Results from '../components/Results'
import { requestObj } from '../utils/requests'

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu | Home</title>
        <meta name="description" content="Welcome to the hulu home page" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <main >
        <Results results={results} />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre
  const request = await fetch(
    `https://api.themoviedb.org/3${requestObj[genre]?.url || requestObj.fetchTrending.url}`
  ).then(res => res.json())
  return {
    props: {
      results: request.results
    }
  }
}
