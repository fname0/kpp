export async function handler(req: Request) {
  const data = await req.json();
    fetch("http://95.174.102.106:7474/api/test.php", {
      method: "POST",
      body: data
    });
    return new Response('fff');
}