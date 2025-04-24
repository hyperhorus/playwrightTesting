FROM jenkins/jenkins:lts-jdk17

USER root
RUN curl -ssl https://get.docker.com | sh 
USER jenkins