export default function AdminCard(props) {
    const order = props.shiih;
    if (order.type === "product")
    {
    let productsPriceSum = 0;
    let qw = 0;
    order.products.forEach(product => {
        product.deleted==="0"?product.out==="False"?productsPriceSum+=parseInt(product.price*(order.productscount.split(",")[qw])):null:null;
        qw+=1;
    });
    }

    return (
            order.type === "product" ? <div><h2>Покупка товаров</h2>
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
            <p><strong>Общая цена: {productsPriceSum}</strong></p>
            <button onClick={() => props.deleteOrder(order.id)}>Удалить</button>
            <br />
            <p>--------------------------------</p>
            <br /></div> : <div>
            <h2>Ремонт/сборка КПП</h2>
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