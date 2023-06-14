export default function handler(req, res) {
    console.log(req)
    res.headers.append("Access-Control-Allow-Origin", "*")
    res.status(200).json({ name: 'John Doe' })
}