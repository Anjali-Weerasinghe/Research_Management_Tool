import React, {Component} from 'react';
import axios from 'axios';


export default class AdminViewGroupDetails extends Component {

    constructor(props){
        super(props);
        this.state = {groupdetail: [], searchId:''};
 
    }

    //auto refreh the code
    componentDidMount(){
        axios.get('http://localhost:8070/groupdetail/').then(response=>{
            this.setState({groupdetail: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    // update code
    componentDidUpdate(){
        axios.get('http://localhost:8070/groupdetail/').then(response =>{
            this.setState({groupdetail:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    // delete 
    deleteSupervisor=(id)=>{
        axios.delete(`http://localhost:8070/groupdetail/delete/${id}`).then((res) =>{
            
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
        
        let filtermember1Name = this.state.groupdetail.filter((
            p)=>{
                return p.member1Name.indexOf(this.state.
                    searchId)!==-1;
            }
        );


        return (
            <div>

                <div>
                    <br></br>
                    <h2 id="headertext-Sup">
                        Manage Group Details
                    </h2>
                    <hr id="hr"></hr>
                </div>

                
                <div>

                    <input className="form-control" type = "search" 
                    placeholder="search by leader name" name="searchQuery" 
                    style={{width:"7cm", marginLeft:"10cm", marginTop:"1cm", borderRadius:"9px"}}  
                    value={this.state.searchId} 
                    onChange={this.searchSupervisorName.bind(this)} />
            
                </div>

                
                <div id="table1" >

                    <table id="journey_table" style={{textAlign:'center'}}>
                        <thead>

                            <tr style={{'textAlign':'left'}}>
                                <span >

                                    <span id="text1">Group_Details</span>

                                                          
                                    <br></br>
                                </span>
                            </tr>

                            <tr>

                                <th style={{'textAlign':'center'}}>Leader Name</th>
                                <th style={{'textAlign':'center'}}>Leader IT No</th>
                                <th style={{'textAlign':'center'}}>Member2 Name</th>
                                <th style={{'textAlign':'center'}}>Member2 IT No</th>
                                <th style={{'textAlign':'center'}}>Member3 Name</th>
                                <th style={{'textAlign':'center'}}>Member3 IT No</th>
                                <th style={{'textAlign':'center'}}>Member4 Name</th>
                                <th style={{'textAlign':'center'}}>Member4 IT No</th>
                                <th style={{'textAlign':'center'}}>Group ID</th>
                                <th style={{'textAlign':'center'}}>Status</th>
                                
                            </tr>

                        </thead>
                        
                        <tbody>

                            {filtermember1Name.map((p, index)=>{
                                return <tr key={index}>
                                     
                                    <td>{p.member1Name}</td>
                                    <td>{p.member1ITnumber}</td>
                                    <td>{p.member2Name}</td>
                                    <td>{p.member2ITnumber}</td>
                                    <td>{p.member3Name}</td>
                                    <td>{p.member3ITnumber}</td>
                                    <td>{p.member4Name}</td>
                                    <td>{p.member4ITnumber}</td>
                                    <td>{p.GroupID}</td>

                                    <td>
                                    <a className="btn btn-warning" id="btn9" href={`/dashboard/UpdateGroupId/${p._id}`}>
                                            <i class="fas fa-edit "></i>&nbsp;&nbsp;Edit
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