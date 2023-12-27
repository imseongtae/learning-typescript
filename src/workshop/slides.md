---
marp: true
---

# TS Workshop - by haemil

### Table of contents
- TSDoc
- 선언 파일
- Type vs Interface
- Enum vs Object
- 십억달러의 실수(null 검사 처리법)
- 타입 내로잉
- 타입 별칭
- 함수오버로드

---

# TypeScript
TypeScript는 종종 자바스크립트의 상위 집합 혹은 타입이 있는 자바스크립트로 설명되곤 한다. 

## TypeScript는 네 가지로 설명됨
1. **프로그래밍 언어**: JavaScript의 모든 구문과 타입을 정의하고 사용하기 위한 새로운 TypeScript 고유 구문이 포함된 언어
1. **타입 검사기**: JavaScript 및 TypeScript 로 작성된 일련의 파일에서 생성한 모든 **구성 요소를 이해하고, 잘못 구성된 부분을 알려주는 프로그램**
1. **컴파일러**: 타입 검사기를 실행하고, 문제를 보고한 후에 이에 대응되는 **JavaScript 코드를 생성**하는 프로그램
1. **언어 서비스**: 타입 검사기를 사용해 VSCode와 같은 편집기에 개발자에게 유용한 유틸리티 제공법을 알려주는 프로그램

---

# 타입 시스템
- 타입 시스템(type system)은 프로그래밍 언어가 프로그램에서 가질 수 있는 타입을 이해하는 방법에 대한 규칙 집합이다.
>  타입 검사기가 타입스크립트로 작성된 구문을 이해하고, 접근하는 방법에 대한 규칙

## TypeScript 타입 시스템의 동작 방법
1. 코드를 읽고, 존재하는 모든 타입과 값을 이해한다.
1. 각 값이 초기 선언에서 가질 수 있는 타입을 확인한다.
1. 각 값이 추후 코드에서 어떻게 사용될 수 있는지 모든 방법을 확인한다.
1. 값의 사용법이 타입과 일치하지 않으면 사용자에게 오류를 표시한다.

---

# 타입 시스템을 잘 이용하는 것이 핵심 ✅

---

# TSDoc

## TSDoc의 사용법
JSDoc 에는 타입 정보를 명시하는 규칙(`@param {string} name`)이 있지만, 타입스크립트에서는 타입 정보가 코드에 있기 때문에 TSDoc에서는 타입 정보를 명시하면 안 됩니다.

## 요약
- export한 함수, 클래스, 타입에 주석을 달 때는 **TSDoc**✅ 형태를 사용하자. JSDoc/TSDoc 형태의 주석을 달면 편집기가 주석 정보를 표시해준다.
- 문서 서식을 위해 마크다운을 적용할 수 있다.
- 주석에 타입 정보를 표현하면 안됨 🥲
  - TSDoc의 주석은 간단히 요점만 언급하도록 권고하도록 컨벤션을 가짐

---

# 선언 파일

- `.d.ts` 선언 파일은 런타임 코드를 포함할 수 없다는 제약 사항을 제외하고는 `.ts` 파일과 유사하게 작동
- `.d.ts` 파일은 JavaScript 로 컴파일할 수 있는 모든 런타임 코드를 포함할 수 없습니다.
- `.d.ts`(선언 파일)는 값이 아닌 타입만 선언할 수 있는 코드 영역을 의미하는 **앰비언트 컨텍스트**를 생성합니다.
  - 구현이 없는 선언, 즉 타입 정보만을 포함하며 런타임 JavaScript 코드를 생성하지 않음

> 타입만을 선언한다면 `.d.ts`(선언 파일)을 사용하는 것이 **타입스크립트의 타입 시스템을 보다 열심히 활용하는 방안**

---

```ts
// api/attendance.index.ts

/** 출석체크 API Endpoint path */
const ATTENDANCE_DOCS = {
  attendance: () => '/attend-check-event',
  reward: (uuid: string) => `/attend-check-event/${uuid}/reward`,  
  gift: () => '/gift',
};
```

```ts
// api/attendance.api.types.d.ts

/** 출석체크 목록의 개별 항목을 나타내는 타입 */
export type APIAttendanceListItem = {
  uuid: string;
  content: string;
  published_at: Date;
  expired_at: Date;
  deleted_at: Date;
  created_at: Date;
  update_at: Date;
};
```

---

# Type vs Interface

타입스크립트에서 타입을 정의하는 두 가지 방법

```ts
type TState = {
  name: string;
  capital: string;
};
```

```ts
interface IState {
  name: string;
  capital: string;
}
```

> C#에서 비롯된 관례로 인한 표기법, 지양해야 할 네이밍 스타일

---

- 유니언(union): 값에 허용된 타입을 두 개 이상의 가능한 타입으로 확장하는 것
- 내로잉(narrowing): 값에 허용된 타입이 하나 이상의 가능한 타입이 되지 않도록 좁히는 것

---

