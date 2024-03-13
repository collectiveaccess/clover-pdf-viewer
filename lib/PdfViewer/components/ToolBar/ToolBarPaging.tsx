import React, { useEffect, useState } from "react";
import { useViewerState, useViewerDispatch } from "@/context/pdf-viewer-context";

import { Button, PagingWrapper } from "@/components/PdfViewer/Controls.styled";

const PreviousIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>Previous page</title>
      <path
        fill="none"
        strokeWidth="45"
        d="M244 400L100 256l144-144M120 256h292"
      />
    </svg>
  );
};

const NextIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>Next page</title>
      <path
        fill="none"
        strokeWidth="45"
        d="M268 112l144 144-144 144M392 256H100"
      />
    </svg>
  );
};

const ToolBarPaging = () => {
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);

  const [isPreviousDisabled, setIsPreviousDisabled] = useState<boolean>(false);

  const store = useViewerState();
  let { configOptions } = store;
  let { pdfNumPages, pdfPage, pdfEnteredPage } = configOptions;
  const dispatch: any = useViewerDispatch();

  if (pdfPage === undefined) {
    pdfPage = 1;
  }
  if (pdfNumPages === undefined) {
    pdfNumPages = 1;
  }

  useEffect(() => {
    pdfPage === 1 ? setIsPreviousDisabled(true) : setIsPreviousDisabled(false);
    pdfPage === pdfNumPages
      ? setIsNextDisabled(true)
      : setIsNextDisabled(false);
  }, [pdfPage]);

  const scrollToPage = (page_num: number) => {
    const element = document.getElementById("page-" + `${page_num}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };

  const nextPage = () => {
    if (pdfPage === undefined) {
      pdfPage = 1;
    }
    if (pdfNumPages === undefined) {
      pdfNumPages = 1;
    }

    const p = pdfPage + 1;
    if (p <= pdfNumPages) {
      dispatch({
        type: "updateConfigOptions",
        configOptions: { ...configOptions, pdfPage: p, pdfEnteredPage: p + "" },
      });
      scrollToPage(p);
    }
  };

  const previousPage = () => {
    if (pdfPage === undefined) {
      pdfPage = 1;
    }
    const p = pdfPage - 1;
    if (p > 0) {
      dispatch({
        type: "updateConfigOptions",
        configOptions: { ...configOptions, pdfPage: p, pdfEnteredPage: p + "" },
      });
      scrollToPage(p);
    }
  };

  const updatePage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (pdfNumPages === undefined) {
      pdfNumPages = 1;
    }
    let p = parseInt(e.target.value);

    if (p > 0 && p <= pdfNumPages) {
      dispatch({
        type: "updateConfigOptions",
        configOptions: { ...configOptions, pdfPage: p, pdfEnteredPage: p + "" },
      });

      setTimeout(() => {
        scrollToPage(p);
      }, 100);
    } else {
      dispatch({
        type: "updateConfigOptions",
        configOptions: {
          ...configOptions,
          pdfEnteredPage: e.target.value,
        },
      });
    }
  };

  return (
    <PagingWrapper>
      <Button onClick={previousPage} disabled={isPreviousDisabled}>
        <PreviousIcon />
      </Button>
      <span>
        <input
          type="text"
          value={pdfEnteredPage}
          onChange={(e) => updatePage(e)}
        />{" "}
        of {pdfNumPages > 0 ? pdfNumPages : null}
      </span>
      <Button onClick={nextPage} disabled={isNextDisabled}>
        <NextIcon />
      </Button>
    </PagingWrapper>
  );
};

export default ToolBarPaging;
