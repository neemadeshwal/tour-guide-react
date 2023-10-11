import "./styles.css";
import Content from "./content";
import TourData from "./Tour-Data";

export default function App() {
  const tourPage = TourData.map((place) => {
    return (
      <Content
        img={place.img}
        price={place.price}
        place={place.place}
        info={place.info}
      />
    );
  });
  return (
    <main>
      <div className="tour-page-container">
        <div className="title">
          <h1> our tours</h1>
          <div className="underline"></div>
        </div>
        <div className="tour-content">{tourPage}</div>
      </div>
    </main>
  );
}
