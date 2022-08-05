[< 뒤로가기](./README.md)

### 🔧 Nginx 설치

```cmd
sudo -s
sudo apt install nginx
sudo service nginx start
```

### 🔧 certbot 설치

#### 설치 방법 1, wget 사용

```cmd
wget https://dl.eff.org/certbot-auto
```

> wget 이란?
>
> 웹 서버로 부터 콘텐츠를 가져오는 컴퓨터 프로그램으로, GNU 프로젝트의 일부입니다.
> 이 프로그램의 이름은 World Wide Web 과 get 에서 합쳐진 Wget 입니다.
> Wget 은 HTTP, HTTPS, FTP 프로토콜을 통해 `내려받기` 를 지원합니다.
> [자세히 보기](https://hyun-am-coding.tistory.com/entry/Wget%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%84%9C-%ED%81%AC%EB%A1%A4%EB%A7%81-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0%EC%B2%B4%ED%97%98%ED%95%98%EA%B8%B0#:~:text=Wget%EC%9D%B4%EB%9E%80,%EB%82%B4%EB%A0%A4%EB%B0%9B%EA%B8%B0%EB%A5%BC%20%EC%A7%80%EC%9B%90%ED%95%A9%EB%8B%88%EB%8B%A4.)

### 설치 방법 2, snapd 사용

```cmd
sudo snap install core
sudo snap refresh core
sudo apt remove certbot
sudo snap install --classic certbot
ln -s /snap/bin/certbot /usr/bin/certbot
```

> snapd 란?
>
> 응용 프로그램이 설치된 시스템에서 다른 소프트웨어를 실행하고 상호작용 하는 방법에 대한 `종속성 및 설명` 과 함께 압축된 응용프로그램입니다.
> [자세히 보기](https://helpfulhelp.net/ko/%EC%8A%A4%EB%83%85%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9E%85%EB%8B%88%EA%B9%8C-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EA%B7%B8%EA%B2%83%EB%93%A4%EC%9D%B4-%EC%96%BC%EB%A7%88%EB%82%98-%EC%A4%91%EC%9A%94)

> snap 에 대한 초보자 가이드 확인 [자세히 보기](https://ko.linux-console.net/?p=701)

### 🔧 도메인 발급

[No-IP](https://www.noip.com/) 라는 사이트에서 1개에 한정해서 무료 도메인을 발급해줍니다.

### 🔨 Certbot 실행

다음 명령어를 입력하고 질문에 맞는 답을 입력하시면 됩니다.
> [Certbot 프로세스 자세히 보기](./certbot.--nginx.md)
> 참고한 [원문](https://gist.github.com/woorim960/dda0bc85599f61a025bb8ac471dfaf7a) 에서는 cerbot 이 알아서 포트 포워딩 같은 처리를 해준다고 했지만, `2022-08-05` `ubuntu@22` 에서 실행한 결과는 전혀 달랐습니다.
> 따라서 별도로 `/etc/nginx/nginx.conf` 파일을 수정 해야합니다.

```cmd
sudo certbot --nginx
```