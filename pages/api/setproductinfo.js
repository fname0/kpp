export const config = {
  api: {
    bodyParser: false,
  },
}

export default function handler(req, res) {
    fetch("http://95.174.102.106:7474/api/test.php", {
      method: "POST",
      body: req.body
    });
    res.status(200).json(req.body);
}