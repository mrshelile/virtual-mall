import { createStore } from 'vuex'

export default createStore({
    state: {
        products: [

        ],
        isAgentSite:localStorage.getItem("isAgentSite"),
        delivery: '',
        order: {
            subTotal: 0,
            tax: 0,
            orderTotal: 0
        }
    },
    mutations: {
        removeProduct(state, id) {
            var index = -1
            for (var i = 0; i < state.products.length; i++)
                if (state.products[i].id == id)
                    index = i
                    // console.log(product)
            if (index != -1) {
                state.products.splice(index, 1)
                state.order.subTotal = 0
                state.order.tax = 0
                state.order.orderTotal = 0
            }
        },
        changeQuantity(state, quantityProduct) {
            if(quantityProduct=='')
                alert()
            var index = -1
            for (var i = 0; i < state.products.length; i++)
                if (state.products[i].id == quantityProduct.product.id)
                    index = i
            if (index != -1) {
                state.products[index].selectedQuatity = parseInt(quantityProduct.event.target.value)
                // state.products[index].price=0
                console.log(quantityProduct.product.id, index)
                var tax = state.order.tax;
                var subTotal = state.order.subTotal;
                var orderTotal = state.order.orderTotal;
                state.products.forEach(product => {
                    // console.log(((product.vat / 100) * product.price) * 2)

                    tax += ((product.vat / 100) * product.price) * product.selectedQuatity,
                        subTotal =subTotal+ (product.price * product.selectedQuatity)
                });
                orderTotal = subTotal + tax
                orderTotal = parseFloat(orderTotal).toFixed(2)
                tax = parseFloat(tax).toFixed(2)
                state.order = { subTotal: subTotal, tax: tax, orderTotal: orderTotal }
            }

        },
        addProduct(state, product) {
            // console.log(product)
            state.products.push({ id: product.key, name: product.Name, picture: product.image, description: product.description, quantity: product.quantity,  store: product.ShopKey, sale: product.onsole, price: product.price, category: product.category, vat: product.vat, selectedQuatity: 1 })
            var tax = 0;
            var subTotal = 0;
            var orderTotal = 0
            state.products.forEach(product => {
                // console.log(((product.vat / 100) * product.price) * 2)

                tax += ((product.vat / 100) * product.price) * product.selectedQuatity,
                    subTotal += product.price * product.selectedQuatity
            });
            orderTotal += subTotal + tax
            orderTotal = parseFloat(orderTotal).toFixed(2)
            tax = parseFloat(tax).toFixed(2)
            state.order = { subTotal: subTotal, tax: tax, orderTotal: orderTotal }

        },
        addDelivery(state, delivery) {
            // console.log(delivery)
            state.delivery = { id: delivery.key, name: delivery.Name, owner: delivery.owner, contacts: delivery.contacts, email: delivery.email, description: delivery.description, address: delivery.address }
        },
        removeDelivery(state, id) {

            if (state.delivery.id == id)
                state.delivery = ''
                // console.log(state.delivery)

        }

    },
    actions: {},
    getters: {},
    modules: {}
})