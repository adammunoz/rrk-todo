/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/domain/middleware/user.js
 *
 * This file represents the 'user actor' in your application.
 * It contains handlers which dispatch all actions as a result of user events.
 */

// @flow

import { store } from 'domain/store/main';

export function addTodo(title: string) {
  store.dispatch({ type: 'ADD-TODO', title });
}

window.addTodo = addTodo;