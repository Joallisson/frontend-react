import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #20295f;
    border-bottom: 5px solid #ee6b26;

    display: flex;
`

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img{
        width: 100px;

    }
`

export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a{
        color: #fff;
        font-weight: bold;
        text-decoration: none;
        margin: 10px;

        &:hover{
            color: #ee6b26;
        }
    }

    #notification{
        background: none;
        border: none;
        cursor: pointer;

      img{
        width: 30px;
      }

      span{
          background: #fff;
          color: #ee6b26;
          padding: 3px 7px;
          border-radius: 50%;
          position: relative;
          top: -30px;
          right: 15px;
      }

      &:hover{
          opacity: 0.5;
      }
    }

    .dividir::after{
        content: '|';
        margin: 10px;
        color: #fff;
    }

    button{
        background: none;
        border: none;
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        padding: 10px;

        &:hover{
            color: #ee6b26;
        }
    }
    
`
