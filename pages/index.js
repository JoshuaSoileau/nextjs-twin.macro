import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import 'twin.macro'
import Rounded from '../components/Rounded'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main tw="p-16 block h-full">
        <div tw="prose prose-xl flex gap-4 h-full">
          <div tw="flex-1">
            <p>Upper subtitle</p>
            <h1>Hello there 👋</h1>
            Left sidebar
          </div>
          <div tw="w-1/3 h-full">
            <Rounded xl>
              <div tw="bg-gray-100 h-full">Right sidebar</div>
            </Rounded>
          </div>
        </div>
      </main>
    </Layout>
  )
}
