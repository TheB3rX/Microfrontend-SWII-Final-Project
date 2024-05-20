import React from "react";
import "./ButtonGroup.css";

const ButtonGroup = ({ handleAddTicket }) => (
  <div className="buttons">
    <button onClick={handleAddTicket}>
      <img src="https://s3-alpha-sig.figma.com/img/a2f2/212b/8f775919b0f242023e409e3b4b87dc8e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lLSOttsV2K6C0iaRFVPG1j1FWJV8bfc3kI8HGtwZow~aUXoFI83qMfgD5aDasRKihoogF9pFYAdwRDpMXd0oX9mgnEi2MKTodfcFC915R1fsD3lsux~0R44fCvzlP-9t6Wcil5RZe~MTCqa0mUL7jMgV0L6Ez8pHD1GE2Mz9SE3sP3TEixcfv1Fi3BXs3DD0oMePujYaBcxzdK29bg4cdESRjhlOOJy3Hsl3XeTE0oScu4wmSuKQWwvUJrP8qQ9V74hewUe7W8Ta3bXUbSKEqOyqGrgHwkpWyaxXN72R0L39u-M9WRh6vG3tcZwIxQ1MAsZfXJ5-4bjJHA8j45CrtA__" alt="agregar" width={50} />
    </button>
  </div>
);

export default ButtonGroup;
