# Web Server from Scratch with NodeJS Streams

https://www.codementor.io/ziad-saab/let-s-code-a-web-server-from-scratch-with-nodejs-streams-h4uc9utji

## Notes

### An HTTP Request

```
POST /posts/42/comments HTTP/1.1\r\n
Host: www.my-api.com\r\n
Accept: application/json\r\n
Authorization: Bearer N2E5NTU2MzQ5MGQ4N2UzNjIxOTY2ZDU1M2YwNjA3OGFjYjgyMjU4NQ\r\n
Accept-Encoding: gzip, deflate, br\r\n
Content-Type: application/json\r\n
Content-Length: 28\r\n
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:58.0)\r\n
\r\n
{"text":"this is a comment"}
```

Line 1 is the request line and contains 3 tokens:

- `POST` = the request method
- `/posts/42/comments` = the request URI
- `HTTP/1.1` = the protocol

The lines that follow are the request headers.  
The line with `/r/n` signals the end of the request headers and anything after is the request body.  
Here the request body is JSON which matches the `Content-Type` header.
<br/>
<br/>

### An HTTP Response

```
HTTP/1.1 200 OK\r\n
Server: nginx/1.9.4\r\n
Date: Fri, 20 Apr 2017 16:19:42 GMT\r\n
Content-Type: application/json\r\n
Content-Length: 141\r\n
\r\n
{
  "id": "8fh924b42o",
  "text": "this is a comment",
  "createdAt": "2017-04-20T16:19:42.840Z",
  "updatedAt": "2017-04-20T16:19:42.840Z"
}

```

Line 1 is the status line and contains 3 tokens:

- `HTTP/1.1.1` = HTTP version
- `200` = HTTP status code
- `OK` = reason phase

The lines that follow are the response heaers.  
`/r/n` denotes the end of the response headers and start of the response body.
