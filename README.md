# knative-proxy

A node.js proxy for invoking Knative services on behalf of XHRs.
This code exists because Knative by default requires a certain value
in the HOST header. That value by default is
servicename.namespace.example.com. Unfortunately, XHRs aren't allowed
to set the HOST header value, so they can't access Knative services.

## Environment variables

There are three environment variables you can set when you run
npm start:

1. `PORT` - the port number for the service. Default is `8888`.
1. `PROXY_URL` - The URL for the Knative cluster. Default is
`http://192.168.99.100:31380/overlayImage`.
1. `PROXY_HOST` - The value for the HOST header. Default is
`overlayimage.knativetutorial.example.com.nip.io`.