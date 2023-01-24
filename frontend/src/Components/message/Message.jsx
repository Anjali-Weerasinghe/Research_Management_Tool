import "./message.css"
import {format} from "timeago.js"

export default function Message({message, own}) {
  return (
    <div className={own ? "message own" : "message"}>
        <div className="messageTop"></div>
            <img className="messageImg" scr="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffavim.com%2Fimage%2F7120742%2F&psig=AOvVaw1-9uX_CuIdP3UwavE7RTsN&ust=1653887858568000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNigmOawg_gCFQAAAAAdAAAAABAD" alt=""/>
            <p className="messageText">{message.text}</p>
        <div className="messageBottom"> {format(message.createdAt)}</div>
    </div>
  )
}
