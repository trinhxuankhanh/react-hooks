import React from 'react';
import ProgTypes from 'prop-types'

const Pagination = (props) => {
    const { pagination, onPageChange } = props
    
    const { _page, _limit, _totalRows } = pagination

    const handlePageChange = newPage => {
        if(onPageChange) onPageChange(newPage)
    }

    return (
        <div>
            <button
            disabled={_page <= 1}
            onClick={() => handlePageChange(_page - 1)}>
                Pre
            </button>
            <button
            disabled={_page >= Math.ceil(_totalRows / _limit)}
            onClick={() => handlePageChange(_page + 1)}>
                Next
            </button>
        </div>
    );
}

Pagination.propTypes = {
    pagination: ProgTypes.object.isRequired,
    onPageChange: ProgTypes.func
}

Pagination.defaultProps = {
    onPageChange: null
}
 
export default Pagination;