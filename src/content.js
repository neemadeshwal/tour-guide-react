import React from "react";

function TourPageContent(props) {
  const info = props.info;

  const [isreadmore, setReadMore] = React.useState(false);
  const [isDeleted, setIsDeleted] = React.useState(false);
  function handleReadMore() {
    setReadMore((prevValue) => !prevValue);
  }

  function handleDelete() {
    setIsDeleted((prevValue) => !prevValue);
  }
  return (
    !isDeleted && (
      <div className="single-content">
        <img src={props.img} alt="travel-place" />{" "}
        <span className="price">{props.price}</span>
        <div className="tour-info">
          <h3>{props.place}</h3>

          <p>
            {isreadmore ? info : info.substring(0, 110)}
            <button onClick={handleReadMore} className="show-more-button">
              {!isreadmore ? "...Read More" : "Show less"}
            </button>
          </p>

          <button onClick={handleDelete} className="not-interested">
            Not interested
          </button>
        </div>
      </div>
    )
  );
}

export default TourPageContent;
