export default function handler(req, res) {
    console.log(req)
    return new Response('Hello, Next.js!', {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
        }
      });
}