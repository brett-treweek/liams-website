import styled from 'styled-components'

export const StyledCard = styled.div`
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
        /* width: 0%; */
        margin: 0 20px,
    }

    h2{
        text-align: center;
        font-weight: 400;
    }

    p{
        text-align: justify;
        width: 80%;
        margin: 0 auto;
    }

    & > div{
        flex: 1;
    }
`