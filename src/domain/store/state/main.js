/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/domain/store/state/main.js
 * This file is contains our application state and type definitions.
 */

// @flow

type Done = 1;
type NotDone = 0;

export type Todo = {
  title: string,
  sattus: Done | NotDone
}

export type State = {
  todos: Array<Todo>
}

export const defaultState = {
  todos: []
};

/*
 * EOF: src/domain/store/state/main.js
 */
