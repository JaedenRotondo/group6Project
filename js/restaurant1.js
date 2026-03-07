let menu_list = []

document.querySelectorAll(".quantity-control").forEach((control) => {
    const minusBtn = control.querySelector(".minus-btn");
    const plusBtn = control.querySelector(".plus-btn");
    const countEl = control.querySelector(".count");

    let count = 0;

    minusBtn.addEventListener("click", () => {
        if (count > 0) {
            count--;
            countEl.textContent = count;
        }
    });

    plusBtn.addEventListener("click", () => {
        count++;
        countEl.textContent = count;
    });
});


function checkoutRestaurant1() {
    document.querySelectorAll(".quantity-control").forEach((control, index) => {
        const menuItemName = control.querySelector(".menu-item-name").textContent
        const menuItemPrice = control.querySelector(".menu-item-price").textContent.substring(1)
        const countOfElement = control.querySelector(".count").textContent
        menu_list.push({ "name": menuItemName, "price": menuItemPrice, "quantity": countOfElement })
    })
    localStorage.setItem("menu_items", JSON.stringify(menu_list))
    console.log(localStorage)
    window.location.href = "checkoutRest1.html"

}