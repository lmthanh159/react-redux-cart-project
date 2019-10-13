var initialState = [
    {
        id: 1,
        name: 'Iphone 11 pro max',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566953859132',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4.5
    },
    {
        id: 2,
        name: 'Samsung galaxy Note 10',
        image: 'https://www.att.com/catalog/en/idse/Samsung/Samsung%20Galaxy%20Note10/Aura%20Glow-hero-zoom.png',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 600,
        inventory: 10,
        rating: 4
    },
    {
        id: 3,
        name: 'Nokia 9.1',
        image: 'https://www-phoneyear-com.exactdn.com/wp-content/uploads/2018/11/Nokia-9.jpg?quality=80&ssl=1',
        description: 'Sản phẩm do Nokia sản xuất',
        price: 300,
        inventory: 10,
        rating: 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
};

export default products;