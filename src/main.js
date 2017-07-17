/**
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/main.jsx
 * This is the application bootstrap, the entry point of your application.
 */

// @flow

import render from './renderer'
import { getLogger } from "domain/logger";
import { store } from "domain/store/main";
require('../style/main.css');

const logger = getLogger("Main");

logger.debug('Subscribing to store');
store.subscribe(render);

render();

/*
 * EOF: src/main.jsx
 */
