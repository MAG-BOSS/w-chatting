import React, {Component} from "react";
import {Link} from "react-router-dom";
import {signup, signInWithGoogle,signInWithGitHub} from "../helpers/auth";
export default class SignUp extends Component{
    constructor(){
        super();
        this.state={
            error:null,
            email:'',
            password:''
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
        this.setState({error:''});
        try{
            await signup(this.state.email,this.state.password);
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
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>
                        Welcome To
                        <Link to="/">w-chatting </Link>
                    </h1>
                    <p>Just Fill the Details and Get Started By Creating Account</p>
                    <div>
                        <input placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
                    </div>
                    <div>
                        <input placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
                    </div>
                    <div>
                        {this.state.error ? <p>{this.state.error}</p>:null}
                        <button type="submit">Sign Up</button>
                    </div>
                    <p>More Options:</p>
                    <button type="button" onClick={this.googleSignIn}>Sign Up With Google</button>
                    <button typr="button" onClick={this.githubSignIn}>Sign Up With GitHub</button>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                    
                </form>
            </div>
        )
    }
}