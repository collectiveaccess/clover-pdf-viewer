import Viewer from "@samvera/clover-iiif/viewer";
import PdfViewer from "../lib/PdfViewer/components/PdfViewer";

function App() {
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
              showPdfSearch: true,
              showPdfZoom: true,
              showPdfPaging: true,
              showPdfRotate: true,
              showPdfTwoPageSpread: true,
              showPdfFullScreen: true,
              canvasHeight: "71.8vh",
            },
          },
          target: {
            paintingFormat: ["application/pdf"],
          },
        },
      ]}
      options={{ canvasHeight: "71.8vh" }}
    />
  );
}

export default App;
