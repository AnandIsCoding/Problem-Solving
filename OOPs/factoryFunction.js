// factory function doesn't uses new and this keyword and it returns object
// constructor function uses new and this keyword and it doesn't return object 

function OnlineStore() {
    let products = [];
    return {
        add: function(prod) {
            products.push(prod);
        },
        list: function() {
            console.log(products);
        }
    };
}

const firstStore = OnlineStore(); // ✅ No 'new' needed
firstStore.add('Vegetables');
firstStore.add('Milk');
firstStore.list(); // Output: ['Vegetables', 'Milk']
