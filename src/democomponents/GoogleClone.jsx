import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../democomponents/GoogleClone.css";
import { AppContext } from "../App";

const GoogleClone = () => {
  const { brandName } = useContext(AppContext);
  // console.log(brandName);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // You can expand this logic if needed
    console.log("Search triggered");
  };

  return (
    <div className="gc-container">
      <div className="gc-logo">🔵🟥🟢🟡</div>

      <form onSubmit={handleSearch} className="gc-search-form">
        <input
          type="text"
          placeholder="Search Google..."
          className="gc-search-input"
        />
        <button type="submit" className="gc-search-button">
          Search
        </button>
      </form>

      <div className="gc-results">
        {/* <div className="gc-result-item" onClick={() => navigate("/homebale")}> */}
        <div
          className="gc-result-item"
          onClick={() => navigate(`/${brandName}`)}
        >
          Immortal
        </div>
        {/* <div className="gc-result-item" onClick={() => navigate("/sony")}> */}
        <div
          className="gc-result-item"
          onClick={() => navigate(`/${brandName}/sony`)}
        >
          Sony
        </div>
        {/* <div className="gc-result-item" onClick={() => navigate("/samsung")}> */}
        <div
          className="gc-result-item"
          onClick={() => navigate(`/${brandName}/samsung`)}
        >
          Samsung
        </div>
        {/* <div className="gc-result-item" onClick={() => navigate("/lg")}> */}
        <div
          className="gc-result-item"
          onClick={() => navigate(`/${brandName}/lg`)}
        >
          LG
        </div>
        {/* <div className="gc-result-item" onClick={() => navigate("/ifb")}> */}
        <div
          className="gc-result-item"
          onClick={() => navigate(`/${brandName}/ifb`)}
        >
          IFB
        </div>
        {/* <div className="gc-result-item" onClick={() => navigate("/whirlpool")}> */}
        <div
          className="gc-result-item"
          onClick={() => navigate(`/${brandName}/whirlpool`)}
        >
          Whirlpool
        </div>
        {/* <div className="gc-result-item" onClick={() => navigate("/onida")}> */}
        <div
          className="gc-result-item"
          onClick={() => navigate(`/${brandName}/onida`)}
        >
          Onida
        </div>
        <div
          className="gc-result-item"
          onClick={() => navigate(`/${brandName}/haier`)}
        >
          Haier
        </div>
        {/* <div className="gc-result-item" onClick={() => navigate('/phillips')}>PHILLIPS</div> */}
      </div>
    </div>
  );
};

export default GoogleClone;
