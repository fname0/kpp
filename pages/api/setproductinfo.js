export default function handler(req, res) {
    fetch("http://95.174.102.106:7474/api/test.php", {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: {
        "content-type": "application/json",
      },
    }).catch((e) => console.log(e));
}