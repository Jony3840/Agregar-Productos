class Product {
    constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
    }
}
class UI{
    addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Producto</strong>: ${product.name} -
                    <strong>Precio</strong>: ${product.price} - 
                    <strong>Año</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                </div>
            </div>
        `;
    productList.appendChild(element);
    }
    resetForm() {
    document.getElementById("product-form").reset();
    }
    deleteProduct(element) {
    if (element.name === "delete") {
        element.parentElement.parentElement.remove();
        this.showMessage("Producto eliminado con exito", "success");
    }
    }
    showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));
      // Show in The DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");
      // Insert Message in the UI
    container.insertBefore(div, app);
      // Remove the Message after 3 seconds
    setTimeout(function () {
        document.querySelector(".alert").remove();
    }, 3000);
    }  }
document
    .getElementById("product-form")
    .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value,
        price = document.getElementById("price").value,
        year = document.getElementById("year").value;
    const product = new Product(name, price, year);
    const ui = new UI();
    if (name === "" || price === "" || year === "") {
        ui.showMessage("Por favor agrega datos en los campos", "danger");
    }
    ui.addProduct(product);
    ui.showMessage("Producto agregado con exito", "success");
    ui.resetForm();
    });  
document.getElementById("product-list").addEventListener("click", (e) => {
    const ui = new UI();
    ui.deleteProduct(e.target);
    e.preventDefault();
});