import React from "react";
import {
  useViewerState,
  useViewerDispatch,
} from "../../context/pdf-viewer-context";

import styles from "../Controls.module.css";

const ExitFullScreenIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>Exit fullscreen</title>
      <path
        d="M432 320L432 432L320 432M80 192L80 80L192 80M320 80L432 80L432 192M192 432L80 432L80 320"
        fill="none"
        strokeWidth="30"
      />
    </svg>
  );
};

const FullScreenIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>Fullscreen</title>
      <path
        d="M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"
        fill="none"
        strokeWidth="30"
      />
    </svg>
  );
};

const ToolBarFullScreen = () => {
  const store = useViewerState();
  const { configOptions } = store;
  const { pdfFullscreen } = configOptions;
  const dispatch: any = useViewerDispatch();

  const toggleFullScreen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const elem = document.getElementById("pdf-viewer");
    if (pdfFullscreen) {
      document.exitFullscreen();
    } else if (elem) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
      elem.requestFullscreen();
    }
    e.preventDefault();
  };

  document.onfullscreenchange = function () {
    if (!pdfFullscreen) {
      dispatch({
        type: "updateConfigOptions",
        configOptions: { ...configOptions, pdfFullscreen: true },
      });
    } else {
      dispatch({
        type: "updateConfigOptions",
        configOptions: { ...configOptions, pdfFullscreen: false },
      });
    }
  };

  document.onfullscreenchange = function () {
    if (!pdfFullscreen) {
      dispatch({
        type: "updateConfigOptions",
        configOptions: { ...configOptions, pdfFullscreen: true },
      });
    } else {
      dispatch({
        type: "updateConfigOptions",
        configOptions: { ...configOptions, pdfFullscreen: false },
      });
    }
  };

  return (
    <button className={styles.button} onClick={(e) => toggleFullScreen(e)}>
      {pdfFullscreen ? <ExitFullScreenIcon /> : <FullScreenIcon />}
    </button>
  );
};

export default ToolBarFullScreen;
