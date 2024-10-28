import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { DocumentEditorComponent } from "gc-test-npm"; // Adjust the import based on your folder structure
import { DocumentEditor } from "@onlyoffice/document-editor-react";

const App = () => (
  <Provider store={store}>
    <div
      style={{
        height: "100vh",
      }}
    >
      <DocumentEditorComponent
        docUrl="https://doc-viewer-app.vercel.app/TESTDocument.docx"
        onLoadComponentError={(errorCode, errorDescription) => {
          console.error("Error:", errorCode, errorDescription);
        }}
      />
    </div>
  </Provider>
);

export default App;