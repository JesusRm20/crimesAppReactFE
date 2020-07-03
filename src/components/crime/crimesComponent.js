import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import ListGroup from './listGroup';
import Pagination from './pagination';
import { paginate } from './paginate';
import CrimeServices from './crimeServices';

class Crimes extends Component {
    state = {
        crimes: [],
        crime:[],
        categories: [],
        elements: [],
        selectedCategory:'allCategories',
        currentPage: 1,
        pageSize: 15,
        sortColumn: {path: '', order:''}
    }
    async componentDidMount() {
        const crimes = await CrimeServices.getCrimes();
        this.setState({crimes});

         const cat = [];
        
        crimes.map(c => {
              cat.push(c.category_id)
        });
        const categories = _.uniq(cat);
        this.setState({ categories });

        const elements = this.state.selectedCategory === 'allCategories' ?  this.state.crimes: null;
        this.setState({ elements });
    }
    filterCrimes = (crimes, cat) => {
        const categories = cat !== 'allCategories' ? crimes.filter(c => {
           if (c.category_id === cat){
               return c.category_id
           }
        }) : crimes;
        return categories;
    }
    handleSort = (path, sortColumn) => {
        if (sortColumn.path === path){
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        } else{
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.setState({sortColumn});
    }
    handlePageChange = page => {
        this.setState({ currentPage:page })
    }

    handlePageChange = page => {
        this.setState({ currentPage:page })
    }
    selectedCategoryChange = category  => {
        const selectedCategory = category;
        this.setState({ selectedCategory });

        const currentPage = 1;
        this.setState({ currentPage });

    }

    render() { 
        const { crimes, selectedCategory, sortColumn, currentPage, pageSize, categories } = this.state;
        const elements = selectedCategory !== 'allCategories' ? this.filterCrimes(crimes, selectedCategory) : crimes;
        const sorted = _.orderBy(elements,[sortColumn.path], [sortColumn.order])
        const rows = paginate(sorted, currentPage, pageSize);
        return ( 
            <React.Fragment>
                <div className='row'>
                    <div className="col-3 m-2">
                        <ListGroup 
                            allCategories={ categories } 
                            selectedCategory={ selectedCategory } 
                            onCategoryChange={ this.selectedCategoryChange} 
                        />
                    </div>
                    <div className="col m-4">
                        <p>Showing {rows.length} crimes in the database.</p>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" onClick={() => this.handleSort('id', sortColumn)}>#</th>
                                    <th scope="col" onClick={() => this.handleSort('category_id', sortColumn)}>Category</th>
                                    <th scope="col" onClick={() => this.handleSort('latitude', sortColumn)}>Latitud</th>
                                    <th scope="col" onClick={() => this.handleSort('longitude', sortColumn)}>Longitude</th>
                                    <th scope="col" onClick={() => this.handleSort('street_name', sortColumn)}>Street Name</th>
                                    <th scope="col">Outcome</th>
                                    <th scope="col" onClick={() => this.handleSort('month', sortColumn)}>Month</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map(out => (
                                    <tr key={out.id}>
                                        <td>{out.id}</td>
                                        <td>{out.category_id}</td>
                                        <td>{out.latitude}</td>
                                        <td>{out.longitude}</td>
                                        <td>{out.street_name}</td>
                                        <td>{out.outcome_status}</td>
                                        <td>{out.month}</td>
                                        <td>
                                            <Link to={{
                                                        pathname:'/crimeDetails/'+out.id,
                                                        crime: {
                                                            out,
                                                            }
                                                    }}> 
                                            <button className='btn btn-primary'>
                                                Details
                                            </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div>
                            <Pagination 
                                itemsCount={elements.length} 
                                pageSize={pageSize} 
                                currentPage={currentPage} 
                                onPageChange={this.handlePageChange} 
                            />
                        </div>
                    </div>
                    
                </div>
            </React.Fragment>
         );
    }
}
 
export default Crimes;