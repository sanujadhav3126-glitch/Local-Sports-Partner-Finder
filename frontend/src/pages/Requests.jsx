import { useEffect, useState } from "react";
import api from "../api/api";

export default function Requests() {
  const [items, setItems] = useState([]);
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const load = async () => {
    try {
      const res = await api.get("/requests/mine");
      setItems(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const update = async (id, status) => {
    await api.put(`/requests/${id}/status`, { status });
    load();
  };

  return (
    <div className="container">
      <h2>Play Requests & History</h2>

      <div className="cards">
        {items.map((r) => (
          <div className="card" key={r._id}>
            <h3>{r.game}</h3>
            <p>
              From: {r.sender?.name} | To: {r.receiver?.name}
            </p>
            <p>Location: {r.location}</p>
            <p>
              Status: <b>{r.status}</b>
            </p>

            {r.receiver?._id === user.id && r.status === "pending" && (
              <>
                <button onClick={() => update(r._id, "accepted")}>
                  Accept
                </button>
                <button
                  className="danger"
                  onClick={() => update(r._id, "declined")}
                >
                  Decline
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
