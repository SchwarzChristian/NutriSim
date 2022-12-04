import React from "react";

export function fu<T>(ths: React.Component<any, any, any>, value: T): T {
	return forceUpdateSideEffect<T>(ths, value);
}

export function forceUpdateSideEffect<T>(ths: React.Component, value: T): T {
	ths.forceUpdate();
	return value;
}