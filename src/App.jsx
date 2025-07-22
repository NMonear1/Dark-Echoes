import { episodeList } from "./data";
import { useState } from "react";

export default function App() {
  const [episodeInfo, setEpisodeInfo] = useState();
  const [episodes] = useState(episodeList);

  const getDetails = (element) => {
    setEpisodeInfo(element);
    console.log(episodeInfo);
  };

  const detailComp = () => {
    if (episodeInfo) {
      return (
        <div className="rightDiv">
          <h1>Episode {episodeInfo.id}</h1>
          <h2>{episodeInfo.title}</h2>
          <p>{episodeInfo.description}</p>
          <button className="watchBtn">Watch Now</button>
        </div>
      );
    }
    return <h1>Select an Episode</h1>;
  };

  return (
    <>
      <h1 className="title">Dark Echoes</h1>
      <h2 className="episodes">Episodes</h2>

      <div className="leftDiv">
        {episodes.map((element) => {
          return (
            <div key={element.id} className="individualMovie">
              <button
                type="button"
                className="episodeBtn"
                onClick={() => getDetails(element)}
              >
                {element.title}
              </button>
            </div>
          );
        })}
      </div>

      <div>{detailComp()}</div>
    </>
  );
}
