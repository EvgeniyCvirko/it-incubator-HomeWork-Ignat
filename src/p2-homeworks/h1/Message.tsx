import React from 'react'
import s from './Message.module.css'

type MessagePropsType ={
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props:MessagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.img}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={s.block}>
                <p className={s.name}>{props.name}</p>
                <div><p className={s.text}>{props.message}</p></div>
                <p className={s.time}>{props.time}</p>
            </div>
        </div>
    )
}

export default Message
