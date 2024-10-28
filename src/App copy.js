// src/App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { MyDataList,OnlyOfficeViewer, DocumentViewer, DocumentEditorComponent } from "gc-test-npm";
// import {src} from './testComp'
import { DocumentEditor } from '@onlyoffice/document-editor-react';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Document Viewer</h1>
      {/* <src/> */}
      {/* <MyDataList
        pdfUrl={
          "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"
        }
      />
      <DocumentViewer
        docUrl={
          "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"
        }
      /> */}
      {/* <OnlyOfficeViewer
       docUrl={'https://doc-viewer-app.vercel.app/TESTDocument.docx'}
       docType="text"
       apiUrl="http://localhost:8080"
       mode="view"/> */}
       {/* <DocumentEditorComponent docUrl='https://doc-viewer-app.vercel.app/TESTDocument.docx' /> */}
       <div style={{ width: '100%', height: '100vh' }}>
      <DocumentEditor
        document={{
          fileType: 'docx',
          key: 'doc-1',
          url: 'https://doc-viewer-app.vercel.app/TESTDocument.docx',
        }}
        editorConfig={{
          callbackUrl: 'http://localhost:3000/save', // Change as needed
        }}
        documentServerUrl="http://localhost:8080" // Ensure this is correct
        width="100%"
        height="100%"
        onError={(error) => console.error('Error loading document:', error)}
      />
    </div>
    </div>
  </Provider>
);

export default App;
