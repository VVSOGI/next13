import styled from '@emotion/styled'

const Contents = styled.div`
    display: flex;
    margin-bottom: 18px;
    align-items: center;
`

const Title = styled.h1`
    margin-right: 10px;
`

const Button = styled.button`
    padding: 5px 20px;
    background-color: #fff;
    outline: none;
    border: 1px solid #000;
    cursor: pointer;
    border-radius: 2px;

    :hover {
        background-color: #000;
        color: #fff;
    }
`

export { Contents, Title, Button }
