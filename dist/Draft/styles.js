"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
exports.DraftStyled = styled_components_1.default.div `
 .RichEditor-root {
  background: #fff;
  border: 1px solid #ddd;
  font-family: 'Georgia', serif;
  font-size: 14px;
  padding: 15px;
}

 .RichEditor-editor {
  border-top: 1px solid #ddd;
  cursor: text;
  font-size: 16px;
  margin-top: 10px;
}

 .RichEditor-editor .public-DraftEditorPlaceholder-root {
  margin: 0 -15px -15px;
  padding: 15px;
}
 .RichEditor-editor .public-DraftEditor-content {
  margin: 0 -15px -15px;
  padding: 15px;
}

 .RichEditor-editor .public-DraftEditor-content {
  min-height: 100px;
}

 .RichEditor-hidePlaceholder .public-DraftEditorPlaceholder-root {
  display: none;
}

 .RichEditor-editor .RichEditor-blockquote {
  border-left: 5px solid #eee;
  color: #666;
  font-family: 'Hoefler Text', 'Georgia', serif;
  font-style: italic;
  margin: 16px 0;
  padding: 10px 20px;
}

 .RichEditor-editor .public-DraftStyleDefault-pre {
  background-color: rgba(0, 0, 0, 0.05);
  font-family: 'Inconsolata', 'Menlo', 'Consolas', monospace;
  font-size: 16px;
  padding: 20px;
}

 .RichEditor-controls {
  font-family: 'Helvetica', sans-serif;
  font-size: 14px;
  margin-bottom: 5px;
  user-select: none;
}

 .RichEditor-styleButton {
  color: #999;
  cursor: pointer;
  margin-right: 2px;
  padding: 2px 4px;
  display: inline-block;
  border-radius:3px;
  border:1px solid #999;
  background-color:#EFEFEF;

  &:hover {
    color: #EFEFEF;
    background-color:#999;
  }
}

.RichEditor-activeButton {
  color: #5890ff;
}`;
//# sourceMappingURL=styles.js.map