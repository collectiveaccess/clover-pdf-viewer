import React, { useReducer } from "react";

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
};

const defaultConfigOptions: ConfigOptions = {
  pdfPage: 1,
  pdfEnteredPage: 1,
  pdfNumPages: 1,
  pdfMagLevel: 100,
  pdfRotationValue: 0,
  pdfFullscreen: false,
  pdfTwoPageSpread: false,
  pdfToggleThumbnails: false,

  showPdfThumbnails: false,
  showPdfToolBar: false,
  showPdfSearch: false,
  showPdfZoom: false,
  showPdfPaging: false,
  showPdfRotate: false,
  showPdfTwoPageSpread: false,
  showPdfFullScreen: false,
};

interface ViewerContextStore {
  configOptions: ConfigOptions;
}

interface ViewerAction {
  type: string;
  configOptions: ConfigOptions;
}

export const defaultState: ViewerContextStore = {
  configOptions: defaultConfigOptions,
};

const ViewerStateContext =
  React.createContext<ViewerContextStore>(defaultState);
const ViewerDispatchContext =
  React.createContext<ViewerContextStore>(defaultState);

function viewerReducer(state: ViewerContextStore, action: ViewerAction) {
  switch (action.type) {
    case "updateConfigOptions": {
      return {
        ...state,
        configOptions: {
          ...defaultConfigOptions,
          ...action.configOptions,
        },
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

interface ViewerProviderProps {
  initialState?: ViewerContextStore;
  children: React.ReactNode;
}

const ViewerProvider: React.FC<ViewerProviderProps> = ({
  initialState = defaultState,
  children,
}) => {
  const [state, dispatch] = useReducer<
    React.Reducer<ViewerContextStore, ViewerAction>
  >(viewerReducer, initialState);

  return (
    <ViewerStateContext.Provider value={state}>
      <ViewerDispatchContext.Provider
        value={dispatch as unknown as ViewerContextStore}
      >
        {children}
      </ViewerDispatchContext.Provider>
    </ViewerStateContext.Provider>
  );
};

function useViewerState() {
  const context = React.useContext(ViewerStateContext);
  if (context === undefined) {
    throw new Error("useViewerState must be used within a ViewerProvider");
  }
  return context;
}

function useViewerDispatch() {
  const context = React.useContext(ViewerDispatchContext);
  if (context === undefined) {
    throw new Error("useViewerDispatch must be used within a ViewerProvider");
  }
  return context;
}

export { ViewerProvider, useViewerState, useViewerDispatch };
