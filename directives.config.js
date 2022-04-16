
export const directives = (dev, rootDomain) => {
  return {
    'base-uri': ['self'],
    'child-src': ['self'],
    'connect-src': dev
      ? ['self', 'ws://localhost:*', 'ws://*', 'blob://*', '*']
      : [
        'self',
        'ws://localhost:*',
        'https://*.prismic.io',
        'https://*.googlevideo.com',
        'wss://*.peerjs.com',
        'ws://*.peerjs.com',
        'https://plausible.speedynetz.de'
      ],
    // 'connect-src': ,
    'img-src': [
      'self',
      'data:',
      'blob:',
      'https://picsum.photos',
      'https://*.picsum.photos',
      'https://*.prismic.io',
      'https://*.ytimg.com',
      'https://*.googleusercontent.com',
      'https://*.ggpht.com',
      'https://www.gstatic.com/'
    ],
    'font-src': ['self', 'data:'],
    'form-action': ['self'],
    'frame-ancestors': ['self'],
    'frame-src': ['self', 'https://*.prismic.io'],
    'manifest-src': ['self'],
    'media-src': [
      'self',
      'data:',
      'blob://*',
      'blob:*',
      'ws://localhost:*',
      'localhost:*',
      'https://*.prismic.io',
      'https://*.googlevideo.com'
    ],
    'object-src': ['none'],
    'style-src': ['self', 'unsafe-inline'],
    'default-src': [
      'self',
      `${rootDomain}`,
      `ws://${rootDomain}`,
      'localhost:*',
      'https://*.googlevideo.com/',
      'https://static.cloudflareinsights.com'
    ],
    'script-src': [
      'self',
      'localhost:*',
      'sha256-jJRyFHbyYyWq0qnPRIobBCZON4vc+P5RXzYgJ5fHVTg=',
      'report-sample',
      'https://prismic.io',
      'https://*.prismic.io',
      'https://static.cloudflareinsights.com',
      'https://plausible.io',
      'https://plausible.speedynetz.de'
    ],
    'worker-src': ['self']
  }
}