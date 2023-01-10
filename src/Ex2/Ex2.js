// 2. Viết một function nhận vào một object order,
// dựa vào đó xác định xem một đơn đặt hàng có đủ điều kiện để vận chuyển miễn phí hay không.
// Một đơn đặt hàng đủ điều kiện để vận chuyển miễn phí
// nếu tổng chi phí của các mặt hàng được mua vượt quá $ 50,00.
function freeShipping(order){
    let isFreeShip = false
    const menu = Object.values(order);
    console.log(menu);
    let item = 0
    for (let i = 0; i < menu.length; i++) {
         item += menu[i];
         if (item >= 50){
            isFreeShip = true;
         }
    }
    console.log(item);
    // if (order.cake + order.cola + order.vegetable + order.bread >= 50){
    //     isFreeShip = true;
    //     console.log("Free shipping")
    // }
    return isFreeShip
}
console.log(freeShipping({
    cake: 20,
    cola: 15,
    vegetable: 10,
    bread: 20,
}));

