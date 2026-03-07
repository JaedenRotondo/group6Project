let menu_items = JSON.parse(localStorage.getItem("menu_items"))
let checkout_summary_section = document.getElementById("checkout_summary_section")

menu_items.forEach(menu_item => {
    let quantity = Number(menu_item.quantity)
    if (quantity === 0) return

    let price = Number(menu_item.price)
    let lineTotal = price * quantity

    let list_item = document.createElement("li")
    list_item.className = "list-group-item d-flex justify-content-between align-items-center"
    list_item.innerHTML =
        '<div>' +
            '<h6 class="mb-0">' + menu_item.name + '</h6>' +
            '<small class="text-muted">$' + price.toFixed(2) + ' x ' + quantity + '</small>' +
        '</div>' +
        '<span class="fw-semibold">$' + lineTotal.toFixed(2) + '</span>'

    checkout_summary_section.append(list_item)
})



