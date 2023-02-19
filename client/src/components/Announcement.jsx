import styled from "styled-components"

const Container = styled.div`
    height: 20px;
    background-color: #343a40;
    color: white;
    font-size: 0.7em;
    display: flex;
    align-items: center;
    justify-content: center
`
const LinkContainer = styled.link`
    color: white;
    text-decoration: white solid underline;
    text-underline-position: under;
    transition: all 0.5s ease;

    &:hover {
        /*text-decoration: none;*/
        transform: scale(1.1);
        color: #fca311;
        
    }
    margin-left: 5px;
    margin-right: 5px;
`

const Announcement = () => {
    return (
        <Container>
           <LinkContainer as='a' href='/subscribe'> SUBSCRIBE </LinkContainer>FOR 10% OFF YOUR FIRST ORDER
        </Container>
    )
}

export default Announcement
