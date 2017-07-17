/**
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/renderer.jsx
 */

// @flow

import * as React from "react";
import * as ReactDOM from "react-dom";
import { getLogger } from "domain/logger";
import { state } from "domain/store/main";
const logger = getLogger("Renderer");

export default function render() : void {
  logger.time("DOM Render");
  const App = require('components/app').App;
  ReactDOM.render(
    <App state={state()} />, document.getElementById("app"));
  logger.timeEnd("DOM Rendered");
}

if (module.hot) {
  module.hot.accept('components/app', () => {
    logger.time('Hot update applied');
    render();
    logger.timeEnd('Hot update applied');
  });
}

/*
 * EOF: src/renderer.jsx
 */
