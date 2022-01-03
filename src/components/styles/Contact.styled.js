import styled from 'styled-components'

export const StyledContact = styled.div`
width: 1100px;
max-width: 90%;
margin: auto;
margin-bottom: 20px;
padding: 40px;
text-align: center;
box-shadow: 0 0 10px rgba(0,0,0,0.15);
border-radius: 15px;
background-color: ${({ theme }) => theme.colors.body};


h1 {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 400;
    margin: 0 0 40px;
}

.textField{
    margin: 10px;
    max-width: 90%;
}

button {
    background-color: ${({ theme }) => theme.colors.secondary};
}
button:hover {
    background-color: ${({ theme }) => theme.colors.tertiary}
}

`