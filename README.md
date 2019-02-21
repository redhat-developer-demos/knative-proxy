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

:gift: [GitHub repo - Image overlay](https://github.com/redhat-developer-demos/image-overlay)

:gift: [GitHub repo - Photo store](https://github.com/redhat-developer-demos/coderland-photo-store)

:gift: [GitHub repo - Knative proxy](https://github.com/redhat-developer-demos/knative-proxy)

:package: [Docker image](https://cloud.docker.com/repository/docker/dougtidwell/imageoverlay)

:clapper: [VIDEO: Serverless Computing Tutorial - Introduction (Part 1)](https://youtu.be/R8PGrhfVWTc)

:clapper: [VIDEO: Serverless Computing Tutorial - The Service (Part 2)](https://youtu.be/M_Xse7vjkvE)

:clapper: [VIDEO: Serverless Computing Tutorial - Deploying to Knative (Part 3)](https://youtu.be/AR4fqwFLn9I)


***

Coderland :roller_coaster::rocket::ferris_wheel: is a place for learning, brought to you by the [Red Hat Developer](https://developers.redhat.com) program.
