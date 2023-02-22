import React from 'react'
import styled from 'styled-components';

const Tag = ({title, Icon}) => {
  return (
    <Container>
        {title && <strong>{title}</strong>}
        {Icon && <Icon/>}

    </Container>
  )
}

export default Tag;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.45rem 0.75rem;
  border-radius: 5rem;
  background-color: #ffffff68;
  width: fit-content;
  font-size: .8rem;
`