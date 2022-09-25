import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      An otherworldly experience for entrepreneurs with a collaborative feel.
      <ArticlesCell />
    </>
  )
}

export default HomePage
