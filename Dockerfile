# javaはまだやってない
# FROM oraclelinux:7-slim


FROM node:lts-buster-slim as node
FROM php:8.0.3-buster as php
FROM python:3.9.4-slim as python
FROM golang:1.15.11-buster as golang

FROM debian:buster-slim


RUN adduser --disabled-password user
ENV USER user

# clang, c++, and deps
RUN apt-get update \
&& apt-get install -y vim gcc g++ make cmake tzdata  \
&& rm -rf /var/lib/apt/lists/*

# nodejs
COPY --from=node /usr/local/bin /usr/local/bin
COPY --from=node /usr/local/lib/node_modules/npm /usr/local/lib/node_modules/npm
COPY --from=node /opt/yarn* /opt/yarn
RUN ln -fs /opt/yarn/bin/yarn /usr/local/bin/yarn && \
    ln -fs /opt/yarn/bin/yarnpkg /usr/local/bin/yarnpkg

# php
COPY --from=php /usr/local/bin /usr/local/bin
# 一つずつ見るの面倒で全部コピーしちゃった
COPY --from=php /usr/lib/x86_64-linux-gnu /usr/lib/x86_64-linux-gnu

# python
COPY --from=python /usr/local/lib /usr/local/lib
COPY --from=python /usr/local/bin /usr/local/bin
COPY --from=python /usr/local/include /usr/local/include
# なぜかこのライブラリだけリンクが外れちゃうので追加
RUN ln /usr/local/lib/libpython3.9.so.1.0 /lib/x86_64-linux-gnu/libpython3.9.so.1.0
RUN pip install pipenv

# golang
COPY --from=golang /usr/local/go /usr/local/go
ENV PATH $PATH:/usr/local/go/bin/

USER user
WORKDIR /home/user

