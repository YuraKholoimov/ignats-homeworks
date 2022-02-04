import React from 'react'
import style from "./Message.module.css";

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

type MD = {
    messageData: MessageType
}

export const AlternativeMessage: React.FC<MD> = (props) => {
    return (
        <div className={style.containerOut}>
            <div className={style.avatar}>
                <img src={props.messageData.avatar} alt="avatar"/>
            </div>
            <div className={style.outcoming}>
                <div className={style.bubble}>
                    <div>
                        <div className={style.name}>
                            {props.messageData.name}
                        </div>
                        <div className={style.message}>
                            {props.messageData.message}
                        </div>
                    </div>
                    <div className={style.time}>
                        {props.messageData.time}
                    </div>
                </div>
            </div>
        </div>

    )
}

