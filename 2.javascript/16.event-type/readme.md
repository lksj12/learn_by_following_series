# Kinds of Event

## UI Event
- load: 문서/객체 로드 완료 시
- change: 객체 내용 변경 시/ 포커스 상실 시
- resize: 객체 크기 변경 시
- scroll: 스크롤 바 조작 시
- error: 에러 발생 시

## Keyboard Event
- keydown: 키가 눌렸을 때
- keyup: 키를 눌렀다 뗐을 때
- keypress: 눌린 키가 입력되었을 때 (down -> (press) -> up)

## Mouse Event
- click: 객체를 클릭했을 때
- dblclick: 객체를 더블 클릭 했을 때
- mousedown: 마우스를 클릭했을 때
- mouseup: 마우스를 클릭했다가 뗐을 때 (down -> up -> click)
- mouseover: 마우스가 객체 위에 올려졌을 때
- mouseenter: 마우스가 객체 안으로 들어올 때 (over -> enter)
- mouseout: 마우스가 객체 밖을 나갔을 때
- mouseleave: 마우스가 객체 밖을 나갔을 때 (out -> leave)
- mousemove: 마우스가 객체안에서 움직일 때

## Focus Event
- focus: 객체에 focus가 되었을 때
- blur: 객체가 focus를 상실했을 떄

## Form Event
- input: input, textarea의 요소 값이 변경되었을 때
- change: 선택 상자, 체크박스, 라디오 버튼의 상태가 변경 되었을 때
- select: 텍스트를 선택했을 때
- reset: 리셋 버튼을 눌렀을 때
- submit: 폼을 전송할 때
- cut/copy/paste: 폼 빌드의 컨텐츠를 잘라내기/복사/붙여넣기 할 때