export default function AdminCard(props) {
    const order = props.shiih;

    return (
            order.type === "product" ? <div ><h2>{console.log(order.id)}Покупка товаров</h2>
            <p>{order.fio}</p>
            <a href={"tel:"+(order.phone[0]=="7"?"+":"")+order.phone}>{(order.phone[0]=="7"?"+":"")+order.phone}</a>
            <p>{order.whats === "true" ? "Написать на WhatsApp" : "Позвонить на телефон"}</p>
            <p>---</p>
            {Object.entries(order.products).map((product, i) => (
                <div key={i}>
                    <p>{product[1].title}</p>
                    <p>Артикул: {product[1].num}</p>
                    <p>{order.productscount.split(",")[i]} шт.</p>
                    <p>{product[1].price}₽ {parseInt(order.productscount.split(",")[i]) === 1 ? null : "(" + product[1].price*parseInt(order.productscount.split(",")[i]) + ")"}</p>
                    {product[1].deleted === "0"?product[1].out === "False"?null:<p style={{color: "red"}}>товар не в наличии</p>:<p style={{color: "red"}}>товар удален</p>}
                    <p>---</p>
                </div>
            ))}
            <p><strong>Общая цена: {order.productspricesum}</strong></p>
            <button onClick={() => props.deleteOrder(order.id)}>Удалить</button>
            <br />
            <p>--------------------------------</p>
            <br /></div> : <div >
            <h2>Ремонт/сборка КПП{console.log(order.id)}</h2>
            <p>{order.fio}</p>
            <a href={"tel:"+(order.phone[0]=="7"?"+":"")+order.phone}>{(order.phone[0]=="7"?"+":"")+order.phone}</a>
            <p>{order.whats === "true" ? "Написать на WhatsApp" : "Позвонить на телефон"}</p>
            <p>---</p>
            <p>{order.description}</p>
            <button onClick={() => props.deleteOrder(order.id, order.raw_id)}>Удалить</button>
            <br />
            <p>--------------------------------</p>
            <br />
        </div>
    )
}