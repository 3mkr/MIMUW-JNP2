import styled from 'styled-components';

const Info = styled.div`
    display: ${props => props.isVisible === true ? 'block' : 'none'}
`;

export default Info;