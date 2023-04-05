import "./style.css";

const Messages = ({ cls, message, ...argument }) => {
  return (
    <div className={`oaerror ${cls}`} {...argument}>
      {message}
    </div>
  );
};

export default Messages;
