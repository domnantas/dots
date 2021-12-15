import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {
  const { currentUser, logOut } = useAuth()

  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>{JSON.stringify(currentUser)}</p>
      <button onClick={() => logOut()}>Log out</button>
    </>
  )
}

export default HomePage
