FROM ubuntu:20.04
ARG DEBIAN_FRONTEND=noninteractive
COPY dist /home/blueprint_cpp
RUN apt-get update && apt-get -y install build-essential clangd-12 git
ENTRYPOINT ["/home/blueprint_cpp/blueprint.exe", "-h", "0.0.0.0"]