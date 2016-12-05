var Product = (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
        this.title = name + " " + price;
    }
    return Product;
}());
function reader(person) {
    return "Product title = " + person.title;
}
var product = new Product('VR glasses', 2);
document.getElementById('product').innerHTML = reader(product);
