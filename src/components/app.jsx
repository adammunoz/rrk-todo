/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/components/app.jsx
 * This file defines the 'app' component and how it will be rendered.
 */

// @flow

import type { State } from "domain/store/state/main";
import * as React from "react";
import * as userMiddleware from 'domain/middleware/user';

// Define App as an importable function
export function App({ state } : { state: State }) {

 const todos = state.todos;

 return (
    <div>
      { todos.map( t => <p key={t.id}>{t.title}</p>) }
    </div>
  );
}

/*
 * EOF: src/components/app.jsx
 */
