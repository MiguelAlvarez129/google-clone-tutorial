import HeaderOptions from '@/components/header/header_options/HeaderOptions'
import SearchResults from '@/components/search-results/SearchResults'
import { GetServerSideProps, GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/header/Header'
import Response from '../reponse'
function Search({results}: {results: any}) {
  const router = useRouter()
  return (
    <div>
      <Head>
       <title>
        {router.query.term} - Google Search
       </title>
       <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <Header />
      <SearchResults results={results}/>
      {/* <HeaderOptions/> */}
    </div>
  )
}

export default Search

const getData = (useDummyData : boolean, context : GetServerSidePropsContext) => {
  const {query :{term, start}} = context;
  return new Promise((resolve,reject) => {
    if (useDummyData){
      resolve(Response)
    } else {
      fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${term}&start=${start ? start : "0"}`)
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(err => reject(err))
    }
  })
}

export const getServerSideProps = async (context : any) => {
  const useDummyData = true;

  try {
    // const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}`)
    const results = await getData(useDummyData, context)

    return {
      props: {
        results
      }
    }
  } catch (error) {
    console.log(error)
  }
}

