class Product {
    title: string;
    constructor(public name, public price) {
        this.title = name + " " + price;
    }
}

function reader(person: Product) {
    return "Product title = " + person.title;
}

var product = new Product('VR glasses', 2);

document.getElementById('product').innerHTML = reader(product);        