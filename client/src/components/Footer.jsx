import { Facebook, Instagram, MailOutline, Phone, Room, WhatsApp } from "@mui/icons-material"
import styled from "styled-components"
import payment from "../assets/payment.png"
import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: 'column'})}
    `

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    `

const Logo = styled.h1`
    
    `

const Desc = styled.p`
    margin: 20px 0px;
    `

const SocialContainer = styled.div`
    display: flex;
    `

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    `

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: 'none'})}
    `

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem  = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: '#e7f0f8'})}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>KIMI.</Logo>
                <Desc>
                    Quis eiusmod non et non ut id sint ea in. Do eiusmod laborum excepteur ex irure non consectetur ipsum esse. Amet irure duis quis enim occaecat aute aliquip velit cillum mollit occaecat excepteur incididunt nostrud. Excepteur qui ut id dolore consectetur est id amet est irure.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3b5999"><Facebook/></SocialIcon>
                    <SocialIcon color="e4405f"><Instagram/></SocialIcon>
                    <SocialIcon color="128c7e"><WhatsApp/></SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>ABOUT KIMI</Title>
                <List>
                    <ListItem>My Account</ListItem>
                    <ListItem>Sitemap</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Store Locator</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Delivery Information</ListItem>
                    <ListItem>Returns & Refunds</ListItem>
                    <ListItem>Cookies Settings</ListItem>
                    <ListItem>FAQs</ListItem>
                    <ListItem>Terms & Conditions</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact Us</Title>
                <ContactItem><Room style = {{marginRight:"10px"}}/>#1 Blenheim Road, Liverpool, UK</ContactItem>
                <ContactItem><Phone style = {{marginRight:"10px"}}/>+44 1632 960889</ContactItem>
                <ContactItem><MailOutline style = {{marginRight:"10px"}}/>contact@kimi.shop</ContactItem>
                <Payment src={payment}/>
            </Right>
        </Container>
    )
}

export default Footer
