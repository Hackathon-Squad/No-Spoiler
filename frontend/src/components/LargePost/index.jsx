import "./style.less"

const LargePost = ({username, title, body, spoiler}) => {
    return(
        <div className="post-body">
            <p>{username}</p>
            <h1>{title}</h1>
            <h2 className={`content ${spoiler ? "spoiler" : ""}`}>{body}</h2>
        </div>
    );
};

export default LargePost;