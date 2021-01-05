import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types'

const PostFiltersForm = (props) => {
    const [ searchTerm, setSearchTerm ] = useState('')
    const typingTimeoutRef = useRef(null)

    const { onSubmit } = props

    const handleSearch = e => {
        const { value } = e.target
        setSearchTerm(value)

        if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current)

        typingTimeoutRef.current = setTimeout(() => {
            if(onSubmit) onSubmit({ searchTerm: value })
        }, 300)
    }

    return <form>
        <input type="text" value={searchTerm} onChange={handleSearch}/>
    </form>;
}

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func
}

PostFiltersForm.defaultProps = {
    onSubmit: null
}
 
export default PostFiltersForm;