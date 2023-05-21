// (props is object containing all argument passed 
// so you can alsio write props as { all args passed }

import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('click');
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='red' text='Add' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'task Tracker',
}

// this defines the type of data and is req makes it compulsory
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// css in js
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header



// notes
// can put inline css in here