export default function Message() {
  return (
    <div className="message own">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p className="messageText">Hello, this is faisal</p>
      </div>
      <div className="messageBottom">
        {/* {format(message.createdAt)} */}
      </div>
    </div>
  );
}
