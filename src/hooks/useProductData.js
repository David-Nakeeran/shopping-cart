// export async function getProducts() {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         if(!response.ok) {
//             throw {
//                 message: 'Failed to fetch products',
//                 statusText: response.statusText || 'Unknown Error',
//                 status: response.status
//             };
//         };
//         const data = await response.json();
//         return data;
//     } catch(error) {
//         console.error('Error message: ', error.message)
//         console.error('Status Text:', error.statusText)
//         console.error('Status:', error.status)
//         throw error;
//     } 
// };

export async function useProductData(id = "") {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if(!response.ok) {
            throw {
                message: 'Failed to fetch products',
                statusText: response.statusText || 'Unknown Error',
                status: response.status
            };
        };
        const data = await response.json();
        return data;
    } catch(error) {
        console.error('Error message: ', error.message)
        console.error('Status Text:', error.statusText)
        console.error('Status:', error.status)
        throw error;
    } 
};



// export async function getProduct(id) {
//     try {
//         const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//         if(!response.ok) {
//             throw Error(response.status)
//         }
//         const data = await response.json();
//         return data;
//     } catch(error) {
//         console.error(error)
//         return []
//     }
    
// }