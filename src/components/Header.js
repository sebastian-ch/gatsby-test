import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100wh;

`
const Title = styled.div`
    
    align-content: center;
    color: #edcbb1;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 75px;
    text-align: center;
    margin: 0;
    padding: 0;

    
`
const ListWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
    width: 400px;
    


`

const Sub = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    margin: 0;
    padding: 0;
    color: #929982;
    text-align: center;
    align-items: center;
    

    &:hover {
        -webkit-animation-name: wiggle;
    -ms-animation-name: wiggle;
    -ms-animation-duration: 1000ms;
    -webkit-animation-duration: 1000ms;
    -webkit-animation-iteration-count: 1;
    -ms-animation-iteration-count: 1;
    -webkit-animation-timing-function: ease-in-out;
    -ms-animation-timing-function: ease-in-out;
    }

    @-webkit-keyframes wiggle {
    0% {-webkit-transform: rotate(10deg);}
    25% {-webkit-transform: rotate(-10deg);}
    50% {-webkit-transform: rotate(20deg);}
    75% {-webkit-transform: rotate(-5deg);}
    100% {-webkit-transform: rotate(0deg);}
    }

    @-ms-keyframes wiggle {
    0% {-ms-transform: rotate(1deg);}
    25% {-ms-transform: rotate(-1deg);}
    50% {-ms-transform: rotate(1.5deg);}
    75% {-ms-transform: rotate(-5deg);}
    100% {-ms-transform: rotate(0deg);}
    }

    @keyframes wiggle {
    0% {transform: rotate(10deg);}
    25% {transform: rotate(-10deg);}
    50% {transform: rotate(20deg);}
    75% {transform: rotate(-5deg);}
    100% {transform: rotate(0deg);}
    }
        }
   
`


export default class Header extends React.Component {

    render() {
        return (
            <Container>
                <Title>Sebastian Chance Hancock</Title>

                <ListWrap>
                    <Sub>Cartography</Sub>
                    <Sub>Data Visualization</Sub>
                    <Sub>Web Development</Sub>
                </ListWrap>
            </Container>
        )
    }
}