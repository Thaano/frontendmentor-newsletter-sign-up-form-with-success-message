import styled from 'styled-components'

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid hsl(231, 7%, 60%);
  padding: 1rem;

  margin-top: 1rem;
  color: hsl(0, 0%, 100%);
  font-weight: bold;
  background: hsl(234, 29%, 20%);

  height: fit-content;

  &:hover {
    background: rgb(253, 84, 120);
    background: -moz-linear-gradient(133deg, rgba(253, 84, 120, 1) 0%, rgba(255, 105, 62, 1) 100%);
    background: -webkit-linear-gradient(133deg, rgba(253, 84, 120, 1) 0%, rgba(255, 105, 62, 1) 100%);
    background: linear-gradient(133deg, rgba(253, 84, 120, 1) 0%, rgba(255, 105, 62, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fd5478",endColorstr="#ff693e",GradientType=1);

    -webkit-box-shadow: 0 6px 12px -2px #ff673e;
    -moz-box-shadow: 0 6px 12px -2px #ff673e;
    box-shadow: 0 6px 12px -2px #ff673e;

    border: 1px solid hsl(4, 100%, 67%);
  }
`

const MainButton = (props) => {
  return <Button {...props}>{props.children}</Button>
}

export default MainButton
