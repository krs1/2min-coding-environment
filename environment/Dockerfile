FROM node:14.16.1-buster-slim as node
FROM php:8.0.3-buster as php
FROM python:3.9.4-slim as python
FROM openjdk:11.0.11-9-slim-buster as java
FROM golang:1.16.3-buster as golang

FROM debian:buster-slim

# clang, c++, and deps
RUN apt-get update \
&& apt-get install -y vim gcc g++ make cmake tzdata  \
&& apt-get clean \
&& rm -rf /var/lib/apt/lists/*

# nodejs
COPY --from=node /usr/local/bin /usr/local/bin
COPY --from=node /usr/local/lib/node_modules/npm /usr/local/lib/node_modules/npm
COPY --from=node /opt/yarn* /opt/yarn
RUN ln -fs /opt/yarn/bin/yarn /usr/local/bin/yarn \
    && ln -fs /opt/yarn/bin/yarnpkg /usr/local/bin/yarnpkg \
    && npm install -g @vue/cli@4.5.12 \
    && npm install -g typescript@4.2.4

# php
COPY --from=php /usr/local/bin /usr/local/bin
# 一つずつ見るの面倒で全部コピーしちゃった
COPY --from=php /usr/lib/x86_64-linux-gnu /usr/lib/x86_64-linux-gnu

# python
COPY --from=python /usr/local/lib /usr/local/lib
COPY --from=python /usr/local/bin /usr/local/bin
COPY --from=python /usr/local/include /usr/local/include
# なぜかこのライブラリだけリンクが外れちゃうので追加
RUN ln /usr/local/lib/libpython3.9.so.1.0 /lib/x86_64-linux-gnu/libpython3.9.so.1.0 \
    && pip install -U pip \
    && pip install --no-cache-dir pipenv

# java
COPY --from=java /usr/local/openjdk-11 /usr/local/openjdk-11
ENV PATH /usr/local/openjdk-11/bin:$PATH

# golang
COPY --from=golang /usr/local/go /usr/local/go
ENV PATH $PATH:/usr/local/go/bin/
RUN go install github.com/cosmtrek/air@v1.27.3 \
    && rm -rf ~/.cache/go-build
ENV PATH $PATH:/go/bin/



WORKDIR /environment
COPY . .

# ターミナル文字化け対応
ENV LANG C.UTF-8
ENV LANGUAGE en_US: