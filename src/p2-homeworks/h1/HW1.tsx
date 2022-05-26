import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: "https://sun9-61.userapi.com/s/v1/ig2/xR9VylbzC58hQSfmyA5HsXwLU4LpbhXSRycOOgNyEGABg0vk7ivj2rPCyRa8A65O9pa9N0m4VdcxK7i-klzUgq3G.jpg?size=1080x1080&quality=96&type=album",
    name: 'Arthur Butterman',
    message: 'Первая "Задача от Игната"! Полет нормальный!',
    time: '19:40'
}

const HW1 = () => {
    return (
        <div>
            <hr/>
            homeworks 1

{/*            should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
