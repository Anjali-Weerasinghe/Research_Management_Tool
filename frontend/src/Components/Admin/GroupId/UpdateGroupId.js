import React, { Component } from 'react';
import axios from 'axios';

export default class UpdateGroupId extends Component {

    constructor(props) {
        super(props);

        
        this.onChangemember1Name = this.onChangemember1Name.bind(this);
        this.onChangeGroupID = this.onChangeGroupID.bind(this);
        this.onChangemember2Name = this.onChangemember2Name.bind(this);
        this.onChangemember3Name = this.onChangemember3Name.bind(this);
        this.onChangemember4Name = this.onChangemember4Name.bind(this);
        this.onChangemember1email = this.onChangemember1email.bind(this);
        this.onChangemember2email = this.onChangemember2email.bind(this);
        this.onChangemember3email = this.onChangemember3email.bind(this);
        this.onChangemember4email = this.onChangemember4email.bind(this);
        this.onChangemember1phoneNumber = this.onChangemember1phoneNumber.bind(this);
        this.onChangemember2phoneNumber = this.onChangemember2phoneNumber.bind(this);
        this.onChangemember3phoneNumber = this.onChangemember3phoneNumber.bind(this);
        this.onChangemember4phoneNumber = this.onChangemember4phoneNumber.bind(this);
        this.onChangemember1ITnumber = this.onChangemember1ITnumber.bind(this);
        this.onChangemember2ITnumber = this.onChangemember2ITnumber.bind(this);
        this.onChangemember3ITnumber = this.onChangemember3ITnumber.bind(this);
        this.onChangemember4ITnumber = this.onChangemember4ITnumber.bind(this);

        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            member1Name:'',
            GroupID:'',
            member2Name:'',
            member4Name:'',
            member1email:'',
            member3Name:'',
            member2email:'',
            member3email:'',
            member4email:'',
            member1phoneNumber:'',
            member2phoneNumber:'',
            member3phoneNumber:'',
            member4phoneNumber:'',
            member1ITnumber:'',
            member2ITnumber:'',
            member3ITnumber:'',
            member4ITnumber:''

            
        };

    }

    componentDidMount(){
        axios.get('http://localhost:8070/groupDetail/get/' + this.props.match.params.id)
            .then(response =>{
                this.setState({

                    member1Name:response.data.groupDetail.member1Name,
                    GroupID:response.data.groupDetail.GroupID,
                    member2Name:response.data.groupDetail.member2Name,
                    member3Name:response.data.groupDetail.member3Name,
                    member4Name:response.data.groupDetail.member4Name,
                    member1email:response.data.groupDetail.member1email,
                    member2email:response.data.groupDetail.member2email,
                    member3email:response.data.groupDetail.member3email,
                    member4email:response.data.groupDetail.member4email,
                    member1phoneNumber:response.data.groupDetail.member1phoneNumber,
                    member2phoneNumber:response.data.groupDetail.member2phoneNumber,
                    member3phoneNumber:response.data.groupDetail.member3phoneNumber,
                    member4phoneNumber:response.data.groupDetail.member4phoneNumber,
                    member1ITnumber:response.data.groupDetail. member1ITnumber,
                    member2ITnumber:response.data.groupDetail. member2ITnumber,
                    member3ITnumber:response.data.groupDetail. member3ITnumber,
                    member4ITnumber:response.data.groupDetail. member4ITnumber,
                    
                    
                })
            })
            .catch(function(error){
                console.log(error)
            });
    }

    onChangemember1Name(e){
        this.setState({member1Name:e.target.value});
    }
    onChangeGroupID(e){
        this.setState({GroupID:e.target.value});
    }
    onChangemember2Name(e){
        this.setState({member2Name:e.target.value});
    }
    onChangemember3Name(e){
        this.setState({member3Name:e.target.value});
    }
    onChangemember4Name(e){
        this.setState({member4Name:e.target.value});
    }
    onChangemember1email(e){
        this.setState({member1email:e.target.value});
    }
    onChangemember2email(e){
        this.setState({member2email:e.target.value});
    }
    onChangemember3email(e){
        this.setState({member3email:e.target.value});
    }
    onChangemember4email(e){
        this.setState({member4email:e.target.value});
    }
    onChangemember1phoneNumber(e){
        this.setState({member1phoneNumber:e.target.value});
    }
    onChangemember2phoneNumber(e){
        this.setState({member2phoneNumber:e.target.value});
    }
    onChangemember3phoneNumber(e){
        this.setState({member3phoneNumber:e.target.value});
    }
    onChangemember4phoneNumber(e){
        this.setState({member4phoneNumber:e.target.value});
    }
    onChangemember1ITnumber(e){
        this.setState({member1ITnumber:e.target.value});
    }
    onChangemember2ITnumber(e){
        this.setState({member2ITnumber:e.target.value});
    }
    onChangemember3ITnumber(e){
        this.setState({member3ITnumber:e.target.value});
    }
    onChangemember4ITnumber(e){
        this.setState({member4ITnumber:e.target.value});
    }

    


    onSubmit(e){
        e.preventDefault();
        const obj = {
           
            member1Name: this.state.member1Name, 
            GroupID: this.state.GroupID, 
            member2Name: this.state.member2Name, 
            member3Name: this.state.member3Name, 
            member4Name: this.state.member4Name, 
            member1email: this.state.member1email, 
            member2email: this.state.member2email, 
            member3email: this.state.member3email, 
            member4email: this.state.member4email, 
            member1phoneNumber: this.state.member1phoneNumber,
            member2phoneNumber: this.state.member2phoneNumber,
            member3phoneNumber: this.state.member3phoneNumber,
            member4phoneNumber: this.state.member4phoneNumber,
            member1ITnumber: this.state.member1ITnumber,
            member2ITnumber: this.state.member2ITnumber,
            member3ITnumber: this.state.member3ITnumber,
            member4ITnumber: this.state.member4ITnumber,
           

        };

        axios.put("http://localhost:8070/groupDetail/update/"+this.props.match.params.id, obj)
        .then(res =>console.log(res.data),
        alert("Update Successfully"));

        this.props.history.push('/dashboard/viewSupervisorRequest');
    }





    render() {
        return(

            <div className ="form_journey">

            <br></br>
            <br></br>
            <h2 id="headertext-Sup">
                Edit Group Id
            </h2>
            <hr id="hr"></hr>
            <br></br>
           
                <form onSubmit={this.onSubmit}  id="form_journey" style={{'marginLeft':'15cm'}}>



                    <div className="row" required>
                        <label htmlFor="route">Group ID</label>
                        <input type="text" className="form-control" id="GroupID" placeholder="RG####" 
                          value={this.state.GroupID}
                          onChange = {this.onChangeGroupID}
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="route">Group Leader Name</label>
                        <input type="text" className="form-control" id="member1Name" placeholder="" readOnly
                          value={this.state.member1Name}
                          onChange = {this.onChangemember1Name}
                        />
                    </div>

                    <div className="row">
                    <label htmlFor="route">Leader Email </label>
                    <input type="text" className="form-control" id="member1email" placeholder="" readOnly
                     value={this.state.member1email}
                     onChange = {this.onChangemember1email} 
                    />
                </div>

                <div className="row">
                    <label htmlFor="route">Leader IT Number </label>
                    <input type="text" className="form-control" id="member1ITnumber" placeholder="" readOnly
                     value={this.state.member1ITnumber}
                     onChange = {this.onChangemember1ITnumber}  
                    />
                </div>


                <div className="row">
                    <label htmlFor="route">Leader Phone Number </label>
                    <input type="text" className="form-control" id="member1phoneNumber" placeholder="" readOnly
                     value={this.state.member1phoneNumber}
                     onChange = {this.onChangemember1phoneNumber}   
                    />
                </div>

                <div className="row" required>
                        <label htmlFor="route">Member 2 Name</label>
                        <input type="text" className="form-control" id="member2Name" placeholder="" readOnly
                          value={this.state.member2Name}
                          onChange = {this.onChangemember2Name}
                        />
                    </div>

                    <div className="row">
                    <label htmlFor="route">Member 2 Email </label>
                    <input type="text" className="form-control" id="member2email" placeholder="" readOnly
                     value={this.state.member2email}
                     onChange = {this.onChangemember2email} 
                    />
                </div>

                <div className="row">
                    <label htmlFor="route">Member 2 IT Number </label>
                    <input type="text" className="form-control" id="member2ITnumber" placeholder="" readOnly
                     value={this.state.member2ITnumber}
                     onChange = {this.onChangemember2ITnumber}  
                    />
                </div>


                <div className="row">
                    <label htmlFor="route">Member 2 Phone Number </label>
                    <input type="text" className="form-control" id="member2phoneNumber" placeholder="" readOnly
                     value={this.state.member2phoneNumber}
                     onChange = {this.onChangemember2phoneNumber}   
                    />
                </div>

                

                <div className="row" required>
                        <label htmlFor="route">Member 3 Name</label>
                        <input type="text" className="form-control" id="member3Name" placeholder="" readOnly
                          value={this.state.member3Name}
                          onChange = {this.onChangemember3Name}
                        />
                    </div>

                    <div className="row">
                    <label htmlFor="route">Member 3 Email </label>
                    <input type="text" className="form-control" id="member3email" placeholder="" readOnly
                     value={this.state.member3email}
                     onChange = {this.onChangemember3email} 
                    />
                </div>

                <div className="row">
                    <label htmlFor="route">Member 3 IT Number </label>
                    <input type="text" className="form-control" id="member3ITnumber" placeholder="" readOnly
                     value={this.state.member3ITnumber}
                     onChange = {this.onChangemember3ITnumber}  
                    />
                </div>


                <div className="row">
                    <label htmlFor="route">Member 3 Phone Number </label>
                    <input type="text" className="form-control" id="member3phoneNumber" placeholder="" readOnly
                     value={this.state.member3phoneNumber}
                     onChange = {this.onChangemember3phoneNumber}   
                    />
                </div>

                    

                <div className="row" required>
                        <label htmlFor="route">Member 4 Name</label>
                        <input type="text" className="form-control" id="member4Name" placeholder="" readOnly
                          value={this.state.member4Name}
                          onChange = {this.onChangemember4Name}
                        />
                    </div>

                    <div className="row">
                    <label htmlFor="route">Member 4 Email </label>
                    <input type="text" className="form-control" id="member4email" placeholder="" readOnly
                     value={this.state.member4email}
                     onChange = {this.onChangemember4email} 
                    />
                </div>

                <div className="row">
                    <label htmlFor="route">Member 4 IT Number </label>
                    <input type="text" className="form-control" id="member4ITnumber" placeholder="" readOnly
                     value={this.state.member4ITnumber}
                     onChange = {this.onChangemember4ITnumber}  
                    />
                </div>


                <div className="row">
                    <label htmlFor="route">Member 4 Phone Number </label>
                    <input type="text" className="form-control" id="member4phoneNumber" placeholder="" readOnly
                     value={this.state.member4phoneNumber}
                     onChange = {this.onChangemember4phoneNumber}   
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