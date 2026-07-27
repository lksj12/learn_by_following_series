# CRUD with TDD 배움일기

실제 강좌에서는 MongoDB를 활용했지만, 이번 실습에서는 외부 데이터베이스 환경에 대한 의존성을 줄이고 추후에도 코드를 쉽게 재현할 수 있도록 SQLite를 사용했다. SQLite는 별도의 데이터베이스 서버를 구성하지 않고 로컬 파일을 통해 사용할 수 있으므로, 같은 프로젝트 안에서 CRUD와 테스트 동작을 다시 확인하기에 용이하다.

## 학습 범위

상품 CRUD API와 테스트 코드를 살펴보았다. 이 실습은 Express로 API를 구성하고, `better-sqlite3`로 SQLite 데이터베이스에 접근하며, Jest를 테스트 러너로 사용한다. 테스트 목적에 따라 `node-mocks-http`를 이용한 단위 테스트와 `supertest`를 이용한 통합 테스트를 구분해 작성했다.

## TDD(Test Driven Development)란?

TDD는 구현 코드보다 테스트를 먼저 작성하고, 다음 과정을 짧게 반복하며 기능을 개발하는 방식이다.

1. **Red**: 구현하려는 동작을 테스트로 작성하고 테스트가 실패하는지 확인한다.
2. **Green**: 테스트를 통과시키는 데 필요한 최소한의 코드를 구현한다.
3. **Refactor**: 테스트가 통과하는 상태를 유지하면서 코드 구조를 개선한다.

테스트를 먼저 작성하면 “이 기능이 어떤 입력을 받고 어떤 결과를 내야 하는가”를 코드로 구체화할 수 있다.

## TDD가 필요한 이유

TDD는 요구사항을 실행 가능한 테스트로 표현하고, 구현이 그 요구사항을 만족하는지 반복해서 확인하는 데 필요하다. 이 실습의 테스트가 확인하는 내용을 기준으로 보면 다음과 같은 장점이 있다.

- **기능의 기대 동작을 명확히 한다.** 상품 생성은 `201`, 정상 조회·수정·삭제는 `200`, 존재하지 않는 상품은 `404`를 반환해야 한다는 조건이 테스트에 표현되어 있다.
- **예외 처리의 누락을 발견할 수 있다.** 모델에서 오류가 발생하면 Controller가 `next(error)`를 호출하는지 단위 테스트로 확인하고, 필수 필드가 빠진 요청은 통합 테스트에서 `500`과 오류 메시지를 반환하는지 확인한다.
- **변경으로 인한 회귀를 확인할 수 있다.** Controller, Model, Route 중 하나를 수정한 뒤 기존 CRUD 테스트를 다시 실행하면 이미 구현된 동작이 유지되는지 점검할 수 있다.
- **코드를 작은 책임으로 나누도록 돕는다.** 이 실습은 HTTP 요청과 응답을 처리하는 Controller와 SQL을 실행하는 Model을 분리했다. 따라서 Controller만 독립적으로 테스트하거나 전체 흐름을 함께 테스트할 수 있다.

즉, TDD의 목적은 테스트의 개수를 늘리는 데 있는 것이 아니라, 구현 전에 동작 기준을 정하고 그 기준을 지속적으로 검증하는 데 있다.

## 단위 테스트와 통합 테스트의 차이

단위 테스트(Unit Test)는 함수나 모듈처럼 작은 범위를 다른 구성 요소와 격리하여 검사한다. 외부 의존성은 주로 Mock으로 대체하며, 이 실습에서는 Jest, Jest Mock, `node-mocks-http`를 사용했다. Model을 Mock으로 대체했기 때문에 실제 SQLite DB에 데이터를 추가·조회·수정·삭제하지 않고도 `controller/products.js`의 각 Controller 함수가 의도대로 작동하는지 확인할 수 있다. 구체적으로는 Model에 전달한 인자, 응답 상태 코드와 JSON, 오류 발생 시 `next(error)`를 호출하는지 등을 검사한다.

통합 테스트(Integration Test)는 여러 모듈이 연결된 전체 흐름을 검사한다. 이 실습에서는 Jest와 `supertest`를 사용해 Express 앱에 요청을 보내고, Route → Controller → Model → SQLite로 이어지는 실제 동작을 확인한다. 주요 검사 대상은 HTTP 상태 코드, 응답 본문, 실제 데이터베이스의 제약 조건과 CRUD 처리 결과이다.

두 테스트의 차이를 항목별로 정리하면 다음과 같다.

- **확인 범위:** 단위 테스트는 개별 Controller 함수를 확인하고, 통합 테스트는 API부터 데이터베이스까지 연결된 흐름을 확인한다.
- **의존성 처리:** 단위 테스트는 Model을 Mock으로 교체하여 실제 DB를 건드리지 않고 Controller의 동작만 확인한다. 통합 테스트는 실제 Model과 SQLite 데이터베이스를 사용한다.
- **오류 위치 파악:** 단위 테스트는 Controller 내부의 분기와 호출 문제를 좁은 범위에서 확인하기 쉽다. 통합 테스트는 여러 계층이 올바르게 연결되는지 확인하는 데 적합하다.
- **실행 환경의 영향:** 단위 테스트는 실제 DB 상태의 영향을 받지 않지만, 이 실습의 통합 테스트는 `test.db`의 데이터 상태에 영향을 받을 수 있다.

