import AdminCards from "../components/AdminCards";

export default function AdminProducts() {
  return (
    <div className="App">
        <div className="categoryCont">
            <h1 className="homeHeader">Админка</h1>
            <AdminCards cat={"all"}/>
        </div>
    </div>
  )
}