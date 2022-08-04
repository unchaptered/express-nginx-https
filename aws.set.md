[< 뒤로가기](./README.md)

### 🎉 Nginx

```cmd
sudo -s
sudo apt-get update
sudo apt-get install nginx <!-- nginx.install.md -->
sudo service ngnix start <!-- nginx.start.md -->
```

![](./Nginx%20Page.png)

<hr>

### 🎉 Install node

```cmd
curl -s https://deb.nodesource.com/setup_16.x | sudo bash
sudo apt-get install -y nodejs
```

![](./Node%20Install%20Result.png)

<hr>

### 🎉 Install pm2

```cmd
sudo npm install -g pm2
```

![](./Node%20Install%20PM2%20Result.png)

<hr>

### 🎉 npm global list

```cmd
npm ls -g
```

![](./Node%20Install%20PM2%20List%20Result.png)\

### 🎉 Nginx Reverse Proxy 설정 후 재부팅

```cmd
cd /etc/nginx/sites-enabled

ls
sudo rm default
sudo nano default
```

후에 다음 파일 복사 붙여 넣기 후 `Ctrl + S`, `Ctrl + X`.

```default
server {
        listen 80;
        listen [::]:80;

        access_log /var/log/nginx/reverse-access.log;
        error_log /var/log/nginx/reverse-error.log;

        location / {
                    proxy_pass http://127.0.0.1:3000;
  }
}
```

후에 다음 명령어로 제대로 설정 되었는지 확인할 수 있습니다.

```cmd
sudo nginx -t
```

![](./Nginx%20Configuration%20Check.png)

후에 다음 명령어로 nginx 을 재시작 할 있습니다.

```cmd
sudo service nginx restart
```