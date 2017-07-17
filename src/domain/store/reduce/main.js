/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/domain/store/reduce/main.js
 *
 * This file is the 'index' of application store reducers. It is responsible
 * for updating the current store state according to actions types.
 */

// @flow

import type { State, Todo } from 'domain/store/state/main';
import type { Action } from 'domain/store/actions/main';
import { defaultState } from 'domain/store/state/main';

export function addTodo(state: State, todo: Todo): State {
  return {
    todos: [...state.todos, todo]
  }
}

// Test in browser REPL
window.addTodo = addTodo;

export function reduceApp(state : State = defaultState, action : Action ) : State {
  switch (action.type) {
    default:
      return state;
  }
}

/*
 * EOF: src/domain/store/reduce/main.js
 */
