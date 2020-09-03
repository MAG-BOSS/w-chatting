import React,{Component} from "react";
import Header from "../components/Header";
import {auth} from "../services/firebase";
import {db} from "../services/firebase";

export default class Chat extends Component{
    construtor(props){
        super(props);
        this.state={
            user:auth().currentUser,
            chats:[],
            content:'',
            readError:null,
            writeError:null,
            loadingChats:false
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.myRef=React.createRef();
    }
    async componentDidMount(){
        this.setState({readError:null, loadingChats:true});
        const chatArea=this.myRef.current;
        try{
            db.ref("chats").on("value", snapshot=>{
                let chats=[];
                snapshot.forEach(snap)=>{
                    chats
                }
            })
        }
    }
}