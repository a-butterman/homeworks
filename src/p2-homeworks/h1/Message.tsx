import React from 'react'
import mess from './Message.module.css'

type MessagePropsType = {
    avatar: any
    name: string
    message: string
    time: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={mess.body}>
            <div>
                <img className={mess.avatar} src={props.avatar} alt="avatar"></img>
            </div>
            <div className={mess.cloud}>
                <div className={mess.name}>{props.name}</div>
                <div className={mess.message}>{props.message}</div>
                <div className={mess.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
