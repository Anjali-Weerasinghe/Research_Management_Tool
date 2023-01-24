import React, { Component } from 'react';
import axios from 'axios';

export default class EditRequestSupervisor extends Component {

    constructor(props) {
        super(props);

        
        this.onChangeresearchTopic = this.onChangeresearchTopic.bind(this);
        this.onChangeresearch_area = this.onChangeresearch_area.bind(this);
        this.onChangesupervisor_name = this.onChangesupervisor_name.bind(this);
        this.onChangeRequestmessage = this.onChangeRequestmessage.bind(this);
        this.onChangeGroupLeader = this.onChangeGroupLeader.bind(this);
        this.onChangeGroupLeaderITnumber = this.onChangeGroupLeaderITnumber.bind(this);
        this.onChangesdate = this.onChangesdate.bind(this);
        this.onChangeapproval = this.onChangeapproval.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            researchTopic:'',
            research_area:'',
            supervisor_name:'',
            Requestmessage:'',
            GroupLeader:'',
            GroupLeaderITnumber:'',
            sdate:'',
            approval:''


            
        };

    }

    componentDidMount(){
        axios.get('http://localhost:8070/requestSupervisor/get/' + this.props.match.params.id)
            .then(response =>{
                this.setState({

                    researchTopic:response.data.requestSupervisor.researchTopic,
                    research_area:response.data.requestSupervisor.research_area,
                    supervisor_name:response.data.requestSupervisor.supervisor_name,
                    Requestmessage:response.data.requestSupervisor.Requestmessage,
                    GroupLeader:response.data.requestSupervisor.GroupLeader,
                    GroupLeaderITnumber:response.data.requestSupervisor.GroupLeaderITnumber,
                    sdate:response.data.requestSupervisor.sdate,
                    approval:response.data.requestSupervisor.approval,
                    
                })
            })
            .catch(function(error){
                console.log(error)
            });
    }

    onChangeresearchTopic(e){
        this.setState({researchTopic:e.target.value});
    }
    onChangeresearch_area(e){
        this.setState({research_area:e.target.value});
    }
    onChangesupervisor_name(e){
        this.setState({supervisor_name:e.target.value});
    }
    onChangeRequestmessage(e){
        this.setState({Requestmessage:e.target.value});
    }
    onChangeGroupLeader(e){
        this.setState({GroupLeader:e.target.value});
    }
    onChangeGroupLeaderITnumber(e){
        this.setState({GroupLeaderITnumber:e.target.value});
    }
    onChangesdate(e){
        this.setState({sdate:e.target.value});
    }
    onChangeapproval(e){
        this.setState({approval:e.target.value});
    }
    


    onSubmit(e){
        e.preventDefault();
        const obj = {
           
            researchTopic: this.state.researchTopic, 
            research_area: this.state.research_area, 
            supervisor_name: this.state.supervisor_name,
            Requestmessage: this.state.Requestmessage,
            GroupLeader: this.state.GroupLeader,
            GroupLeaderITnumber: this.state.GroupLeaderITnumber,
            sdate: this.state.sdate,
            approval: this.state.approval,

        };

        axios.put("http://localhost:8070/requestSupervisor/update/"+this.props.match.params.id, obj)
        .then(res =>console.log(res.data),
        alert("Update Successfully"));

        this.props.history.push('/dashboard/viewSupervisorRequest');
    }





    render() {
        return(

            <div className ="form_journey">

                <br></br>
                <br></br>
                <h2 id="headertext">
                    Edit Supervisor Details
                </h2>
           
                <form onSubmit={this.onSubmit}  id="form_journey">

                <div className="row" required>
                        <label htmlFor="route">Research Topic</label>
                        <input type="text" className="form-control" id="researchTopic" placeholder="" readOnly
                          value={this.state.researchTopic}
                          onChange = {this.onChangeresearchTopic}
                        />
                    </div>


                    <div className="row" required>
                        <label htmlFor="route">Research Area</label>
                        <input type="text" className="form-control" id="research_area" placeholder="" readOnly
                          value={this.state.research_area}
                          onChange = {this.onChangeresearch_area}
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="route">Supervisor Name</label>
                        <input type="text" className="form-control" id="supervisor_name" placeholder="" readOnly
                          value={this.state.supervisor_name}
                          onChange = {this.onChangesupervisor_name}
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="passenger_id">Requestmessage</label>
                        <input type="text" className="form-control" id="Requestmessage" placeholder="" readOnly
                         value={this.state.Requestmessage}
                         onChange = {this.onChangeRequestmessage}
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="passenger_id">GroupLeader</label>
                        <input type="text" className="form-control" id="GroupLeader" placeholder="" readOnly
                         value={this.state.GroupLeader}
                         onChange = {this.onChangeGroupLeader}
                        />
                    </div>


                    <div className="row" required>
                        <label htmlFor="from">GroupLeaderITnumber</label>
                        <input type="text" className="form-control" id="GroupLeaderITnumber"  placeholder="" readOnly
                            value={this.state.GroupLeaderITnumber}
                            onChange = {this.onChangeGroupLeaderITnumber}
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="from">Date</label>
                        <input type="date" className="form-control" id="sdate"  placeholder="" readOnly
                            value={this.state.sdate}
                            onChange = {this.onChangesdate}
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="from">Approval</label>
                        {/* <input type="text" className="form-control" id="approval"  placeholder="" 
                            value={this.state.approval}
                            onChange = {this.onChangeapproval}
                        /> */}

                        <select className="form-control" id="approval" required  style={{height:"1cm"}}
                                value={this.state.approval}
                                onChange = {this.onChangeapproval}
                            >
                                <option>Select </option>
                                <option value="Approved">Approved</option>
                                <option value="Not-Approved">Not Approved</option>
                                
                            </select>
                    </div>


                    
                    <button type="reset"  id = "#">Reset</button>

                    <button type="submit">Edit</button>
                    <br/><br/>

                </form>

                
                

            </div>
            
        )
    }
}