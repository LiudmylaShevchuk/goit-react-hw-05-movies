// import PropTypes from 'prop-types';
import { Form, Input, Button } from './Searcher.styled';


export const Searcher = ({ onChange, onSubmit }) => { 
    return (
        <Form onSubmit={ onSubmit}>
            <Input type="text" onChange={onChange} />
            <Button type="submit">Search</Button>
        </Form>
    );
};

// Searcher.propTypes = {
//     onChange: PropTypes.func.isRequired,
//     onSubmit:PropTypes.func.isRequired,
// };