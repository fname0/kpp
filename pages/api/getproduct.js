export default async function handler(req, res) {
    const query = req.query;
    const { id } = query;
    res.status(200).json({prodId: id})
}