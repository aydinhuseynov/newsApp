import newsPicture from "../assets/images.png";
let text = "A little bit too much': Fans, players call for ch"
const NewsItem = ({ title, description, url, src }) => {
  return (
    <div
      style={{ maxWidth: "295px" }}
      className="card bg-dark text-light mb-3 d-inline-block my-2 mx-2 "
    >
      <div style={{height:"200px"}}>
        <img
          src={src ? src : newsPicture}
          style={{ width: "295px" }}
          className="card-img-top"
          alt="..."
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0, 50) : "news is loading ..please wait a minute" }</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "Overcrowding and widespread intoxication marred the 2024 WM Phoenix Open as fans and playe"}
        </p>
        <a href={url} className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
