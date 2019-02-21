# knative-proxy

A node.js proxy for invoking Knative services on behalf of XHRs. This code exists because Knative by default requires a certain value in the HOST header. That value by default is servicename.namespace.example.com. Unfortunately, XHRs aren't allowed to set the HOST header value, so they can't access Knative services.

This repo is part of an interactive Knative and serverless tutorial, the [Compile Driver](https://developers.redhat.com/compile-driver/), a ride at an imaginary theme park called Coderland.

## Environment variables

There are three environment variables you can set when you run
npm start:

1. `PORT` - the port number for the service. Default is `8888`.
1. `PROXY_URL` - The URL for the Knative cluster. Default is
`http://192.168.99.100:31380/overlayImage`.
1. `PROXY_HOST` - The value for the HOST header. Default is
`overlayimage.knativetutorial.example.com.nip.io`.

## IMPORTANT LINKS

:notebook: [Knative Tutorial Docs](https://redhat-developer-demos.github.io/knative-tutorial/knative-tutorial/dev/index.html)

:gift: [Knative Tutorial repo](https://bit.ly/knative-tutorial)

### Part 1: Introduction to Serverless with Knative

:page_facing_up: [ARTICLE: Part 1: Introduction to Serverless with Knative](https://developers.redhat.com/coderland/serverless/serverless-knative-intro/)

:clapper: [VIDEO: Part 1: Introduction to Serverless with Knative](https://youtu.be/R8PGrhfVWTc)

:gift: [REPO: Image overlay](https://github.com/redhat-developer-demos/image-overlay)

### Part 2: Building a Serverless Service

:page_facing_up:[ARTICLE: Part 2: Building a Serverless Service](https://developers.redhat.com/coderland/serverless/building-a-serverless-service/)

:clapper: [VIDEO: Part 2: Building a Serverless Service](https://youtu.be/M_Xse7vjkvE)

:gift: [REPO: Photo store](https://github.com/redhat-developer-demos/coderland-photo-store)

### Part 3: Deploying a Serverless Service to Knative

:page_facing_up:[ARTICLE: Part 3: Deploying a Serverless Service to Knative](https://developers.redhat.com/coderland/serverless/deploying-serverless-knative/)

:clapper: [VIDEO: Part 3: Deploying a Serverless Service to Knative](https://youtu.be/AR4fqwFLn9I)

:gift: [REPO: Knative proxy](https://github.com/redhat-developer-demos/knative-proxy)

***

Coderland :roller_coaster::rocket::ferris_wheel: is a place for learning. Developer Training and Red Hat Software: [Red Hat Developer](https://developers.redhat.com).
