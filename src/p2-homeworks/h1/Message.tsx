import React from 'react'
import style from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={style.container}>
            <div className={style.avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={style.incoming}>
                <div className={style.bubble}>
                    <div>
                        <div className={style.name}>
                            {props.name}
                        </div>
                        <div className={style.message}>
                            {props.message}
                        </div>
                    </div>
                    <div className={style.time}>
                        {props.time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message;
