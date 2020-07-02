import React, { Component } from 'react';
import _ from 'lodash';
// import PropTypes from 'prop-types';

class Pagination extends Component {
    render() { 
        const { itemsCount, pageSize, onPageChange, currentPage } = this.props;
        const pagesCount = Math.ceil(itemsCount / pageSize);
        if (pagesCount === 1){ return null }
        const pages = _.range(1,pagesCount + 1);

        return ( 
            <React.Fragment>
                <div className="container">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            {pages.map(page => 
                                <li key={page}><button className={currentPage === page ? "page-link bg-primary text-white active" : "page-link"} onClick={() => onPageChange(page)} >{page}</button></li>
                            )}
                        </ul>
                    </nav>
                </div>
            </React.Fragment>
         );
    }
}

// Pagination.propTypes = {
//     itemsCount: PropTypes.number.isRequired,
//     pageSize: PropTypes.number.isRequired,
//     onPageChange: PropTypes.number.isRequired,
//     currentPage: PropTypes.number.isRequired
// }
export default Pagination;