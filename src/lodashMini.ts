/**
* lodashMini.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Imports a subset of lodash library needed for ReSub
*/

import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';
import uniqueId from 'lodash/uniqueId';
import isNumber from 'lodash/isNumber';
import flatten from 'lodash/flatten';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import forEach from 'lodash/forEach';
import indexOf from 'lodash/indexOf';
import remove from 'lodash/remove';
import values from 'lodash/values';
import union from 'lodash/union';
import uniq from 'lodash/uniq';
import pull from 'lodash/pull';
import find from 'lodash/find';
import noop from 'lodash/noop';
import map from 'lodash/map';
import get from 'lodash/get';

interface Dictionary<T> {
    [index: string]: T;
}

export {
    Dictionary,
    isFunction,
    isString,
    uniqueId,
    isNumber,
    flatten,
    isEmpty,
    isEqual,
    forEach,
    indexOf,
    remove,
    values,
    union,
    uniq,
    pull,
    find,
    noop,
    map,
    get,
};
