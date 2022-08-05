# Express-Nginx-Https

Nginx `/ect/nginx` 파일 내용 예시 `nginx.conf` 보기 [link](./nginx.conf)

![](./Logic.png)

### ✅ Nginx, and Reversy Proxy

Ngxinx 를 사용하기 위해서 _sudo 환경 설정_ 및 _보안 그룹 설정_ 이 필요하시면, [자세히 보기](./origin/README.md) 를 확인해주세요.

1. [AWS sudo 환경 설정](./aws.set.md)

### 🔧 HTTPS, SSL

SSL 인증 기능이 들어간 프롵토콜 통신 방식을 `HTTP 2.0`, `HTTPS` 라고 부릅니다.

1. 무료 도메인 발급처 : [no-ip](https://www.noip.com/login?ref_url=console)
2. 무료 SSL 발급처 : [Let's Encrypt](https://letsencrypt.org/ko/)
3. SSL 발급 및 사용 도구 : [Certbot](https://certbot.eff.org/)

### References

Nginx 를 사용하기 위해서 참고한 _관련 참고 자료_ 가 필요하시면, [자세히 보기](./origin/README.md) 를 확인해주세요.

1. [[Nginx] SSL 설정(HTTPS 적용), KOR](https://narup.tistory.com/240#--%--nginx-conf)
2. [how_to_set_https_by_using_nginx.md, KOR](https://gist.github.com/woorim960/dda0bc85599f61a025bb8ac471dfaf7a)