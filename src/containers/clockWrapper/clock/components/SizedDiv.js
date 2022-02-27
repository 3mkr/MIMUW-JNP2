import styled from 'styled-components';

const SizedDiv= styled.div`
    width: ${props => props.width ? props.width + 'px' : 'auto'};
    height: ${props => props.heigth ? props.heigth + 'px' : 'auto'};
`;

export default SizedDiv;