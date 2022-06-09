import styled from 'styled-components'

export const ProjectsWrapper = styled.div``

export const ProjectsTitle = styled.h2`
  margin-bottom: 1rem;
`

export const StyledProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 7rem;
  grid-row-gap: 2rem;
  justify-content: center;
`

export const StyledProjectCard = styled.div`
  position: relative;
  width: 250px;
  height: 280px;
  display: flex;
  flex-direction:column;
  gap: 1rem;
`

export const ProjectDescription = styled.p``

export const ProjectImage = styled.img`
  display: block;
  max-width: 100%;
  height: 150px;
  width: 250px;
  border-radius: 0.5rem;
`

export const StyledIcons = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  gap: 0.3rem;
`

export const Icon = styled.img`
  width: 25px;
  height: 25px;
`
export const LinksIcons = styled(StyledIcons)`
  gap: 0.3rem;
  right: 0;
  > * {
    font-size: 1.5rem;
  }
`
