import React, { Component } from 'react';
import axios from 'axios';

export default class UpdatePanelMember extends Component {

    constructor(props) {
        super(props);

        
        this.onChangeGroup_Id = this.onChangeGroup_Id.bind(this);
        this.onChangepanelmember1 = this.onChangepanelmember1.bind(this);
        this.onChangepanelmember2 = this.onChangepanelmember2.bind(this);
        this.onChangepanelmember3 = this.onChangepanelmember3.bind(this);
        this.onChangepanelmember4 = this.onChangepanelmember4.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            Group_Id:'',
            panelmember1:'',
            panelmember2:'',
            panelmember3:'',
            panelmember4:''

            
        };

    }

    componentDidMount(){
        axios.get('http://localhost:8070/panelMembers/get/' + this.props.match.params.id)
            .then(response =>{
                this.setState({

                    Group_Id:response.data.panelMembers.Group_Id,
                    panelmember1:response.data.panelMembers.panelmember1,
                    panelmember2:response.data.panelMembers.panelmember2,
                    panelmember3:response.data.panelMembers.panelmember3,
                    panelmember4:response.data.panelMembers.panelmember4,
                   
                    
                })
            })
            .catch(function(error){
                console.log(error)
            });
    }

    onChangeGroup_Id(e){
        this.setState({Group_Id:e.target.value});
    }
    onChangepanelmember1(e){
        this.setState({panelmember1:e.target.value});
    }
    onChangepanelmember2(e){
        this.setState({panelmember2:e.target.value});
    }
    onChangepanelmember3(e){
        this.setState({panelmember3:e.target.value});
    }
    onChangepanelmember4(e){
        this.setState({panelmember4:e.target.value});
    }
 
    


    onSubmit(e){
        e.preventDefault();
        const obj = {
           
            Group_Id: this.state.Group_Id, 
            panelmember1: this.state.panelmember1, 
            panelmember2: this.state.panelmember2,
            panelmember3: this.state.panelmember3,
            panelmember4: this.state.panelmember4

        };

        axios.put("http://localhost:8070/panelMembers/update/"+this.props.match.params.id, obj)
        .then(res =>console.log(res.data),
        alert("Update Successfully"));

        this.props.history.push('/dashboard/ViewPanelMember');
    }





    render() {
        return(

            <div className ="form_journey">

            <br></br>
            <br></br>
            <h2 id="headertext-Sup" style={{marginLeft:'15cm'}}>
                Update Pannel Member Details
            </h2>
            <hr id="hr"></hr>
            <br></br>
           
                <form onSubmit={this.onSubmit}  id="form_journey" style={{marginLeft:'14cm'}}>

                <div className="row" required>
                        <label htmlFor="route">Research Topic</label>
                        <input type="text" className="form-control" id="Group_Id" placeholder="" 
                        value={this.state.Group_Id}
                          onChange = {this.onChangeGroup_Id}
                        />
                    </div>


                    <div className="row" required>
                        <label htmlFor="route">Research Area</label>
                        <input type="text" className="form-control" id="panelmember1" placeholder="" 
                          value={this.state.panelmember1}
                          onChange = {this.onChangepanelmember1}
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="route">Supervisor Name</label>
                        <input type="text" className="form-control" id="panelmember2" placeholder="" 
                          value={this.state.panelmember2}
                          onChange = {this.onChangepanelmember2}
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="passenger_id">panelmember3</label>
                        <input type="text" className="form-control" id="panelmember3" placeholder="" 
                         value={this.state.panelmember3}
                         onChange = {this.onChangepanelmember3}
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="passenger_id">panelmember4</label>
                        <input type="text" className="form-control" id="panelmember4" placeholder="" 
                         value={this.state.panelmember4}
                         onChange = {this.onChangepanelmember4}
                        />
                    </div>




                    
                    <button type="reset"  id = "#">Reset</button>

                    <button type="submit">Edit</button>
                    <br/><br/>

                </form>

                
                

            </div>
            
        )
    }
}