import React from "react";
import "./ButtonGroup.css";

const ButtonGroup = ({ handleAddTicket }) => (
  <div className="buttons">
    <button>
      <img src="https://s3-alpha-sig.figma.com/img/1cf4/2516/e94cbba6c651479c7395ff40a8dcc485?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OnP0XJCCAv~qIoGi-23Ma1HFn5M7EqI~PfMP1~a7bLMZ~A3yyjOWvsdsXw8wGaxm6FP8HU8q0gJJVWpYBt~tGnINxoqsuSEhvy4tYc1M~A8O3Gumskg6d4xHHS-NyDm80VNVekvPap6XLpSgz7TtXWwhmdyvzrRWeHWZhV7d48-X5x9pObA5t0ey82VePz6SWzlRqBRVCzH7TscO3FKLuwSpidt4bmEaA~1UAlpSNrtcDbnJoY~B97SwmwSSnQsvYvZgk1zHXdSNd8hwOXZUub3pg3qCdLZa9GcS1ccdFfa2JhSsUPL1Q56y6ehg2Mi8fjQWGqWErN9pKH2LQblX8w__" alt="buscar" width={50} />
    </button>
    <button>
      <img src="https://s3-alpha-sig.figma.com/img/0308/bc5f/33ce2eb7788ba553f1178a1aedbaf940?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YnzEeGeDQw0VE~oY56Jh1rVmkypTKENl3GIMKdyizf~9n5AfP1SQYm3Ie8Cdllv~4R7bMFLuvfttu7JmAasiiLt0SNyL3W2eaPpNcMSyQlxFCk4mYDSIHNUgsPCwdGdMfy77wgauR3mHrFBBCEXugyLBUStynWrPYqgfHHuHM70VTrRSwCECAC4QAH18Z6o2NXtm8AiF-T5YMjAgDanIVCfbSQMv50oLjvBCnUzIf6MEHdNQ0TFm2YrKA9Ch6MtGi2dqd~CeCfLwJ9A5fE9tbapeH2CZN4EVpmfBRY1Tekdi4UVCB~ZrEKZ1BuLVRifciufYRgTrRD8ynAtVhPGn5w__" alt="editar" width={50} />
    </button>
    <button>
      <img src="https://s3-alpha-sig.figma.com/img/7b4a/e2e5/f0e0bec9a741e764ec9518f1df023fb9?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pmxItxKMURpwp~RcwAtZEgcItoZatlxqRS24KHhraBPoWf8N2qotXCthM-shegnS2TCFtdRltnTaA2vVHgpB5pedjNEHovJfdEtdZoyinNiSRHQoC~y-e25AwN5zW~rpq1IOD13TV7o0q1XqQUDKIzDzMwefz7RY~-2Mz59pWbfgQN0PS-icodp4CJvVQD1hMprYwSibVxsIkr9rPOI4K~tmncsd~5VK7wtdkVq-RjwBm8XZ0EOfcTGpm8tconYp7BHEBcqOPCUWSygv3sXpgB1BbnYaTl5w66Ok0EHuo8hk2AvW4PbKO1rwO~57y0ipTy6YxUcquJg4DXqV0cb29Q__" alt="eliminar" width={50} />
    </button>
    <button onClick={handleAddTicket}>
      <img src="https://s3-alpha-sig.figma.com/img/a2f2/212b/8f775919b0f242023e409e3b4b87dc8e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lLSOttsV2K6C0iaRFVPG1j1FWJV8bfc3kI8HGtwZow~aUXoFI83qMfgD5aDasRKihoogF9pFYAdwRDpMXd0oX9mgnEi2MKTodfcFC915R1fsD3lsux~0R44fCvzlP-9t6Wcil5RZe~MTCqa0mUL7jMgV0L6Ez8pHD1GE2Mz9SE3sP3TEixcfv1Fi3BXs3DD0oMePujYaBcxzdK29bg4cdESRjhlOOJy3Hsl3XeTE0oScu4wmSuKQWwvUJrP8qQ9V74hewUe7W8Ta3bXUbSKEqOyqGrgHwkpWyaxXN72R0L39u-M9WRh6vG3tcZwIxQ1MAsZfXJ5-4bjJHA8j45CrtA__" alt="agregar" width={50} />
    </button>
  </div>
);

export default ButtonGroup;
