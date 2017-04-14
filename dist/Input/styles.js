"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var maps_1 = require("./maps");
var BaseInput = function (props) {
    var type = props.type, iconName = props.iconName, className = props.className, placeholder = props.placeholder, disabled = props.disabled, readOnly = props.readOnly, onChange = props.onChange;
    var icon = "";
    if (iconName) {
        icon = React.createElement("div", { className: "up-icon" });
    }
    return (React.createElement("div", { className: className },
        React.createElement("div", { className: "up-input-group" },
            React.createElement("input", { onChange: onChange, className: "up-input", type: type, placeholder: placeholder, dir: "auto", disabled: disabled, readOnly: readOnly }),
            icon)));
};
var inputStyles = (_a = ["\n.up-input {\n  outline: none;\n  border: none;\n  border-radius: 3px;\n  box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n  background: #ffffff;\n  height: 30px;\n  padding: 0 10px;\n  vertical-align: middle;\n  line-height: 30px;\n  color: #182026;\n  font-size: 14px;\n  font-weight: 400;\n  transition: box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n  .up-input::-webkit-input-placeholder {\n    opacity: 1;\n    color: rgba(92, 112, 128, 0.5); }\n  .up-input::-moz-placeholder {\n    opacity: 1;\n    color: rgba(92, 112, 128, 0.5); }\n  .up-input:-ms-input-placeholder {\n    opacity: 1;\n    color: rgba(92, 112, 128, 0.5); }\n  .up-input::placeholder {\n    opacity: 1;\n    color: rgba(92, 112, 128, 0.5); }\n  .up-input:focus {\n    box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n  .up-input[type=\"search\"], .up-input.up-round {\n    border-radius: 30px;\n    -moz-box-sizing: border-box;\n         box-sizing: border-box;\n    padding-left: 10px; }\n  .up-input[readonly] {\n    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.15); }\n  .up-input:disabled, .up-input.up-disabled {\n    box-shadow: none;\n    background: rgba(206, 217, 224, 0.5);\n    cursor: not-allowed;\n    color: rgba(92, 112, 128, 0.5);\n    resize: none; }\n  .up-dark .up-input {\n    box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n    background: rgba(16, 22, 26, 0.3);\n    color: #f5f8fa; }\n    .up-dark .up-input::-webkit-input-placeholder {\n      color: rgba(191, 204, 214, 0.5); }\n    .up-dark .up-input::-moz-placeholder {\n      color: rgba(191, 204, 214, 0.5); }\n    .up-dark .up-input:-ms-input-placeholder {\n      color: rgba(191, 204, 214, 0.5); }\n    .up-dark .up-input::placeholder {\n      color: rgba(191, 204, 214, 0.5); }\n    .up-dark .up-input:focus {\n      box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n    .up-dark .up-input[readonly] {\n      box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4); }\n    .up-dark .up-input:disabled, .up-dark .up-input.up-disabled {\n      box-shadow: none;\n      background: rgba(57, 75, 89, 0.5);\n      color: rgba(191, 204, 214, 0.5); }\n  .up-input.up-intent-primary {\n    box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input.up-intent-primary:focus {\n      box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input.up-intent-primary[readonly] {\n      box-shadow: inset 0 0 0 1px #137cbd; }\n    .up-input.up-intent-primary:disabled, .up-input.up-intent-primary.up-disabled {\n      box-shadow: none; }\n    .up-dark .up-input.up-intent-primary {\n      box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .up-dark .up-input.up-intent-primary:focus {\n        box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .up-dark .up-input.up-intent-primary[readonly] {\n        box-shadow: inset 0 0 0 1px #137cbd; }\n      .up-dark .up-input.up-intent-primary:disabled, .up-dark .up-input.up-intent-primary.up-disabled {\n        box-shadow: none; }\n  .up-input.up-intent-success {\n    box-shadow: 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input.up-intent-success:focus {\n      box-shadow: 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input.up-intent-success[readonly] {\n      box-shadow: inset 0 0 0 1px #0f9960; }\n    .up-input.up-intent-success:disabled, .up-input.up-intent-success.up-disabled {\n      box-shadow: none; }\n    .up-dark .up-input.up-intent-success {\n      box-shadow: 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .up-dark .up-input.up-intent-success:focus {\n        box-shadow: 0 0 0 1px #0f9960, 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .up-dark .up-input.up-intent-success[readonly] {\n        box-shadow: inset 0 0 0 1px #0f9960; }\n      .up-dark .up-input.up-intent-success:disabled, .up-dark .up-input.up-intent-success.up-disabled {\n        box-shadow: none; }\n  .up-input.up-intent-warning {\n    box-shadow: 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input.up-intent-warning:focus {\n      box-shadow: 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input.up-intent-warning[readonly] {\n      box-shadow: inset 0 0 0 1px #d9822b; }\n    .up-input.up-intent-warning:disabled, .up-input.up-intent-warning.up-disabled {\n      box-shadow: none; }\n    .up-dark .up-input.up-intent-warning {\n      box-shadow: 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .up-dark .up-input.up-intent-warning:focus {\n        box-shadow: 0 0 0 1px #d9822b, 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .up-dark .up-input.up-intent-warning[readonly] {\n        box-shadow: inset 0 0 0 1px #d9822b; }\n      .up-dark .up-input.up-intent-warning:disabled, .up-dark .up-input.up-intent-warning.up-disabled {\n        box-shadow: none; }\n  .up-input.up-intent-danger {\n    box-shadow: 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input.up-intent-danger:focus {\n      box-shadow: 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input.up-intent-danger[readonly] {\n      box-shadow: inset 0 0 0 1px #db3737; }\n    .up-input.up-intent-danger:disabled, .up-input.up-intent-danger.up-disabled {\n      box-shadow: none; }\n    .up-dark .up-input.up-intent-danger {\n      box-shadow: 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .up-dark .up-input.up-intent-danger:focus {\n        box-shadow: 0 0 0 1px #db3737, 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .up-dark .up-input.up-intent-danger[readonly] {\n        box-shadow: inset 0 0 0 1px #db3737; }\n      .up-dark .up-input.up-intent-danger:disabled, .up-dark .up-input.up-intent-danger.up-disabled {\n        box-shadow: none; }\n  .up-input::-ms-clear {\n    display: none; \n  }\n.up-input-group {\n  display: block;\n  position: relative; }\n  .up-input-group .up-input {\n    position: relative;\n  }\n    .up-input-group .up-input:not(:first-child) {\n      padding-left: 30px; }\n    .up-input-group .up-input:not(:last-child) {\n      padding-right: 30px; }\n  .up-input-group .up-input-action,\n  .up-input-group > .up-button,\n  .up-input-group > .up-icon {\n    position: absolute;\n    top: 0; }\n    .up-input-group .up-input-action:first-child,\n    .up-input-group > .up-button:first-child,\n    .up-input-group > .up-icon:first-child {\n      left: 0; }\n    .up-input-group .up-input-action:last-child,\n    .up-input-group > .up-button:last-child,\n    .up-input-group > .up-icon:last-child {\n      right: 0; }\n  .up-input-group .up-button {\n    min-width: 24px;\n    min-height: 24px;\n    line-height: 24px;\n    margin: 3px;\n    padding-top: 0;\n    padding-bottom: 0; }\n  .up-input-group .up-icon {\n    line-height: 1;\n    font-family: \"Icons16\", sans-serif;\n    font-size: 16px;\n    font-weight: 400;\n    font-style: normal;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    z-index: 1;\n    margin: 0 7px;\n    line-height: 30px;\n    color: #5c7080; }\n  .up-input-group .up-spinner {\n    margin: 3px; }\n  .up-input-group .up-tag {\n    margin: 5px; }\n  .up-input-group .up-input:not(:focus) + .up-button.up-minimal:not(:hover):not(:focus),\n  .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:not(:hover):not(:focus) {\n    color: #5c7080; }\n    .up-dark .up-input-group .up-input:not(:focus) + .up-button.up-minimal:not(:hover):not(:focus), .up-dark\n    .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:not(:hover):not(:focus) {\n      color: #bfccd6; }\n    .up-input-group .up-input:not(:focus) + .up-button.up-minimal:not(:hover):not(:focus) .up-icon, .up-input-group .up-input:not(:focus) + .up-button.up-minimal:not(:hover):not(:focus) .up-icon-standard, .up-input-group .up-input:not(:focus) + .up-button.up-minimal:not(:hover):not(:focus) .up-icon-large,\n    .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:not(:hover):not(:focus) .up-icon,\n    .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:not(:hover):not(:focus) .up-icon-standard,\n    .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:not(:hover):not(:focus) .up-icon-large {\n      color: #5c7080; }\n  .up-input-group .up-input:not(:focus) + .up-button.up-minimal:disabled,\n  .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:disabled {\n    color: rgba(92, 112, 128, 0.5) !important; }\n    .up-input-group .up-input:not(:focus) + .up-button.up-minimal:disabled .up-icon, .up-input-group .up-input:not(:focus) + .up-button.up-minimal:disabled .up-icon-standard, .up-input-group .up-input:not(:focus) + .up-button.up-minimal:disabled .up-icon-large,\n    .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:disabled .up-icon,\n    .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:disabled .up-icon-standard,\n    .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:disabled .up-icon-large {\n      color: rgba(92, 112, 128, 0.5) !important; }\n  .up-input-group.up-disabled {\n    cursor: not-allowed; }\n    .up-input-group.up-disabled .up-icon {\n      color: rgba(92, 112, 128, 0.5); }\n  .up-input-group.up-large .up-button {\n    min-width: 30px;\n    min-height: 30px;\n    line-height: 30px;\n    margin: 5px;\n    line-height: 0; }\n  .up-input-group.up-large .up-icon {\n    margin: 0 12px;\n    line-height: 40px; }\n  .up-input-group.up-large .up-input {\n    height: 40px;\n    line-height: 40px;\n    font-size: 16px; }\n    .up-input-group.up-large .up-input[type=\"search\"], .up-input-group.up-large .up-input.up-round {\n      padding: 0 15px; }\n    .up-input-group.up-large .up-input:not(:first-child) {\n      padding-left: 40px; }\n    .up-input-group.up-large .up-input:not(:last-child) {\n      padding-right: 40px; }\n  .up-input-group.up-large .up-spinner {\n    margin: 8px; }\n  .up-input-group.up-round .up-button,\n  .up-input-group.up-round .up-input,\n  .up-input-group.up-round .up-tag {\n    border-radius: 30px; }\n  .up-dark .up-input-group .up-icon {\n    color: #bfccd6; }\n  .up-dark .up-input-group.up-disabled .up-icon {\n    color: rgba(191, 204, 214, 0.5); }\n  .up-input-group.up-intent-primary .up-input {\n    box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input-group.up-intent-primary .up-input:focus {\n      box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input-group.up-intent-primary .up-input[readonly] {\n      box-shadow: inset 0 0 0 1px #137cbd; }\n    .up-input-group.up-intent-primary .up-input:disabled, .up-input-group.up-intent-primary .up-input.up-disabled {\n      box-shadow: none; }\n  .up-input-group.up-intent-primary .up-icon {\n    color: #106ba3; }\n    .up-dark .up-input-group.up-intent-primary .up-icon {\n      color: #48aff0; }\n  .up-input-group.up-intent-success .up-input {\n    box-shadow: 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input-group.up-intent-success .up-input:focus {\n      box-shadow: 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input-group.up-intent-success .up-input[readonly] {\n      box-shadow: inset 0 0 0 1px #0f9960; }\n    .up-input-group.up-intent-success .up-input:disabled, .up-input-group.up-intent-success .up-input.up-disabled {\n      box-shadow: none; }\n  .up-input-group.up-intent-success .up-icon {\n    color: #0d8050; }\n    .up-dark .up-input-group.up-intent-success .up-icon {\n      color: #3dcc91; }\n  .up-input-group.up-intent-warning .up-input {\n    box-shadow: 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input-group.up-intent-warning .up-input:focus {\n      box-shadow: 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input-group.up-intent-warning .up-input[readonly] {\n      box-shadow: inset 0 0 0 1px #d9822b; }\n    .up-input-group.up-intent-warning .up-input:disabled, .up-input-group.up-intent-warning .up-input.up-disabled {\n      box-shadow: none; }\n  .up-input-group.up-intent-warning .up-icon {\n    color: #bf7326; }\n    .up-dark .up-input-group.up-intent-warning .up-icon {\n      color: #ffb366; }\n  .up-input-group.up-intent-danger .up-input {\n    box-shadow: 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input-group.up-intent-danger .up-input:focus {\n      box-shadow: 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input-group.up-intent-danger .up-input[readonly] {\n      box-shadow: inset 0 0 0 1px #db3737; }\n    .up-input-group.up-intent-danger .up-input:disabled, .up-input-group.up-intent-danger .up-input.up-disabled {\n      box-shadow: none; }\n  .up-input-group.up-intent-danger .up-icon {\n    color: #c23030; }\n    .up-dark .up-input-group.up-intent-danger .up-icon {\n      color: #ff7373; }\n"], _a.raw = ["\n.up-input {\n  outline: none;\n  border: none;\n  border-radius: 3px;\n  box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n  background: #ffffff;\n  height: 30px;\n  padding: 0 10px;\n  vertical-align: middle;\n  line-height: 30px;\n  color: #182026;\n  font-size: 14px;\n  font-weight: 400;\n  transition: box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n  .up-input::-webkit-input-placeholder {\n    opacity: 1;\n    color: rgba(92, 112, 128, 0.5); }\n  .up-input::-moz-placeholder {\n    opacity: 1;\n    color: rgba(92, 112, 128, 0.5); }\n  .up-input:-ms-input-placeholder {\n    opacity: 1;\n    color: rgba(92, 112, 128, 0.5); }\n  .up-input::placeholder {\n    opacity: 1;\n    color: rgba(92, 112, 128, 0.5); }\n  .up-input:focus {\n    box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n  .up-input[type=\"search\"], .up-input.up-round {\n    border-radius: 30px;\n    -moz-box-sizing: border-box;\n         box-sizing: border-box;\n    padding-left: 10px; }\n  .up-input[readonly] {\n    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.15); }\n  .up-input:disabled, .up-input.up-disabled {\n    box-shadow: none;\n    background: rgba(206, 217, 224, 0.5);\n    cursor: not-allowed;\n    color: rgba(92, 112, 128, 0.5);\n    resize: none; }\n  .up-dark .up-input {\n    box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n    background: rgba(16, 22, 26, 0.3);\n    color: #f5f8fa; }\n    .up-dark .up-input::-webkit-input-placeholder {\n      color: rgba(191, 204, 214, 0.5); }\n    .up-dark .up-input::-moz-placeholder {\n      color: rgba(191, 204, 214, 0.5); }\n    .up-dark .up-input:-ms-input-placeholder {\n      color: rgba(191, 204, 214, 0.5); }\n    .up-dark .up-input::placeholder {\n      color: rgba(191, 204, 214, 0.5); }\n    .up-dark .up-input:focus {\n      box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n    .up-dark .up-input[readonly] {\n      box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4); }\n    .up-dark .up-input:disabled, .up-dark .up-input.up-disabled {\n      box-shadow: none;\n      background: rgba(57, 75, 89, 0.5);\n      color: rgba(191, 204, 214, 0.5); }\n  .up-input.up-intent-primary {\n    box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input.up-intent-primary:focus {\n      box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input.up-intent-primary[readonly] {\n      box-shadow: inset 0 0 0 1px #137cbd; }\n    .up-input.up-intent-primary:disabled, .up-input.up-intent-primary.up-disabled {\n      box-shadow: none; }\n    .up-dark .up-input.up-intent-primary {\n      box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .up-dark .up-input.up-intent-primary:focus {\n        box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .up-dark .up-input.up-intent-primary[readonly] {\n        box-shadow: inset 0 0 0 1px #137cbd; }\n      .up-dark .up-input.up-intent-primary:disabled, .up-dark .up-input.up-intent-primary.up-disabled {\n        box-shadow: none; }\n  .up-input.up-intent-success {\n    box-shadow: 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input.up-intent-success:focus {\n      box-shadow: 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input.up-intent-success[readonly] {\n      box-shadow: inset 0 0 0 1px #0f9960; }\n    .up-input.up-intent-success:disabled, .up-input.up-intent-success.up-disabled {\n      box-shadow: none; }\n    .up-dark .up-input.up-intent-success {\n      box-shadow: 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .up-dark .up-input.up-intent-success:focus {\n        box-shadow: 0 0 0 1px #0f9960, 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .up-dark .up-input.up-intent-success[readonly] {\n        box-shadow: inset 0 0 0 1px #0f9960; }\n      .up-dark .up-input.up-intent-success:disabled, .up-dark .up-input.up-intent-success.up-disabled {\n        box-shadow: none; }\n  .up-input.up-intent-warning {\n    box-shadow: 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input.up-intent-warning:focus {\n      box-shadow: 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input.up-intent-warning[readonly] {\n      box-shadow: inset 0 0 0 1px #d9822b; }\n    .up-input.up-intent-warning:disabled, .up-input.up-intent-warning.up-disabled {\n      box-shadow: none; }\n    .up-dark .up-input.up-intent-warning {\n      box-shadow: 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .up-dark .up-input.up-intent-warning:focus {\n        box-shadow: 0 0 0 1px #d9822b, 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .up-dark .up-input.up-intent-warning[readonly] {\n        box-shadow: inset 0 0 0 1px #d9822b; }\n      .up-dark .up-input.up-intent-warning:disabled, .up-dark .up-input.up-intent-warning.up-disabled {\n        box-shadow: none; }\n  .up-input.up-intent-danger {\n    box-shadow: 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input.up-intent-danger:focus {\n      box-shadow: 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input.up-intent-danger[readonly] {\n      box-shadow: inset 0 0 0 1px #db3737; }\n    .up-input.up-intent-danger:disabled, .up-input.up-intent-danger.up-disabled {\n      box-shadow: none; }\n    .up-dark .up-input.up-intent-danger {\n      box-shadow: 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .up-dark .up-input.up-intent-danger:focus {\n        box-shadow: 0 0 0 1px #db3737, 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .up-dark .up-input.up-intent-danger[readonly] {\n        box-shadow: inset 0 0 0 1px #db3737; }\n      .up-dark .up-input.up-intent-danger:disabled, .up-dark .up-input.up-intent-danger.up-disabled {\n        box-shadow: none; }\n  .up-input::-ms-clear {\n    display: none; \n  }\n.up-input-group {\n  display: block;\n  position: relative; }\n  .up-input-group .up-input {\n    position: relative;\n  }\n    .up-input-group .up-input:not(:first-child) {\n      padding-left: 30px; }\n    .up-input-group .up-input:not(:last-child) {\n      padding-right: 30px; }\n  .up-input-group .up-input-action,\n  .up-input-group > .up-button,\n  .up-input-group > .up-icon {\n    position: absolute;\n    top: 0; }\n    .up-input-group .up-input-action:first-child,\n    .up-input-group > .up-button:first-child,\n    .up-input-group > .up-icon:first-child {\n      left: 0; }\n    .up-input-group .up-input-action:last-child,\n    .up-input-group > .up-button:last-child,\n    .up-input-group > .up-icon:last-child {\n      right: 0; }\n  .up-input-group .up-button {\n    min-width: 24px;\n    min-height: 24px;\n    line-height: 24px;\n    margin: 3px;\n    padding-top: 0;\n    padding-bottom: 0; }\n  .up-input-group .up-icon {\n    line-height: 1;\n    font-family: \"Icons16\", sans-serif;\n    font-size: 16px;\n    font-weight: 400;\n    font-style: normal;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    z-index: 1;\n    margin: 0 7px;\n    line-height: 30px;\n    color: #5c7080; }\n  .up-input-group .up-spinner {\n    margin: 3px; }\n  .up-input-group .up-tag {\n    margin: 5px; }\n  .up-input-group .up-input:not(:focus) + .up-button.up-minimal:not(:hover):not(:focus),\n  .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:not(:hover):not(:focus) {\n    color: #5c7080; }\n    .up-dark .up-input-group .up-input:not(:focus) + .up-button.up-minimal:not(:hover):not(:focus), .up-dark\n    .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:not(:hover):not(:focus) {\n      color: #bfccd6; }\n    .up-input-group .up-input:not(:focus) + .up-button.up-minimal:not(:hover):not(:focus) .up-icon, .up-input-group .up-input:not(:focus) + .up-button.up-minimal:not(:hover):not(:focus) .up-icon-standard, .up-input-group .up-input:not(:focus) + .up-button.up-minimal:not(:hover):not(:focus) .up-icon-large,\n    .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:not(:hover):not(:focus) .up-icon,\n    .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:not(:hover):not(:focus) .up-icon-standard,\n    .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:not(:hover):not(:focus) .up-icon-large {\n      color: #5c7080; }\n  .up-input-group .up-input:not(:focus) + .up-button.up-minimal:disabled,\n  .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:disabled {\n    color: rgba(92, 112, 128, 0.5) !important; }\n    .up-input-group .up-input:not(:focus) + .up-button.up-minimal:disabled .up-icon, .up-input-group .up-input:not(:focus) + .up-button.up-minimal:disabled .up-icon-standard, .up-input-group .up-input:not(:focus) + .up-button.up-minimal:disabled .up-icon-large,\n    .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:disabled .up-icon,\n    .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:disabled .up-icon-standard,\n    .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:disabled .up-icon-large {\n      color: rgba(92, 112, 128, 0.5) !important; }\n  .up-input-group.up-disabled {\n    cursor: not-allowed; }\n    .up-input-group.up-disabled .up-icon {\n      color: rgba(92, 112, 128, 0.5); }\n  .up-input-group.up-large .up-button {\n    min-width: 30px;\n    min-height: 30px;\n    line-height: 30px;\n    margin: 5px;\n    line-height: 0; }\n  .up-input-group.up-large .up-icon {\n    margin: 0 12px;\n    line-height: 40px; }\n  .up-input-group.up-large .up-input {\n    height: 40px;\n    line-height: 40px;\n    font-size: 16px; }\n    .up-input-group.up-large .up-input[type=\"search\"], .up-input-group.up-large .up-input.up-round {\n      padding: 0 15px; }\n    .up-input-group.up-large .up-input:not(:first-child) {\n      padding-left: 40px; }\n    .up-input-group.up-large .up-input:not(:last-child) {\n      padding-right: 40px; }\n  .up-input-group.up-large .up-spinner {\n    margin: 8px; }\n  .up-input-group.up-round .up-button,\n  .up-input-group.up-round .up-input,\n  .up-input-group.up-round .up-tag {\n    border-radius: 30px; }\n  .up-dark .up-input-group .up-icon {\n    color: #bfccd6; }\n  .up-dark .up-input-group.up-disabled .up-icon {\n    color: rgba(191, 204, 214, 0.5); }\n  .up-input-group.up-intent-primary .up-input {\n    box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input-group.up-intent-primary .up-input:focus {\n      box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input-group.up-intent-primary .up-input[readonly] {\n      box-shadow: inset 0 0 0 1px #137cbd; }\n    .up-input-group.up-intent-primary .up-input:disabled, .up-input-group.up-intent-primary .up-input.up-disabled {\n      box-shadow: none; }\n  .up-input-group.up-intent-primary .up-icon {\n    color: #106ba3; }\n    .up-dark .up-input-group.up-intent-primary .up-icon {\n      color: #48aff0; }\n  .up-input-group.up-intent-success .up-input {\n    box-shadow: 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input-group.up-intent-success .up-input:focus {\n      box-shadow: 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input-group.up-intent-success .up-input[readonly] {\n      box-shadow: inset 0 0 0 1px #0f9960; }\n    .up-input-group.up-intent-success .up-input:disabled, .up-input-group.up-intent-success .up-input.up-disabled {\n      box-shadow: none; }\n  .up-input-group.up-intent-success .up-icon {\n    color: #0d8050; }\n    .up-dark .up-input-group.up-intent-success .up-icon {\n      color: #3dcc91; }\n  .up-input-group.up-intent-warning .up-input {\n    box-shadow: 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input-group.up-intent-warning .up-input:focus {\n      box-shadow: 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input-group.up-intent-warning .up-input[readonly] {\n      box-shadow: inset 0 0 0 1px #d9822b; }\n    .up-input-group.up-intent-warning .up-input:disabled, .up-input-group.up-intent-warning .up-input.up-disabled {\n      box-shadow: none; }\n  .up-input-group.up-intent-warning .up-icon {\n    color: #bf7326; }\n    .up-dark .up-input-group.up-intent-warning .up-icon {\n      color: #ffb366; }\n  .up-input-group.up-intent-danger .up-input {\n    box-shadow: 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input-group.up-intent-danger .up-input:focus {\n      box-shadow: 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .up-input-group.up-intent-danger .up-input[readonly] {\n      box-shadow: inset 0 0 0 1px #db3737; }\n    .up-input-group.up-intent-danger .up-input:disabled, .up-input-group.up-intent-danger .up-input.up-disabled {\n      box-shadow: none; }\n  .up-input-group.up-intent-danger .up-icon {\n    color: #c23030; }\n    .up-dark .up-input-group.up-intent-danger .up-icon {\n      color: #ff7373; }\n"], styled_components_1.css(_a));
var HeightLarge = (_b = ["\n  height: 40px;\n  line-height: 40px;\n  font-size: 16px;\n  padding: 0 15px; \n"], _b.raw = ["\n  height: 40px;\n  line-height: 40px;\n  font-size: 16px;\n  padding: 0 15px; \n"], styled_components_1.css(_b));
var error = (_c = ["\n.up-input {\n  border-color:", ";\n  border-width: 1px;\n  border-style: solid;\n}\n"], _c.raw = ["\n.up-input {\n  border-color:", ";\n  border-width: 1px;\n  border-style: solid;\n}\n"], styled_components_1.css(_c, function (props) { return props.theme.error; }));
exports.InputStyled = (_d = ["\n  ", "\n  ", "\n  color: ", ";\n  .up-input {\n    width: ", ";\n    ", "\n  }\n"], _d.raw = ["\n  ", "\n  ", "\n  color: ", ";\n  .up-input {\n    width: ", ";\n    ", "\n  }\n"], styled_components_1.default(BaseInput)(_d, inputStyles, function (props) {
    return props.hasError ? error : (_a = [""], _a.raw = [""], styled_components_1.css(_a));
    var _a;
}, function (props) { return props.color; }, function (props) { return maps_1.sizeMap[props.width]; }, function (props) {
    return (props.height == "large" ? HeightLarge : (_a = [""], _a.raw = [""], styled_components_1.css(_a)));
    var _a;
}));
var _a, _b, _c, _d;
//# sourceMappingURL=styles.js.map