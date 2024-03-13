import type { IIIFExternalWebResource } from "@iiif/presentation-3";
type PropType = {
    annotationBody: IIIFExternalWebResource;
    id: string;
    showPdfThumbnails: boolean;
    showPdfToolBar: boolean;
    showPdfSearch: boolean;
    showPdfZoom: boolean;
    showPdfPaging: boolean;
    showPdfRotate: boolean;
    showPdfTwoPageSpread: boolean;
    showPdfFullScreen: boolean;
    canvasHeight: string;
};
export default function PdfViewer(props: PropType): import("react/jsx-runtime").JSX.Element;
export {};
