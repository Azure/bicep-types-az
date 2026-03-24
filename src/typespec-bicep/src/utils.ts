// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export interface SuccessResult<V> {
  success: true;
  value: V;
}

export interface FailureResult<E> {
  success: false;
  error: E;
}

export type Result<A, E> = SuccessResult<A> | FailureResult<E>;

export function success<V>(value: V): SuccessResult<V> {
  return { success: true, value };
}

export function failure<E>(error: E): FailureResult<E> {
  return { success: false, error };
}
