[こちら](https://blog-jp.richardimaoka.net/20210328)から影響を受けて作ったリポジトリ

せっかくなのでDockerを使い環境構築をしてどこでもコミットできるようにする

[DockerImage](https://hub.docker.com/search?q=&type=image)

# 動作環境
Mac  
Docker version 20.10.5  
docker-compose version 1.29.0
# Usage

下記コマンドで起動し、ターミナルへ入る

```
docker-compose up --b -d
docker exec -it some-lang-environment bash
```

