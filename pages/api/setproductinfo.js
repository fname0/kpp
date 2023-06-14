export async function handler(req, res) {
    const data = await req.body.json();
    res.status(200).json(data)
}