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

    
`

export const TopCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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