[< λ€λ‘κ°κΈ°](./README.md)

### π§ Nginx μ€μΉ

```cmd
sudo -s
sudo apt install nginx
sudo service nginx start
```

### π§ certbot μ€μΉ

#### μ€μΉ λ°©λ² 1, wget μ¬μ©

```cmd
wget https://dl.eff.org/certbot-auto
```

> wget μ΄λ?
>
> μΉ μλ²λ‘ λΆν° μ½νμΈ λ₯Ό κ°μ Έμ€λ μ»΄ν¨ν° νλ‘κ·Έλ¨μΌλ‘, GNU νλ‘μ νΈμ μΌλΆμλλ€.
> μ΄ νλ‘κ·Έλ¨μ μ΄λ¦μ World Wide Web κ³Ό get μμ ν©μ³μ§ Wget μλλ€.
> Wget μ HTTP, HTTPS, FTP νλ‘ν μ½μ ν΅ν΄ `λ΄λ €λ°κΈ°` λ₯Ό μ§μν©λλ€.
> [μμΈν λ³΄κΈ°](https://hyun-am-coding.tistory.com/entry/Wget%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%84%9C-%ED%81%AC%EB%A1%A4%EB%A7%81-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0%EC%B2%B4%ED%97%98%ED%95%98%EA%B8%B0#:~:text=Wget%EC%9D%B4%EB%9E%80,%EB%82%B4%EB%A0%A4%EB%B0%9B%EA%B8%B0%EB%A5%BC%20%EC%A7%80%EC%9B%90%ED%95%A9%EB%8B%88%EB%8B%A4.)

### μ€μΉ λ°©λ² 2, snapd μ¬μ©

```cmd
sudo snap install core
sudo snap refresh core
sudo apt remove certbot
sudo snap install --classic certbot
ln -s /snap/bin/certbot /usr/bin/certbot
```

> snapd λ?
>
> μμ© νλ‘κ·Έλ¨μ΄ μ€μΉλ μμ€νμμ λ€λ₯Έ μννΈμ¨μ΄λ₯Ό μ€ννκ³  μνΈμμ© νλ λ°©λ²μ λν `μ’μμ± λ° μ€λͺ` κ³Ό ν¨κ» μμΆλ μμ©νλ‘κ·Έλ¨μλλ€.
> [μμΈν λ³΄κΈ°](https://helpfulhelp.net/ko/%EC%8A%A4%EB%83%85%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9E%85%EB%8B%88%EA%B9%8C-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EA%B7%B8%EA%B2%83%EB%93%A4%EC%9D%B4-%EC%96%BC%EB%A7%88%EB%82%98-%EC%A4%91%EC%9A%94)

> snap μ λν μ΄λ³΄μ κ°μ΄λ νμΈ [μμΈν λ³΄κΈ°](https://ko.linux-console.net/?p=701)

### π§ λλ©μΈ λ°κΈ

[No-IP](https://www.noip.com/) λΌλ μ¬μ΄νΈμμ 1κ°μ νμ ν΄μ λ¬΄λ£ λλ©μΈμ λ°κΈν΄μ€λλ€.

### π¨ Certbot μ€ν

λ€μ λͺλ Ήμ΄λ₯Ό μλ ₯νκ³  μ§λ¬Έμ λ§λ λ΅μ μλ ₯νμλ©΄ λ©λλ€.
> [Certbot νλ‘μΈμ€ μμΈν λ³΄κΈ°](./certbot.--nginx.md)
> μ°Έκ³ ν [μλ¬Έ](https://gist.github.com/woorim960/dda0bc85599f61a025bb8ac471dfaf7a) μμλ cerbot μ΄ μμμ ν¬νΈ ν¬μλ© κ°μ μ²λ¦¬λ₯Ό ν΄μ€λ€κ³  νμ§λ§, `2022-08-05` `ubuntu@22` μμ μ€νν κ²°κ³Όλ μ ν λ¬λμ΅λλ€.
> λ°λΌμ λ³λλ‘ `/etc/nginx/nginx.conf` νμΌμ μμ  ν΄μΌν©λλ€.

```cmd
sudo certbot --nginx
```