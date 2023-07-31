import styled from '@emotion/styled'

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const ProjectId = styled.h3``

const Title = styled.span``

const ChangeTitleWrapper = styled.div``

const ChangeTitleInput = styled.input`
    padding: 0.5rem 2rem;
    margin-right: 0.5rem;
    border: 1px solid black;
    border-radius: 2px;
`

const ChangeTitleButton = styled.button`
    padding: 0.5rem 2rem;
    background-color: #fff;
    border: 1px solid black;
    border-radius: 2px;
    cursor: pointer;
    :hover {
        background-color: #000;
        color: #fff;
    }

    :active {
        background-color: #121212;
    }
`

export { Contents, ProjectId, Title, ChangeTitleWrapper, ChangeTitleInput, ChangeTitleButton }
