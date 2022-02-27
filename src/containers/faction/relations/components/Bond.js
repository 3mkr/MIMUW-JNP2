import styled from 'styled-components';

const chooseColor = (rel) => {
    switch (rel) {
        case -3:
            return  '#FF0000';
        case -2:
            return  '#ff4500';
        case -1:
            return  '#ffa500';
        case 1:
            return  '#90ee90';
        case 2:
            return  '#3cb371';
        case 3:
            return  '#32cd32';
        default:
            return  '#6495ED';

    }
};

const Bond = styled.div`
    color: ${props => chooseColor(props.relation)};
`;

export default Bond;