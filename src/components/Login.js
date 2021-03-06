import React,{Component} from 'react'
import logo from '../images/logo.jpg'
import {connect} from 'react-redux'
import {setAuthedUser } from  '../actions/autheduser'
import {Link} from 'react-router-dom'


class Login extends Component{  
    state={
        currentUser: null
    }
    
    handleChange = (e) => {
        console.log(e.target.value)
        const currentUser = e.target.value
        
        this.setState(() => ({
            currentUser
        }))

    }

    handleSubmit = (e) =>{
        const currentUser = this.state.currentUser
        const {dispatch} = this.props


        currentUser !== null && (
            dispatch(setAuthedUser(currentUser))
        )
    }

    render(){
        return(
            <div className="row">
            <div className="col s1 m3"></div>
            <div className="center col s10 m6">
                <div className="card">
                    <div className="title">
                        Welcome to Would You rather App<br/>
                        SignIn to continue
                    </div>
                    <div>
                        <img src={logo} alt={"logo"} />
                    </div>  
                    
                    <div className="input-field signin-select">
                        <select onChange={this.handleChange} defaultValue={"default"}>
                            <option value={"default"} disabled={true}>Choose User</option>
                            {this.props.users.map((user)=>(
                                <option value={user.id} key={user.id}>
                                        {user.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <Link to={'/'}>
                            <button 
                            className="waves-effect waves-light btn"
                            onClick={this.handleSubmit}
                            disabled={this.state.currentUser === null}
                            >Sign In</button>
                    </Link>
                </div>
            </div>
            <div className="col s1 m6"></div>
        </div>
        )
    }
}

function mapStateToProps({users}){
    return{
        users: Object.values(users)
    }
}

export default connect(mapStateToProps)(Login)