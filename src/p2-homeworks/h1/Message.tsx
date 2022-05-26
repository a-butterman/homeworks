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
            <div className={mess.body__avatar}>
                <img className={mess.avatar} src={props.avatar} alt="avatar"></img>
            </div>
            <div className={mess.cloud}>
                <div className={mess.cloud__name}>{props.name}</div>
                <div className={mess.cloud__text}>{props.message}</div>
                <div className={mess.cloud__time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
