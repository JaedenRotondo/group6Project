let menu_items = JSON.parse(localStorage.getItem("menu_items"))
let checkout_summary_section = document.getElementById("checkout_summary_section")
console.log(menu_items)
menu_items.forEach(menu_item => {
    let list_item = document.createElement("li")
    let list_item_name = menu_item.name
    let list_item_price = Number(menu_item.price)
    let list_item_quantity = Number(menu_item.quantity)
    let list_item_total = list_item_price * list_item_quantity

    console.log(list_item_name, list_item_price, list_item_quantity, list_item_total)

    list_item.textContent = 'Name: ' + list_item_name + '\nPrice: ' + list_item_price + '\nQuantity ' + list_item_quantity + '\nTotal: ' + list_item_total
    checkout_summary_section.append(list_item)
});



