import React from "react";

import ToolBarFullScreen from "./ToolBar/ToolBarFullScreen";
import ToolBarPaging from "./ToolBar/ToolBarPaging";
import ToolBarZoom from "./ToolBar/ToolBarZoom";
import { useViewerState, useViewerDispatch } from "@/context/pdf-viewer-context";
import { Button, Wrapper } from "@/components/PdfViewer/Controls.styled";

const ChevronDownIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>Zoom in</title>
      <path d="M116 186L256 326" strokeWidth="45" />
      <path d="M256 326L396 186" strokeWidth="45" />
    </svg>
  );
};

const ChevronUpIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>Hide controls</title>
      <path d="M256 186L116 326" strokeWidth="45" />
      <path d="M396 326L256 186" strokeWidth="45" />
    </svg>
  );
};

const RotateIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>Rotate PDF</title>
      <path
        fill="none"
        strokeWidth="45"
        d="M400 148l-21.12-24.57A191.43 191.43 0 00240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 00181.07-128"
      />
      <path d="M464 97.42V208a16 16 0 01-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z" />
    </svg>
  );
};

const ThumbnailIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>Display thumbnails</title>
      <path d="M80 80L308.07 80L308.07 432L80 432L80 80Z" />
      <path d="M332 80L432 80L432 180L332 180L332 80Z" />
      <path d="M332 332L432 332L432 432L332 432L332 332Z" />
      <path d="M332 206L432 206L432 306L332 306L332 206Z" />
    </svg>
  );
};

const TwoPageIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>Two page layout</title>
      <path
        d="M256 376.279C334.829 339.652 432 376.279 432 376.279L432 376.279L432 136.279L432 136.279C432 136.279 334.829 99.6518 256 136.279"
        fill="none"
        strokeWidth="30"
      />
      <path d="M256 376.279C177.171 339.652 80 376.279 80 376.279L80 376.279L80 136.279L80 136.279C80 136.279 177.171 99.6518 256 136.279" />
      <path d="M256 136.279L256 376.279" fill="none" />
      <path d="M262.203 141.009L411.329 66.5702L411.46 286.631L262.203 365.046L262.203 141.009Z" />
    </svg>
  );
};

const Controls = () => {
  const store = useViewerState();
  let { configOptions } = store;
  let {
    showPdfToolBar,
    showPdfZoom,
    showPdfRotate,
    pdfRotationValue,
    showPdfFullScreen,
    pdfFullscreen,
    showPdfPaging,
    showPdfThumbnails,
    pdfToggleThumbnails,
    showPdfTwoPageSpread,
    pdfTwoPageSpread,
  } = configOptions;
  const dispatch: any = useViewerDispatch();

  const toggleToolBar = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    if (showPdfToolBar) {
      dispatch({
        type: "updateConfigOptions",
        configOptions: { ...configOptions, showPdfToolBar: false },
      });
    } else {
      dispatch({
        type: "updateConfigOptions",
        configOptions: { ...configOptions, showPdfToolBar: true },
      });
    }
  };

  const toggleThumbnailBar = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    if (pdfToggleThumbnails) {
      dispatch({
        type: "updateConfigOptions",
        configOptions: {
          ...configOptions,
          pdfToggleThumbnails: false,
        },
      });
    } else {
      dispatch({
        type: "updateConfigOptions",
        configOptions: { ...configOptions, pdfToggleThumbnails: true },
      });
    }
  };

  const rotatePDF = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (pdfRotationValue === undefined) {
      pdfRotationValue = 0;
    }
    if (pdfRotationValue >= 0 && pdfRotationValue < 270) {
      dispatch({
        type: "updateConfigOptions",
        configOptions: {
          ...configOptions,
          pdfRotationValue: pdfRotationValue + 90,
        },
      });
    } else {
      dispatch({
        type: "updateConfigOptions",
        configOptions: {
          ...configOptions,
          pdfRotationValue: 0,
        },
      });
    }
  };

  const twoPage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (pdfTwoPageSpread) {
      dispatch({
        type: "updateConfigOptions",
        configOptions: {
          ...configOptions,
          pdfTwoPageSpread: false,
        },
      });
    } else {
      dispatch({
        type: "updateConfigOptions",
        configOptions: {
          ...configOptions,
          pdfTwoPageSpread: true,
        },
      });
    }
    e.preventDefault();
  };

  if (showPdfToolBar) {
    return (
      <div className="document-toolbar-container">
        <Wrapper>
          {showPdfToolBar && (
            <Button onClick={toggleToolBar}>
              <ChevronUpIcon />
            </Button>
          )}

          {!pdfFullscreen && showPdfThumbnails ? (
            <Button onClick={toggleThumbnailBar}>
              <ThumbnailIcon />
            </Button>
          ) : null}

          {showPdfZoom && <ToolBarZoom />}

          {showPdfPaging && <ToolBarPaging />}

          {showPdfRotate && (
            <Button onClick={rotatePDF}>
              <RotateIcon />
            </Button>
          )}

          {showPdfTwoPageSpread && (
            <Button onClick={twoPage}>
              <TwoPageIcon />
            </Button>
          )}

          {showPdfFullScreen && <ToolBarFullScreen />}
        </Wrapper>
      </div>
    );
  } else {
    return (
      <div className="document-toolbar-container">
        <Wrapper>
          <Button onClick={toggleToolBar}>
            <ChevronDownIcon />
          </Button>
        </Wrapper>
      </div>
    );
  }
};

export default Controls;
