import React, {Component} from 'react';
import axios from 'axios';

export default class ViewPanelMember extends Component {

    constructor(props){
        super(props);
        this.state = {supervisors: [], searchId:''};
 
    }

    //auto refreh the code
    componentDidMount(){
        axios.get('http://localhost:8070/panelMembers/').then(response=>{
            this.setState({supervisors: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    // update code
    componentDidUpdate(){
        axios.get('http://localhost:8070/panelMembers/').then(response =>{
            this.setState({supervisors:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    // delete 
    deleteSupervisor=(id)=>{
        axios.delete(`http://localhost:8070/panelMembers/delete/${id}`).then((res) =>{
            
                //alert("Delete Successfully");

                window.confirm("Do you need to delete! ?");
                
            })
        
    }


    addJourney(){
        this.props.history.push('/admin/SupervisorView');
    }

    searchSupervisorName(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});
    }


    

    render(){
        
        let filterGroup_Id = this.state.supervisors.filter((
            p)=>{
                return p.Group_Id.indexOf(this.state.
                    searchId)!==-1;
            }
        );


        return (
            <div>

                <div>
                    <br></br>
                    <h2 id="headertext-Sup" style={{marginLeft:'17cm'}}>
                        Manage Panel Members
                    </h2>
                    <hr id="hr"></hr>
                </div>
                
                <div>

                    <input className="form-control" type = "search" 
                    placeholder="search by group id" name="searchQuery" 
                    style={{width:"8cm", marginLeft:"29.5cm", marginTop:"1cm", borderRadius:"9px"}} 
                    value={this.state.searchId} 
                    onChange={this.searchSupervisorName.bind(this)} />
            
                </div>

               
                <div id="table1">

                    <table id="journey_table" style={{textAlign:'center'}}>
                        <thead>

                            <tr style={{'textAlign':'left'}}>
                                <span >
                                    <br></br>
                                    <span id="text1">Panel_Members</span>

                                                          

                                </span>
                            </tr>

                            <tr>

                                <th style={{'textAlign':'center'}}>Group Id</th>
                                <th style={{'textAlign':'center'}}>Panel Member 1</th>
                                <th style={{'textAlign':'center'}}>Panel Member 2</th>
                                <th style={{'textAlign':'center'}}>Panel Member 3</th>
                                <th style={{'textAlign':'center'}}>Panel Member 4</th>
                                <th style={{'textAlign':'center'}}>Status</th>
                                
                            </tr>

                        </thead>
                        
                        <tbody>

                            {filterGroup_Id.map((p, index)=>{
                                return <tr key={index}>
                                     
                                    <td>{p.Group_Id}</td>
                                    <td>{p.panelmember1}</td>
                                    <td>{p.panelmember2}</td>
                                    <td>{p.panelmember3}</td>
                                    <td>{p.panelmember4}</td>
                                    

                                    <td>
                                        <a className="btn btn-warning" id="btn6" href={`/dashboard/UpdatePanelMember/${p._id}`}>
                                            <i class="fas fa-edit "></i>&nbsp;&nbsp;Edit
                                        </a>
                                      
                                    
                                        <a className="btn btn-danger" id="btn7" onClick={() => this.deleteSupervisor(p._id)}>
                                            <i class="fa fa-trash blackiconcolor" aria-hidden="true"></i>&nbsp;&nbsp;Delete&nbsp;
                                        </a>
                                    </td>


                                </tr>
                            })}
                            
                        </tbody> 

                        

                    </table>
                </div>
            </div>
        );
    }
}