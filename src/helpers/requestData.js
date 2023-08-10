import data from '../data/products.json';

export const requestData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);    
        }, 500);
    });
};

export const RequestItemId = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find((item) => item.id === id);

        if(item) {
            resolve(item);
        }else{
            reject({
                error:"no se encontro el producto"
            });
        };

    });
};