단위 테스트인 `test/unit/products.test.js`는 `productModel.create`, `findAll`, `findById`, `findByIdAndUpdate`, `findByIdAndDelete`를 `jest.fn()`으로 교체한다. 따라서 테스트 중 실제 SQL이 실행되거나 `test.db`의 데이터가 변경되지 않는다. 각 Mock이 반환할 값을 테스트에서 직접 정한 뒤, Controller가 Model을 올바르게 호출하고 그 결과에 맞는 응답을 만드는지만 확인한다. 즉, 여기서 검증하는 대상은 실제 Model이나 DB의 작동 여부가 아니라 Controller 함수의 작동 여부이다.

통합 테스트인 `test/integration/products.int.test.js`는 `supertest`로 Express 앱의 `/api/products` 경로에 실제 HTTP 요청과 같은 요청을 보낸다. 이때 Route, Controller, Model, SQLite가 함께 동작하므로 각 계층의 연결과 실제 데이터베이스 동작을 확인할 수 있다.

## 실습에서 구현한 방식

### 1. 애플리케이션과 라우팅

`app.js`에서는 Express 앱을 만들고 `express.json()`으로 JSON 요청 본문을 처리한다. 상품 라우터는 `/api` 아래에 연결되므로 최종 API 경로는 다음과 같다.

- `POST /api/products`: 상품 생성
- `GET /api/products`: 모든 상품 조회
- `GET /api/products/:productId`: ID로 상품 한 건 조회
- `PUT /api/products/:productId`: 상품 수정
- `DELETE /api/products/:productId`: 상품 삭제

또한 공통 오류 처리 미들웨어는 전달받은 오류를 상태 코드 `500`과 `{ message: error.message }` 형태의 JSON으로 반환한다. `index.js`는 앱을 `0.0.0.0:3000`에서 실행한다.

### 2. Model과 SQLite

`models/Product.js`는 `test.db`에 연결하고, 다음 구조의 `product` 테이블이 없으면 생성한다.

- `id`: 자동 증가 정수 기본 키
- `name`: `NOT NULL`인 문자열
- `description`: `NOT NULL`인 문자열
- `price`: 실수

Model은 준비된 SQL 문과 바인딩 값(`?`)을 사용해 다음 메서드를 제공한다.

- `create`: 상품을 추가하고 생성된 ID와 입력 데이터를 반환한다.
- `findAll`: 모든 상품을 조회한다.
- `findById`: ID가 일치하는 상품을 조회한다.
- `findByIdAndUpdate`: 해당 ID의 상품을 수정한 뒤 수정된 상품을 다시 조회한다.
- `findByIdAndDelete`: 해당 ID의 상품을 삭제하고 삭제 성공 여부를 불리언으로 반환한다.

### 3. Controller

`controller/products.js`는 요청에서 `body` 또는 `params.productId`를 꺼내 Model에 전달한다. 생성 성공 시 `201`, 조회·수정·삭제 성공 시 `200`, 대상 상품이 없을 때는 `404`를 반환한다. 각 함수는 `try/catch`로 Model 오류를 잡아 Express 오류 처리 미들웨어에 `next(error)`로 전달한다.

### 4. 단위 테스트

단위 테스트는 실제 Model 메서드를 Jest Mock으로 교체하고 `node-mocks-http`로 `req`, `res`, `next`를 만든다. 각 Controller에 대해 다음 사항을 검사한다.

- Controller 함수가 존재하는지
- 알맞은 인자로 Model 메서드를 호출하는지
- 성공 시 정해진 상태 코드와 JSON을 반환하는지
- 데이터가 없으면 `404`를 반환하는지
- Model이 Promise를 거부하면 `next(error)`를 호출하는지

테스트 데이터는 `test/data/new_product.json`과 `test/data/all_products.json`으로 분리해 재사용한다.

### 5. 통합 테스트

통합 테스트는 `supertest`로 실제 API 경로를 호출한다.

- 정상 상품을 생성하고 `201`과 응답 필드를 확인한다.
- `description` 없이 상품을 생성해 SQLite의 `NOT NULL` 제약 조건 오류가 `500` 응답으로 전달되는지 확인한다.
- 전체 목록을 조회한 뒤 첫 번째 상품을 저장하고, 이어지는 단건 조회·수정·삭제 테스트에서 그 ID를 사용한다.
- 존재하지 않는 ID `-1`에 대해 `404`가 반환되는지 확인한다.

따라서 단위 테스트는 Controller의 분기와 호출 관계를 빠르게 검증하고, 통합 테스트는 실제 API부터 데이터베이스까지 연결된 CRUD 동작을 검증하는 역할을 맡는다.

## 파일에서 확인된 테스트의 주의점

현재 코드를 이해할 때 함께 확인해야 할 사항도 있다.

- 통합 테스트의 `"PUT id doesn't exist"` 테스트는 이름과 달리 `PUT`이 아니라 `GET` 요청을 보내고 있다. 따라서 존재하지 않는 ID에 대한 수정 동작을 직접 검증하지 않는다.
- 단위 테스트의 전체 조회 응답 종료 검사는 `res._isEndCalled()`를 호출하지 않고 함수 자체의 참·거짓만 확인한다.
- 실제 Model의 삭제 메서드는 삭제된 상품 객체가 아니라 성공 여부(`true` 또는 `false`)를 반환한다. 반면 삭제 Controller의 단위 테스트에서는 Mock이 상품 객체를 반환하도록 설정하므로, 실제 구현의 응답 형태와 단위 테스트의 기대 데이터가 일치하지 않는다.
- 통합 테스트는 동일한 `test.db`를 사용하고 테스트 간에 생성한 상품과 `firstProduct`를 공유한다. 따라서 각 테스트가 완전히 독립적인 구조는 아니며, 실행 순서와 기존 DB 상태의 영향을 받을 수 있다.
