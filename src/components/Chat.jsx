import React, { useContext } from 'react'
import Cam from "../img/cam.png";
import User from "../img/user.png";
import More from "../img/more.png";
import Messages from './Messages';
import Input from "./Input";
import { ChatContext } from '../context/ChatContext';


const Chat = () => {
  const {data} = useContext(ChatContext);
  return (
    <div className='chat'>
      <div className="chatInfo">
       <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={User} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat