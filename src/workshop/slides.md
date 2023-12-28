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

# Type
재사용하는 타입에 쉬운 이름을 할당하는 것을 타입 별칭(type alias)이라고 한다.

- 타입 별칭(type alias)은 타입 시스템의 **'복사해서 붙여넣기'처럼 작동**합니다. TypeScript가 타입 별칭을 발견하면 해당 별칭이 참조하는 실제 타입을 입력한 것처럼 작동합니다.
- **타입 별칭은 자바스크립트로 컴파일되지 않습니다.** 순전히 TypeScript 타입 시스템에만 존재합니다.

---

# Interface
객체 형태를 설명하는 또 다른 방법. Interface는 별칭으로 된 객체 타입과 여러 면에서 유사하지만 일반적으로 더 읽기 쉬운 오류 메시지, 더 빠른 컴파일러 성능, 클래스와의 더 나은 상호 운용성을 위해 선호합니다 -  p.131

## 요약
- 일반적으로 **Interface**에서 TypeScript **타입 검사기**가 더 빨리 작동합니다. Interface는 타입 별칭이 하는 것처럼 새로운 객체 리터럴의 동적인 복사 붙여넣기 보다 **내부적으로 더 쉽게 캐시할 수 있는 명명된 타입을 선언**합니다.
- 인터페이스는 이름 없는 객체 리터럴의 별칭이 아닌 이름 있는(명명된) 객체로 간주되므로 어려운 특이케이스에서 나타나는 오류 메시지를 좀 더 쉽게 읽을 수 있습니다.

---

# Type vs Interface 결론

- 러닝 타입스크립트의 저자 조시 골드버그는 인터페이스를 선호, 즉 타입 별칭의 유니언 타입과 같은 기능이 필요할 때 까지는 인터페이스를 사용
- 이펙티브 타입스크립트의 저자 댄 밴더캄은 팀의 선호에 맞게, 기존 프로젝트의 방법론에 맞게 사용하는 것이 좋다고 함

> 팀의 선호에 맞게 사용하는 것이 가장 좋다고 함

---

# 타입 전용 가져오기와 내보내기
TypeScript의 트랜스파일러는 JavaScript 런타임에서 사용되지 않으므로 파일의 가져오기와 내보내기에서 **타입 시스템에서만 사용하는 값을 제거**합니다.

- TypeScript는 export와 import 선언에서 개별적으로 가져온 이름 또는 전체 {...} 객체 앞에 type 제한자를 추가할 수 있으며, 이를 통해 타입 시스템에서만 사용된다는 것을 나타낼 수 있습니다. 패지키의 기본 가져오기를 type로 표시할 수도 있습니다.

> type 제한자 사용은 타입스크립트 외부의 트랜스파일러에게 명확하게 알리는 일

---

# Enum vs Object

- **Enum**: TypeScript 중심 환경과 값 유형 안전성, 명확하고 자체 문서화 코드에서 작업하는 경우 열거형
- **Object**:  JavaScript 호환성, 프로젝트가 성능이나 파일 크기에 민감한 경우 객체의 우선 순위가 더 높음

---

```ts
export enum ErrorType {
    SwearWord = 'SWEAR_WORD', // 비속어 발견
    Duplication = 'DUPLICATION', // 중복 작성
    Authentication = 'AUTHENTICATION', // 인증에러
    Authorization = 'AUTHORIZATION', // 권한에러
    NotExistData = 'NOT_EXIST_DATA', // 해당 데이터 없음
    Validation = 'VALIDATION' // 값 에러
}

// Usage example
function handleError(error: ErrorType) {
    switch (error) {
        case ErrorType.SwearWord:
            console.log('Handle swear word error');
            break;
        // ... other cases
    }
}

handleError(ErrorType.Authentication);
```

---

```ts

export const ERROR = {
    SwearWord: 'SWEAR_WORD', // 비속어 발견
    Duplication: 'DUPLICATION', // 중복 작성
    Authentication: 'AUTHENTICATION', // 인증에러
    Authorization: 'AUTHORIZATION', // 권한에러
    NotExistData: 'NOT_EXIST_DATA', // 해당 데이터 없음
    Validation: 'VALIDATION' // 값 에러
} as const;

type ErrorType = typeof ERROR[keyof typeof ERROR];

// Usage example
function handleError(error: ErrorType) {
    if (error === ERROR.Authentication) {
        console.log('Handle authentication error');
    }
    // ... other conditions
}

handleError(ERROR.Authorization);
```

---

# 십억달러의 실수(null 검사 처리법)

```ts
// null 검사가 없는 언어에서는 null 할당하는 것이 허용 - C++, JAVA
const firstName: string = null;
```

null 참조의 발명으로 십억 달러의 고통과 피해를 입었다.
`strictNullChecks` 옵션을 true로 설정하여 null 또는 undefined 값으로 오류로부터 코드를 안전하게 지킬 수 있다.

---

# 타입스크립트를 이해하기 위한 개념

- 유니언(union): 값에 허용된 타입을 두 개 이상의 가능한 타입으로 확장하는 것
- 내로잉(narrowing): 값에 허용된 타입이 하나 이상의 가능한 타입이 되지 않도록 좁히는 것

---

