import React from "react";
import { Document, Page } from "react-pdf";
import "pdfjs-dist/build/pdf.worker.entry";
import type { PDFDocumentProxy } from "pdfjs-dist";
import type { IIIFExternalWebResource } from "@iiif/presentation-3";
import VisibilitySensor from "react-visibility-sensor";

import PdfToolBar from "./Controls";
import {
  type ConfigOptions,
  ViewerProvider,
  useViewerState,
  useViewerDispatch,
  defaultState,
} from "@/context/pdf-viewer-context";

import ThumbnailBar from "./ThumbnailBar";

type PdfPage = {
  page_num: number;
  doc: JSX.Element;
};

type VisibilityType = {
  isVisible: boolean;
};

type PropType = {
  painting: IIIFExternalWebResource[];
  id: string;
  options?: ConfigOptions;
};

export default function PdfViewer(props: PropType) {
  return (
    <ViewerProvider
      initialState={{
        configOptions: {
          ...defaultState,
          ...props.options,
        },
      }}
    >
      <RenderPdfViewer {...props} />
    </ViewerProvider>
  );
}

function RenderPdfViewer(props: PropType) {
  const { painting } = props;
  const { configOptions } = useViewerState();
  let {
    pdfNumPages,
    pdfPage,
    pdfMagLevel,
    pdfRotationValue,
    pdfFullscreen,
    pdfTwoPageSpread,
    pdfToggleThumbnails,
  } = configOptions;
  const dispatch: any = useViewerDispatch();

  if (pdfMagLevel === undefined) {
    pdfMagLevel = 100;
  }
  if (pdfPage === undefined) {
    pdfPage = 1;
  }
  if (pdfNumPages === undefined) {
    pdfNumPages = 1;
  }
  const file = painting[0].id;

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    dispatch({
      type: "updateConfigOptions",
      configOptions: { ...configOptions, pdfNumPages: nextNumPages },
    });
  }

  const toolbarHeight = 50;
  const height = painting[0].height || 500 - toolbarHeight;
  let currentPageWidth = (painting[0].width || 355) * (pdfMagLevel / 100);
  let currentPageHeight = height * (pdfMagLevel / 100);

  let defaultPage = (
    <div
      style={{
        margin: "auto",
        width: `${currentPageWidth}px`,
        height: `${currentPageHeight}px`,
        backgroundColor: "#fff",
      }}
    ></div>
  );

  let pdfPages = [];
  for (let i = 1; i <= pdfNumPages; i++) {
    pdfPages.push({
      page_num: i,
      doc: (
        <Document
          file={file}
          rotate={pdfRotationValue}
          loading={defaultPage}
          onLoadSuccess={i == 1 ? (e) => onDocumentLoadSuccess(e) : undefined}
        >
          <Page
            pageNumber={i}
            height={height}
            scale={pdfMagLevel / 100}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      ),
    });
  }

  let pdfPagesTwoSpread = [];
  for (let i = 2; i <= pdfNumPages; i++) {
    pdfPagesTwoSpread.push([
      {
        page_num: i,
        doc: (
          <Document file={file} rotate={pdfRotationValue} loading={defaultPage}>
            <Page
              pageNumber={i}
              height={height}
              scale={pdfMagLevel / 100}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        ),
      },
      {
        page_num: i + 1,
        doc: (
          <Document file={file} rotate={pdfRotationValue} loading={defaultPage}>
            <Page
              pageNumber={i + 1}
              height={height}
              scale={pdfMagLevel / 100}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              error={defaultPage}
            />
          </Document>
        ),
      },
    ]);
    i++;
  }

  const visibilityChange = (isVisible: boolean, page_num: number) => {
    if (isVisible) {
      dispatch({
        type: "updateConfigOptions",
        configOptions: {
          ...configOptions,
          pdfPage: page_num,
          pdfEnteredPage: page_num,
        },
      });
    }
  };

  function renderOnePage(pfd_page: PdfPage, index: number, style: any) {
    return (
      <VisibilitySensor
        partialVisibility={true}
        offset={{ top: 260, bottom: 260 }}
        onChange={(isVisible: boolean) =>
          visibilityChange(isVisible, pfd_page.page_num)
        }
      >
        {({ isVisible }: VisibilityType) => (
          <div
            key={index}
            id={"page-" + `${pfd_page.page_num}`}
            style={{
              ...style,
              width: `${currentPageWidth}px`,
              height: `${currentPageHeight}px`,
            }}
          >
            {isVisible ? pfd_page.doc : defaultPage}
          </div>
        )}
      </VisibilitySensor>
    );
  }

  function renderTwoPageSpread(spread: PdfPage[], index: number) {
    if (pdfNumPages === undefined) {
      pdfNumPages = 5;
    }

    return (
      <div key={index} style={{ display: "flex" }}>
        <div>{renderOnePage(spread[0], index, { margin: "0.25rem" })}</div>
        {spread[1].page_num > pdfNumPages ? (
          <div></div>
        ) : (
          <div>{renderOnePage(spread[1], index, { margin: "0.25rem" })}</div>
        )}
      </div>
    );
  }

  return (
    <div id="pdf-viewer">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PdfToolBar />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {pdfToggleThumbnails && !pdfFullscreen && (
          <ThumbnailBar url={file} height={"520px"} />
        )}

        <div
          style={{
            width: "100%",
            height: height,
            overflow: "scroll",
            backgroundColor: "#F2F2F0",
            maxHeight: pdfFullscreen ? "100vh" : "540px",
            textAlign: "center",
          }}
        >
          {pdfPages && pdfTwoPageSpread ? (
            <>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <div>
                  {renderOnePage(pdfPages[0], 0, {
                    margin: "0.25rem auto",
                  })}
                </div>

                {pdfPagesTwoSpread.map((spread, index) => {
                  return renderTwoPageSpread(spread, index);
                })}
              </div>
            </>
          ) : null}

          {pdfPages && !pdfTwoPageSpread
            ? pdfPages.map((pfd_page, index) => {
                return (
                  <div key={index}>
                    {renderOnePage(pfd_page, index, {
                      margin: "0.25rem auto",
                    })}
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
