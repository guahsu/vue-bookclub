export default {
  getProductData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: '商品A', price: 100 },
          { id: 2, name: '商品B', price: 150 },
          { id: 3, name: '商品C', price: 250 },
          { id: 4, name: '商品D', price: 500 }
        ])
      }, 1500)
    })
  }
}
