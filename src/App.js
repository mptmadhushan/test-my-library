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
        devUrl="https://0392-2402-4000-b190-4aac-ccf3-1888-4d96-28ba.ngrok-free.app"
        onLoadComponentError={(errorCode, errorDescription) => {
          console.error("Error:", errorCode, errorDescription);
        }}
      />
    </div>
  </Provider>
);

export default App;