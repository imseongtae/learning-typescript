/**
 * 타입 별칭 결합
 * @module 3-5-2-타입 별칭 결합-Example
 */

/**
 * @summary 타입 별칭은 타입시스템에만 존재하는 개념
 * @description 타입 별칭은 타입시스템에만 존재하는 개념이므로, 런타임 코드에서는 참조할 수 없다. 타입스크립트는 런타임에 존재하지 않는 항목에 접근하려고 하면 타입 오류로 알려준다.
 */
type Id = number | string;

/**
 * @summary IdMaybe는 타입은 다음과 같음: number | string | undefined | null
 * @description 타입 별칭은 다른 타입 별칭을 참조할 수 있다. 유니언 타입인 타입 별칭 내에 또 다른 유니언 타입인 타입 별칭을 포함하고 있다면 다른 타입 별칭을 참조하는 것이 유용하다.
 */
type IdMaybe = Id | undefined | null;

// 타입 별칭의 순서는 상관 없다. 참조할 타입 별칭을 나중에 선언해도 된다.
// type IdMaybe = Id | undefined | null;
// type Id = number | string;
