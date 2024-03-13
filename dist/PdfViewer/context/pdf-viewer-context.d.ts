import React from "react";
export type ConfigOptions = {
    pdfPage?: number;
    pdfEnteredPage?: number;
    pdfNumPages?: number;
    pdfMagLevel?: number;
    pdfRotationValue?: number;
    pdfFullscreen?: boolean;
    pdfTwoPageSpread?: boolean;
    pdfToggleThumbnails?: boolean;
    showPdfThumbnails?: boolean;
    showPdfToolBar?: boolean;
    showPdfSearch?: boolean;
    showPdfZoom?: boolean;
    showPdfPaging?: boolean;
    showPdfRotate?: boolean;
    showPdfTwoPageSpread?: boolean;
    showPdfFullScreen?: boolean;
    canvasHeight?: string;
};
interface ViewerContextStore {
    configOptions: ConfigOptions;
}
export declare const defaultState: ViewerContextStore;
interface ViewerProviderProps {
    initialState?: ViewerContextStore;
    children: React.ReactNode;
}
declare const ViewerProvider: React.FC<ViewerProviderProps>;
declare function useViewerState(): ViewerContextStore;
declare function useViewerDispatch(): ViewerContextStore;
export { ViewerProvider, useViewerState, useViewerDispatch };
