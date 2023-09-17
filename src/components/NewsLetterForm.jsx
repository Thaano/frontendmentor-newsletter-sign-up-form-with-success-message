import styled, { css } from 'styled-components'

import newsletterImg from './../assets/images/illustration-sign-up-desktop.svg'
import newsletterImgMobile from './../assets/images/illustration-sign-up-mobile.svg'
import iconList from './../assets/images/icon-list.svg'
import { useState } from 'react'
import MainButton from './Button'

const NewsLetterContainer = styled.div`
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto; */
  background-color: white;
  /* Ajustez la largeur et la hauteur en fonction de votre contenu */
  width: fit-content;
  height: fit-content;

  border-radius: 2rem;
  padding: 1.5rem;

  // icon list
  li {
    list-style: none;
    margin-bottom: 0.5rem;
  }
  li:before {
    content: url(${iconList});
    display: inline-block;
    vertical-align: middle;
    margin-right: 1rem;
  }

  ul {
    padding-left: 0;
  }

  @media (max-width: 576px) {
    width: 100%;
    max-width: unset;
    height: 100%;
    border-radius: 0px;
    /* padding: 1.5rem; */
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`

const LeftCol = styled.div`
  height: 100%;
  /* padding: 2em 4em; */
`
const RightCol = styled.div`
  height: 100%;

  img {
    height: 50%;
    /* object-fit: cover; */

    @media (max-width: 992px) {
      content: url(${newsletterImgMobile});
      width: 100%;
    }

    @media (min-width: 992px) {
      width: 100%;
      height: 100%;
      content: url(${newsletterImg});
    }
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-top: 2rem;

  label {
    font-size: 0.8rem;
    color: hsl(234, 29%, 20%);
    font-weight: bold;
  }

  input {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid hsl(231, 7%, 60%);
    padding: 1rem;

    &:focus,
    &:active,
    &:hover {
      border: 1px solid hsl(234, 29%, 20%);
    }
  }
`

const ErrorText = styled.label`
  color: hsl(4, 100%, 67%) !important;
  margin-bottom: 0;
`

const EmailInput = styled.input`
  ${({ error }) =>
    error
      ? css`
          background-color: hsla(3.9285714285714297, 100%, 67.05882352941177%, 0.15);
          color: hsl(4, 100%, 67%);
          border-color: hsl(4, 100%, 67%) !important;
        `
      : null}
`
const NewsletterForm = ({ setEmail, setSuccess }) => {
  const [emailError, setEmailError] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.email.value)) {
      setEmailError(null)
      setEmail(e.target.email.value)
      e.target.reset()
    } else {
      setEmailError('Please enter a valid email address')
      setEmail(null)
      return
    }

    setSuccess(true)
  }

  return (
    <NewsLetterContainer>
      <Container className="container row g-0">
        <LeftCol className="col-12 col-lg-7 p-0 p-lg-5">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product manager receicing monthly updates on:</p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <StyledForm onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between">
              <label htmlFor="email" className="d-inline">
                Email address
              </label>
              {emailError && <ErrorText>{emailError}</ErrorText>}
            </div>
            <EmailInput type="text" name="email" required placeholder="email@company.com" error={emailError ? 1 : 0} />
            <MainButton properties type="submit">
              Subscribe to monthly newsletter
            </MainButton>
          </StyledForm>
        </LeftCol>
        <RightCol className="col-12 col-lg-5">
          <img src={newsletterImg} alt="newsletter" />
        </RightCol>
      </Container>
    </NewsLetterContainer>
  )
}

export default NewsletterForm
