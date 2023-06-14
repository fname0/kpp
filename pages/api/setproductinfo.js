export async function handler(req, res) {
    const data = await req.body.json();
    return new Response(data)
}