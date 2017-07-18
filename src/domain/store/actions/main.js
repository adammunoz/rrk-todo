/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/domain/store/actions/main.js
 *
 * This file defines the actions for your application. It can be broken down
 * into many different files depending on the size of your application. If you
 * do, keep naming consistent and use this file as an index.
 */

// @flow

export type AddTodo = {
  type: 'ADD-TODO',
  title: string
}

export type Action = AddTodo;

/*
 * EOF: src/domain/store/actions/main.js
 */
