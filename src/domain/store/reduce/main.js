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
import { uniqueId, map } from 'lodash';

function addTodo(state: State, title: string): State {
  return {
    todos: [...state.todos, { id: uniqueId(), title, status: 0 }]
  };
}

// For testing on the REPL
window.addTodo = addTodo;

function updateTodoTitle(state: State, id: string, title: string): State {
  return {
    todos: map(state.todos, t => t.id == id ? { ...t, title  } : t)
  };
}

// For testing on the REPL
window.updateTodoTitle = updateTodoTitle;

export function reduceApp(state : State = defaultState, action : Action ) : State {
  switch (action.type) {
    case 'ADD-TODO':
      return addTodo(state, action.title);
    default:
      return state;
  }
}

/*
 * EOF: src/domain/store/reduce/main.js
 */
