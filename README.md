# 안드로이드 캡쳐 방지 우회

## FLAG_SECURE

FLAG_SECURE는 안드로이드 캡쳐방지를 사용할때 사용하는 int 값

## Capture.js 

FALG_SECURE를 사용하는 액티비티와 메소드를 출력해주는 Frida 코드

![flag secure 조회 마스킹](https://github.com/user-attachments/assets/a3df35d3-a214-4b6f-bd2b-5c73d7418d01)

![stackTrace 마스킹](https://github.com/user-attachments/assets/b5340950-a796-4c02-afed-7a9342b10a98)

사진을 보면 BaseActivity, TicketListActivity, setFlags(), addFlags() 에서 FLAG_SECURE를 호출하는 것으로 확인

## flag_secure_hooking.js


![remove flag 마스킹](https://github.com/user-attachments/assets/4977679e-3d71-4b31-aaa1-afa034740060)

## 성공

