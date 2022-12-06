import React from "react";

export async function fup<T>(ths: React.Component, promise: Promise<T>): Promise<T> {
	return forceUpdateSideEffectOnPromise(ths, promise);
}

export async function forceUpdateSideEffectOnPromise<T>(
	ths: React.Component,
	promise: Promise<T>
): Promise<T> {
	return await promise.then(value => fu(ths, value));
}

export function fu<T>(ths: React.Component<any, any, any>, value: T): T {
	return forceUpdateSideEffect<T>(ths, value);
}

export function forceUpdateSideEffect<T>(ths: React.Component, value: T): T {
	ths.forceUpdate();
	return value;
}
