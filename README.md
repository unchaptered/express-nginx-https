# Express-Nginx-Https

> - 클론 원본 저장소 : [unchaptered/express-nginx](https://github.com/unchaptered/express-nginx)
> - 클론 원본 README : [unchaptered/express-nginx/README.md](./origin/README.md)

본 프로젝트는 `2022-08-05` 에 Nginx 를 사용한 Reversy Proxy Server 에서 시작된 프로젝트입니다.

아주 간단한 Nginx - PM2 - Express 서버를 해보고 조금 욕심이 생겼습니다.

따라서, SSL 인증키를 사용한 Nginx (HTTPS) 를 사용한 Reversy Proxy Server 를 구현하고자 했습니다.

- ⚡ 엄청나게 많은 에러가 발생하는 과정입니다.
- ⚡ unchaptered/epxress-nginx 와 unchaptered/express-nginx-https 를 연속으로 했을 때, 저는 약 30 시간 정도의 시간이 소요 되었습니다. 겪었던 에러들에 대한 정리가 되어 있으니 참고 자료를 따라서 진행하면 성공적으로 Nginx(HTTPS) 설정을 완료 할 수 있습니다.
- 🤔 또한 `ubuntu@22.04` 버전이 아닐 시 해당 방법이 적용되지 않을 확률이 높습니다.

<br>
<hr>
<br>

### ✔ 사전 준비 요소

해당 프로젝트를 따라하시려면 `사전 준비 요소`가 존재합니다.

1. Nginx 와 프록시 서버에 대한 아주 기본적인 이해 _원본 저장소 참고_
2. DNS 에 등록된 도메인 주소
    1. 등록된 도메인 주소에 EC2 인스턴스의 Public IPv4 를 등록해주세요.
3. EC2 인스턴스
    1. SSH 22 포트 Anywhere IPv4, Anywhere IPv6
    2. HTTP 80 PORT 포트 Anywhere IPv4, Anywhere IPv6
    3. HTTP 432 PORT 포트 Anywhere IPv4, Anywhere IPv6
    4. _실제 호스팅 단계에서는 변동이 있으나, 빠른 확인을 위해서 모두 열어주세요_

본 프로젝트에서는 다음을 `목표`로 하고 있습니다.

1. `ubuntu@22.04` 에서 Snap 을 이용하여 Nignx 을 설정
2. `ubuntu@22.04` 에서 Certbt 을 설정
3. `ubuntu@22.04` 에서 ufw 방화벽 설정
4. 단계적으로 Nginx 를 설정하고 Certbot 과 연동
    1. 해당 단계 성공시, _https://도메인-주소_ 와 -http://IPv.4_ 가 활성화
5. IPv4 로 접속 시에 _https://도메인-주소_ 로 **redirect 80 -> 443** 으로 설정

> 사용한 **무료** 도메인 발급 처 및 SSL 발급처
>
> 1. 무료 도메인 발급처 : [no-ip](https://www.noip.com/login?ref_url=console)
> 2. 무료 SSL 발급처 : [Let's Encrypt](https://letsencrypt.org/ko/)
> 3. SSL 발급 및 사용 도구 : [Certbot](https://certbot.eff.org/)

<p align="center"><img src="./Logic.png" style="width:600px;"></p>

<br>
<hr>
<br>

### ✔ 진행 절차

_✔ 참고 자료_ 3 ~ 6 순서로 진행하시면 됩니다.

0. 참고자료 1 ~ 2 로 진행 시 발생했던 에러
    1. [Nginx Exit Error ](./error/1.nginx.exit.error.md)
    2. [Nginx Bypass Error](./error/2.nginx.bypass.error.md)

1. 참고자료 3 ~ 5 로 진행 시 발생했던 에러
    1. [Nginx Setup](./error/3.nginx.setup.md)
    2. [Nginx Certbot](./error/4.nginx.curtbot.md)
    3. [Nginx Bypass](./error/5.nginx.bypass.md)

2. `ubuntu` 폴더 안의 주요 파일의 위치와 목적
    1. [Nginx 파일정리](./docs/nginx%20%ED%8C%8C%EC%9D%BC%EC%A0%95%EB%A6%AC.md)

<br>
<hr>
<br>

### ✔ 참고 자료

Nginx 를 사용하기 위해서 참고한 _관련 참고 자료_ 가 필요하시면, [자세히 보기](./origin/README.md) 를 확인해주세요.

본 프로젝트에서는 ✔ 체크 된 항목을 기준으로 진행했습니다.

1. [KOR, [Nginx] SSL 설정(HTTPS 적용), KOR](https://narup.tistory.com/240#--%--nginx-conf)
2. [KOR, how_to_set_https_by_using_nginx.md, KOR](https://gist.github.com/woorim960/dda0bc85599f61a025bb8ac471dfaf7a)
3. [✔ ENG, How To Install Nginx on Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-22-04#step-5-%E2%80%93-setting-up-server-blocks-(recommended))
4. [✔ ENG, How To Secure Nginx with Let's Encrypt on Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-22-04)
5. [✔ ENG, How to Remove (Delete) Symbolic Links in Linux](https://linuxize.com/post/how-to-remove-symbolic-links-in-linux/#:~:text=To%20remove%20a%20symbolic%20link,the%20symlink%20as%20an%20argument.)
6. [✔ KOR, nginx HTTP 로 들어오면 강제로 HTTPS 로 전환하도록 설정하기(force redirect to SSL)](https://www.lesstif.com/system-admin/nginx-http-https-force-redirect-to-ssl-113344694.html)