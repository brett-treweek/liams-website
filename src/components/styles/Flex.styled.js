import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: ${({jc}) => jc};

`