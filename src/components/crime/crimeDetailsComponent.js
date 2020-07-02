import React, { Component } from 'react';
import CrimeServices from './crimeServices';

class CrimeDetails extends Component {
    state = {
        crime: {
            'id':'',
            'category_id':'',
            'location_type':'',
            'latitude':'',
            'longitude':'',
            'street_name':'',
            'persistent_id':'',
            'month':''
        },
        outcomes: [],
        disabled:true
    }

    async componentDidMount(){
        const resp = await CrimeServices.crimeDetails(this.props.match.params.id);
        const crime = resp.crime;
        this.setState({ crime });
        const outcomes = resp.outcomes;
        this.setState({ outcomes });
    }
    handleEdit = () => {
        const disabled = false;
        this.setState({ disabled });
          
    }
    handleSave = async () => {

        const obj = {
            'id':document.getElementById('id').value,
            'category':document.getElementById('category').value,
            'location_type':document.getElementById('location_type').value,
            'latitude':document.getElementById('latitude').value,
            'longitude':document.getElementById('longitude').value,
            'street_name':document.getElementById('street_name').value,
            'month':document.getElementById('month').value
        }
        
        const resp = await CrimeServices.updateCrime(obj);
        const crime = resp.crime;
        this.setState({ crime });
        const outcomes = resp.outcomes;
        this.setState({ outcomes });
        const disabled = true;
        this.setState({ disabled });
        
    }
    handleCancel = () => {
        const disabled = true;
        this.setState({ disabled });
          
    }
    handleDelete = async id => {
        const prevOutcomes = [...this.state.outcomes];
        let outcomes = this.state.outcomes.filter(c => c.id !== id);
        this.setState({ outcomes });
        const crime = await CrimeServices.deleteCrime(id);
        if (!crime) {
            outcomes = prevOutcomes;
            this.setState({outcomes});
        } 
    }
    render() { 
        const { crime, outcomes, disabled:dis } = this.state;
        return ( 
            <React.Fragment>
            <div>
                <div className="container-fluid">
                    <div className="row custom-centered">
                        <div className="col align-self-center">
                            <center>
                                <fieldset>	                                    
                                    <form className="col-md-8 col-sm-9" id="editCrime">							
                                        <h3 className="text-uppercase pull-center">CRIME DETAILS</h3>	
                                            <div className="row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="id">ID</label>
                                                    <input type="text" name="id" id="id" className="form-control input-lg text-center" defaultValue={crime.id} disabled />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="category">Category</label>
                                                    <input type="text" name="category" id="category" className="form-control input-lg text-center edit" defaultValue={crime.category_id} disabled={dis} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="persistent_id">Persistent ID</label>
                                                    <input type="text" name="persistent_id" id="persistent_id" className="form-control input-lg text-center" defaultValue={crime.persistent_id} disabled /> 
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="location_type">Location Type</label>
                                                    <input type="text" name="location_type" id="location_type" className="form-control input-lg text-center edit" defaultValue={crime.location_type} disabled={dis} />
                                                </div>
                                                <div className="form-group col-md-8">
                                                    <label htmlFor="street_name">Street</label>
                                                    <input type="text" name="street_name" id="street_name" className="form-control input-lg text-center edit" defaultValue={crime.street_name} disabled={dis} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="longitud">Longitud</label>
                                                    <input type="text" name="longitude" id="longitude" className="form-control input-lg text-center edit" defaultValue={crime.longitude} disabled={dis} />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="latitude">Latitud</label>
                                                    <input type="text" name="latitude" id="latitude" className="form-control input-lg text-center edit" defaultValue={crime.latitude} disabled={dis} />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="month">Month</label>
                                                    <input type="text" name="month" id="month" className="form-control input-lg text-center edit" defaultValue={crime.month} disabled={dis} />
                                                </div>
                                            </div>
                                            <div className="row md-3">                                                
                                                <div className="col">
                                                    <button type="button" className="btn btn-secondary" id="cancelEdition" disabled={dis} onClick={() => this.handleCancel()}> CANCEL</button>
                                                </div>
                                                <div className="col">
                                                    <button type="button" className="btn btn-md btn-primary" id="saveEdition" disabled={dis} onClick={() => this.handleSave()} >SAVE</button>
                                                </div> 
                                                <div className="col">
                                                    <button type="button" className="btn btn-md btn-primary" id="editOutcomes" disabled={!dis} onClick={() => this.handleEdit()} >EDIT</button>
                                                </div>
                                                
                                            </div>
                                    </form>
                                    <div className="row col-md-8">
                                        <div className='col self-align-center'>
                                            <h4 className="text-uppercase col-md-10" > OUTCOMES</h4>
                                        </div>
                                        
                                        <table className="table table-striped col-md-12">
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Category</th>
                                                    <th scope="col">Month</th>
                                                    <th scope="col">Person ID</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {   outcomes.map(outcome => (
                                                    <tr key={outcome.id}>
                                                        <th scope="row">{outcome.id}</th>
                                                        <td>{outcome.category}</td>
                                                        <td>{outcome.date_1}</td>
                                                        <td>{outcome.person_id}</td>
                                                        <td><button id="cancelOutcomes" className="btn btn-md btn-secondary cancel" onClick={() => this.handleDelete(outcome.id)} disabled={dis}>DELETE</button></td>  
                                                    </tr>
                                                    )
                                                )}

                                            </tbody>
                                        </table>
                                    </div>
                                </fieldset>
                            </center>
                        </div>                        
                    </div>
                </div>
            </div>
            </React.Fragment>
         );
    }
}
 
export default CrimeDetails;