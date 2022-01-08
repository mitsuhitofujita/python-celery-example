FROM python:3.10-bullseye

ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update -y && \
    apt-get install -y --no-install-recommends \
        locales \
        tzdata
RUN apt-get autoremove -y && \
    apt-get clean && \
	rm -rf /var/lib/apt/lists/*
RUN pip install poetry
RUN ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    sed -i -E 's/# (ja_JP.UTF-8)/\1/' /etc/locale.gen && \
    locale-gen && \
    update-locale LANG=ja_JP.UTF-8
ARG APP_GID=1000
ARG APP_UID=1000
ARG APP_USER=celery
ARG APP_GROUP=celery
ARG APP_HOME=/home/celery
ARG APP_DIR=/app
RUN groupadd -g ${APP_GID} ${APP_GROUP} && \
    useradd -g ${APP_GID} -u ${APP_UID} -d ${APP_HOME} -m ${APP_USER} && \
    mkdir -p ${APP_DIR} && \
    chown ${APP_UID}:${APP_GID} ${APP_DIR}
