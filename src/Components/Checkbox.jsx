import React, { useState } from "react";

function Checkbox() {
    let [liked, setLiked] = useState(true);

    function stateLike(a) {
        setLiked(a.target.checked);
    }

    return (
        <div className="checkbox">
            <h1>State of Checkbox</h1>
            <input type="checkbox" checked={liked} onChange={stateLike} className="cb" />
            <h3>You {liked ? "liked" : "did not like"} this</h3>
        </div>
    );
}
export default Checkbox;
