import React,{Component} from "react";
import {Link} from "react-router-dom";
import {signin,signInWithGoogle, signInWithGitHub} from "../helpers/auth";

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            error:null,
            email:"",
            password:""
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.googleSignIn=this.googleSignIn.bind(this);
        this.githubSignIn=this.githubSignIn.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    async handleSubmit(event){
        event.preventDefault();
        this.setState({error:""});
        try{
            await signin(this.state.email,this.state.password);
        }catch(error){
            this.setState({error:error.message});
        }
    }
    async googleSignIn(){
        try{
            await signInWithGoogle();
        }catch(error){
            this.setState({error:error.message});
        }
    }
    async githubSignIn(){
        try{
            await signInWithGitHub();
        }catch(error){
            this.setState({error:error.message});
        }
    }
    render(){
        return(
            <div>
                <form autoComplete="off"
                onSubmit={this.handleSubmit}
            >
                <h1>
                    Login Here
                </h1>
                <p>
                    Just Fill The Details To login.
                </p>
                <div>
                    <input placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email} />
                </div>
                <div>
                    <input placeholder="Password" name="password" type="password" onChange={this.handleChange} value={this.state.password}/>
                </div>
                <div>
                    {this.state.error?(<p>{this.state.error}</p>):null}
                    <button type="submit">Login</button>
                </div>
                <p>Other options</p>
                <button type="button" onClick={this.googleSignIn}>Sign In With Google</button>
                <button type="button" onClick={this.githubSignIn}>Sign In With GitHub</button>
                <p>If You Don't Have A Account? <Link to ="/signup">SignUp</Link></p>
            </form>
            </div>
        )
    }
}