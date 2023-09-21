/**
 * 타입 별칭 - 재사용하는 타입에 더 쉬운 이름을 할당하는 것
 * @module 3-5-0-타입 별칭-Example
 */

let rawDataFirst: boolean | number | string | null | undefined;
let rawDataSecond: boolean | number | string | null | undefined;
let rawDataThird: boolean | number | string | null | undefined;

/**
 * @summary 편의상 타입 별칭은 파스칼 케이스로 지정한다
 * @description 타입 별칭은 타입이 복잡해질 때마다 사용할 수 있는 편리한 기능
 */
type RawData = boolean | number | string | null | undefined;

let newRawDataFirst: RawData;
let newRawDataSecond: RawData;
let newRawDataThird: RawData;
