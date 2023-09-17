import styled from 'styled-components'
import MainButton from './Button'

import successIcon from '../assets/images/icon-success.svg'

const Popup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: white;
  /* Ajustez la largeur et la hauteur en fonction de votre contenu */
  max-width: 350px;
  height: fit-content;

  border-radius: 2rem;
  padding: 1.5rem;

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    width: 48px;
    height: 48px;
  }

  @media (max-width: 576px) {
    width: 100%;
    max-width: unset;
    height: 100%;
    border-radius: 0px;
    /* padding: 1.5rem; */
  }
`

const NewsLetterSuccessPopup = ({ hide, email }) => {
  return (
    <Popup className="container d-flex flex-column align-items-center justify-content-between">
      <div>
        <img src={successIcon} alt="newsletter success" />
        <h2 className="mt-4">Thanks for subscribing!</h2>
        <p className="mt-4">
          A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to
          confirm your subscription.
        </p>
      </div>
      <MainButton onClick={hide} className="w-100">
        Dismiss message
      </MainButton>
    </Popup>
  )
}

export default NewsLetterSuccessPopup
