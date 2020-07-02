import React, { Component } from 'react';

class LoadCrimes extends Component {
    state = {  }
    render() { 
        const { onSubmit } = this.props;
        return ( 
            <React.Fragment>
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <h1>Welcome to Public Street Level Crimes</h1>
                    </div>
                    <div className="col-md-12 text-center">
                        <p>Here you will be able to load crimes for a specific month.</p>     
                    </div>
                </div>
                <div className="cotainer">
                    <div className="row justify-content-center">
                        <div className="col-md-8  col-sm-10">
                            <div className="card ">
                                <div className="card-header">Please enter a date in a year-month(XXXX-XX) format:</div>
                                <div className="card-body">
                                    <form onSubmit={onSubmit}>
                                        <div className="form-group row">
                                            <label htmlFor="date" className="col-md-4 col-form-label text-md-right">Date</label>
                                            <div className="col-md-6">
                                                <input type="text" id="date" className="form-control" name="date" required autoFocus />
                                            </div>
                                        </div>
            
                                        <div className="col-md-6 offset-md-4">
                                            <button type="submit" className="btn btn-primary">
                                                Load
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default LoadCrimes;