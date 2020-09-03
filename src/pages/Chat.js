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
                snapshot.forEach((snap)=>{
                    chats.push(snap.val());
                });
                chats.sort(function(a,b){return a.timestamp - b.timestamp})
                this.setState({chats});
                chatArea.scrollBy(0,chatArea.scrollHeight);
                this.setState({loadingChats:false});
            });
        }catch(error){
            this.setState({readError:error.message,loadingChats:false});
        }
    }
    handleChange(event){
        this.setState({
            content:event.target.value
        });
    }
    async handleSubmit(event){
        event.preventDefault();
        this.setState({writeError:null});
        const chatArea=this.myRef.current;
        try{
            await db.ref("chats").push({
                content:this.state.content,
                timestamp:Date.now(),
                uid:this.state.user.uid
            });
            this.setState({content:''});
            chatArea.scrollBy(0,chatArea.scrollHeight);

        }catch(error){
            this.setState({writeError:error.message});
        }
    }
    formatTime(timestamp){
        const d=new Date(timestamp);
        const time=
    }
}