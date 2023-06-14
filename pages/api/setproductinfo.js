export default function handler(req, res) {
    fetch("http://95.174.102.106:7474/api/test.php", {
      method: "POST",
      body: req.body,
      headers: {
        "content-type": "application/json",
      },
    });
    res.status(200).send(req.body);
}