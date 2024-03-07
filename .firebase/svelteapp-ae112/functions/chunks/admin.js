import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FB_PROJECT_ID = "svelteapp-ae112";
const FB_CLIENT_EMAIL = "firebase-adminsdk-l5lqk@svelteapp-ae112.iam.gserviceaccount.com";
const FB_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCxrEpXGVN4AAMq\nfL/XD4uBE1QzHB3wcrLXWUFVH3Ctkv0z5XEvee8jnK96I1khDFFPchM1HPvhA41P\nNTxNHpraeJr/WdafD1ZQrzNm3VIm6cRdEOyIorGqRQXqmowP9lkmCllGN+Whc5oQ\naNILMk4iFgUlu9L6eKreb9S3xDwLdfiV9b2/H9rWoqsJp+DWbvIipuSo4/SY7u2A\n2ERrPLWctAKRL0JJVFcZRJcfe8KZyDhy6VELSkOEp+Y5+/cUxAW1fKO413lEJU5u\ndIJ8C1Hz3btySnifhSWb1pZx4Yx1pjgd7pXV3x3ddcVN0DZDTcALDJOxTgM7CF2C\nV1tnlqzrAgMBAAECggEADXj0jCU5/JP3qX2bKGof2HJIRLXhmU2BPS4h85v2Nds7\nAvfnfMOgvBESB09t30EpWz5ZsYHYoafcy8BMKcbj1CQoEKvVx+roTybx3V9z7sp0\nHuB9JyE7Gp+wQqlkbINwIB/RxC7R5Uu4R31DTCEM5q3HxyQ2a9LBlithtGuXaADy\nMM0IVk4iwKNvSrN+FOoZYJmTUxvVdr7RjC8Kl4J8cT0MYmxBpPzjnY7ZKk6XOCcv\n83os7tptXS2Eo+yAaZxlXQlnciYy7vFV6JV+pQ43l4hzJWvlKVBcaa4qLgQSZHcu\n7hE39hXnspbQtXYQpELnG9dHRc9Lkkt82V+Pq8vRKQKBgQDeZUsbx2sRd3lPhBwX\n4npEzhu4+7WSl3v9iUMkIdSg/2JMRBPiuB71LQ/4FnvEj6vjUm4w8J/J8aLadQjN\ni94a9syg3KGogAWbKkittgrfMu29+haYmwo0hFiDSk8XkyD0DxoLwk5yZ9dJP8g7\nhyWAxoly0jNRqPZFIXQYfJ+wQwKBgQDMhQkNGY1tQAmNEkSuRfud0HAT+G9xCzJF\nnALqHeyuPoH5gMS5D4ULQLDWGItJFUtISpZa9Su2gp5WARx1lvirYsW5rnVG2u5H\nrtYgHET6+F1Yed/tqHLrbE6CNcBVsOiQnvWcKwLPi6QIZB+EIeVCcu6vLM9cNPSl\nvZ40S436OQKBgQCBlqyJZ04wQ1ngx65HDKUKar8krydCYBrTxaPl7gCkP6vbnN+p\ngHgpjTR87zz3cHBMab/jrJKvbanjecbDXvjw5VafdXCNauvZWm43KphzLo3x4URB\ncDYmG+gnuKkVp5nQHOykZXiomXGNMSlP5pQn0YhN68YTk0zNQ40Op6+1WQKBgBMS\n1SVDnMzzi/B8I6udGzo8ljdGlB4WzTlws1TiNZCKg9ShDbe0mtPR1Kwi3dqTAdJc\nImmZM9pxlBKxR9YvnkFdlNMcUhOpl09YHuAfws8lGo+Fzjx72TvbffbmzGkxdn8G\nVCGcYUa53zJpJAdOofLwhRIRO8V9qtNKO9bktPkBAoGARFE4Y6L2JwhTlZ6gSpKF\nNL9NJGj9ri1gtswJgFrpXJFvCZU6q/SksLA6t77els8pTmFEk56HfV1d+H85WJfD\n0xEHsFsziuordzbTaCKLuVLLU3t5sgnpStk3AXZ5cDOaB7/LYtfDoXhplLmgOmuV\nZlOuhx7H1AZINF7e0Hc/tLA=\n-----END PRIVATE KEY-----\n";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error: ", err.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};
