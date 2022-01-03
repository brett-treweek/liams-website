import styled from 'styled-components'

export const StyledCard = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    margin: 40px 0;
    padding: 40px;
    flex-direction: ${({layout}) => layout || 'row'};

    img {
    width: 500px;
    max-width: 80vw;
  }

    h2{
        text-align: center;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.secondary};
    }

    p{
        text-align: justify;
        width: 80%;
        margin: 0 auto;
    }

    & > div{
        flex: 1;
    }

    @media (max-width: 450px){
        flex-direction: column;
        padding: 20px;
        p{
            text-align: justify;
            font-size: 16px;
            margin: 10px auto;
        }
        h2{
            font-size: 25px;
        }
    }
`