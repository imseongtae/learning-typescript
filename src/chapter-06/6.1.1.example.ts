/**
 * 배열과 함수 타입
 * @module 6-1-1-Example
 */

// Type is a function that returns an array of strings
let createStrings: () => string[];

// Type is an array of functions that each return a string
let stringCreators: (() => string)[];
