import React from "react";
import { useLocation,useNavigate  } from "react-router-dom";

export default function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results || [];
  const query = location.state?.query || "";

  return (
    
    <div className="container my-4">
      <h3 class="display-4 fw-bold mb-5">Search results for <span style={{ color: "#ff6600" }}>({query})</span></h3>
    {results.length > 0 ? (
        <div className="row">
        {results.map((p) => (
        <div key={p.id} className="col-md-4 mb-4"> 
            <div className="card shadow-sm">
                <img
                className="cardImage"
                src={p.img || ""} 
                alt={p.title}
                />
                <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">Only {p.price}</p>
                {/* <button className="btn btn-primary">Buy Now</button> */}
                <button
                    className="productBtn"
                    onClick={() => navigate("/product", { state: { product: p } })}>
                    Buy Now
                </button>
                </div>
            </div>
        </div>
        ))}
    </div>
  ) : (
    <p className="text-center fw-bold">No results found.</p>
  )}
</div>

  );
}
