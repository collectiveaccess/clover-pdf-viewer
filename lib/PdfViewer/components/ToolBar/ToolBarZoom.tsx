import React from "react";
import * as Popover from "@radix-ui/react-popover";

import { useViewerState, useViewerDispatch } from "@/context/pdf-viewer-context";
import { Button, ZoomWrapper } from "@/components/PdfViewer/Controls.styled";

const ZoomInIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>Zoom in</title>
      <path strokeWidth="45" d="M256 112v288M400 256H112" />
    </svg>
  );
};

const ZoomOutIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>Zoom out</title>
      <path strokeWidth="45" d="M400 256H112" />
    </svg>
  );
};

const ZoomIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>Zoom</title>
      <path d="M456.69 421.39L362.6 327.3C385.253 297.144 397.481 260.437 397.44 222.72C397.44 126.38 319.06 48 222.72 48C126.38 48 48 126.38 48 222.72C48 319.06 126.38 397.44 222.72 397.44C260.437 397.481 297.144 385.253 327.3 362.6L421.39 456.69C431.279 465.53 446.35 465.108 455.729 455.729C465.108 446.35 465.53 431.279 456.69 421.39ZM97.92 222.72C97.92 153.795 153.795 97.92 222.72 97.92C291.645 97.92 347.52 153.795 347.52 222.72C347.52 291.645 291.645 347.52 222.72 347.52C153.829 347.437 98.0027 291.611 97.92 222.72Z" />
      <path d="M220.93 121.194L220.93 321.194" strokeWidth="30" />
      <path d="M120.93 221.194L320.93 221.194" strokeWidth="30" />
    </svg>
  );
};

const ToolBarZoom = () => {
  const store = useViewerState();
  let { configOptions } = store;
  let { pdfMagLevel } = configOptions;
  const dispatch: any = useViewerDispatch();
  if (pdfMagLevel === undefined) {
    pdfMagLevel = 100;
  }

  const handleZoom = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    dispatch({
      type: "updateConfigOptions",
      configOptions: {
        ...configOptions,
        pdfMagLevel: parseInt(e.target.value),
      },
    });
  };

  const zoomIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch({
      type: "updateConfigOptions",
      configOptions: {
        ...configOptions,
        pdfMagLevel: pdfMagLevel ? pdfMagLevel + 10 : 100 + 10,
      },
    });
  };

  const zoomOut = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch({
      type: "updateConfigOptions",
      configOptions: {
        ...configOptions,
        pdfMagLevel: pdfMagLevel ? pdfMagLevel - 10 : 100 - 10,
      },
    });
  };

  let zoomSelectOptions = [50, 75, 100, 125, 150, 200, 300, 400];

  let nonOption = null;

  if (zoomSelectOptions.indexOf(pdfMagLevel) !== -1) {
    nonOption = null;
  } else {
    nonOption = <option value={pdfMagLevel}>{pdfMagLevel}%</option>;
  }

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger asChild>
          <Button>
            <ZoomIcon />
          </Button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="PopoverContent" sideOffset={5}>
            <ZoomWrapper>
              <select value={pdfMagLevel} onChange={(e) => handleZoom(e)}>
                {nonOption}
                {zoomSelectOptions.map((option, index) => {
                  return (
                    <option key={index} value={option}>
                      {option}%
                    </option>
                  );
                })}
              </select>
              <Button onClick={zoomOut}>
                <ZoomOutIcon />
              </Button>
              <Button onClick={zoomIn}>
                <ZoomInIcon />
              </Button>
            </ZoomWrapper>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

export default ToolBarZoom;
