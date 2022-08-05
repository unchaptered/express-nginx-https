[< 뒤로가기](./README.md)

`sudo apt-get install nginx` 이후에 `sudo service ngnix start` 를 실행했을 때, 다음과 같은 메세지가 떳습니다.

```cmd
Failed to start ngnix.service: Unit ngnix.service not found.
```

참고한 블로그에 오타가 있었던 부분이여서 오타를 다음처럼 `sudo service nginx start` 수정했습니다.

### 관련

```cmd
<!-- service 관련 명령어 (옵션) 확인 -->
sudo service

<!-- 등록된 service 목록 확인 -->
sudo service --status-all
```