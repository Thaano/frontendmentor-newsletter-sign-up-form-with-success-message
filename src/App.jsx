import styled, { css } from 'styled-components'

import { useState } from 'react'
import NewsLetterSuccessPopup from './components/NewsLetterSuccessPopup'

import NewsletterForm from './components/NewsLetterForm'

const Background = styled.div`
  /* 
- Tomato: hsl(4, 100%, 67%)
- Dark Slate Grey: hsl(234, 29%, 20%)
- Charcoal Grey: hsl(235, 18%, 26%)
- Grey: hsl(231, 7%, 60%)
- White: hsl(0, 0%, 100%) */

  min-height: 100vh;
  min-width: 100vw;

  background-color: hsl(235, 18%, 26%);

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto', sans-serif;

  h1 {
    color: hsl(234, 29%, 20%);
    font-size: 4rem;
    font-weight: 700;
    text-align: center;
  }

  p {
    color: hsl(234, 29%, 20%);
    font-size: 16px;
  }
`
function App() {
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState()

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

      <Background className="container-fluid p-0">
        {success && <NewsLetterSuccessPopup hide={() => setSuccess(false)} email={email} />}
        {!success && <NewsletterForm setEmail={setEmail} setSuccess={setSuccess} />}
      </Background>
    </>
  )
}

export default App
