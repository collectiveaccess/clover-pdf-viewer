# PDF Viewer for Clover

IIIF viewer

## install

```
npm install  https://github.com/wykhuh/clover-pdf-viewer#dist
```

## Setup

pass in the pdf viewer to customDisplays for Clover.

```jsx
import Viewer from "@samvera/clover-iiif/viewer";
import PdfViewer from "clover-pdf-viewer";

function App() {
  return (
    <Viewer
      iiifContent="http://localhost:3000/api/pdf"
      customDisplays={[
        {
          display: {
            component: PdfViewer,
          },
          target: {
            paintingFormat: ["application/pdf"],
          },
        },
      ]}
    />
  );
}

export default App;
```

You can turn on/off the buttons in the pdf viewer menu, and set the canvas height.

```jsx
return (
  <Viewer
    iiifContent="http://localhost:3000/api/pdf"
    customDisplays={[
      {
        display: {
          component: PdfViewer,
          componentProps: {
            showPdfThumbnails: true,
            showPdfToolBar: true,
            showPdfZoom: true,
            showPdfPaging: true,
            showPdfRotate: true,
            showPdfTwoPageSpread: true,
            showPdfFullScreen: true,
            canvasHeight: "61.8vh",
          },
        },
        target: {
          paintingFormat: ["application/pdf"],
        },
      },
    ]}
    options={{ canvasHeight: "61.8vh" }}
  />
);
```
