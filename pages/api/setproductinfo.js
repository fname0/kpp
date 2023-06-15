export async function handler(req, res) {
  const data = await req.json();
    fetch("http://95.174.102.106:7474/api/test.php", {
      method: "POST",
      body: data
    });
    res.status(200).send(data);
}