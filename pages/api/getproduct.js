import mysql from "mysql2/promise";

export default async function handler(req, res) {
    const query = req.query;
    const { id } = query;

    const dbconnection = await mysql.createConnection({
        host: "95.174.102.106",
        database: "kamaz",
        user: "remote",
        password: "yaDumalPass"
    });
    const [[data]] = await dbconnection.execute("SELECT * FROM products WHERE id = ?", [id]);
    dbconnection.end();

    res.status(200).json(data)
}