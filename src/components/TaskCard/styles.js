import styled from "styled-components";

export const Container = styled.div`
    width: 250px;
    height: 200px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.23);
    border-radius: 10px;
    margin: 20px;
    margin-top: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: ${(props) => (props.done ? 0.5 : 1)};

    &:hover{
        opacity: 0.5;
    }
`

export const TopCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h3{
        text-align: center;
    }
`

export const BottomCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    
    strong{
        font-weight: bold;
        color: #EE6B26;
    }

    span{
        color: #707070;
    }
`