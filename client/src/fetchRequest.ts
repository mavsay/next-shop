const baseUrl = process.env.SERVER_REQUEST_API;

interface Api {
  [index: string]: any;
}

const buildAPI = (methods: string[]) => {
  const api: Api = {};
  for (const method of methods) {
      api[method] = (...args: any) => new Promise((resolve, reject) => {
        const url = `${baseUrl}/${method}`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(args),
        }).then((res) => {
          console.log(res, 'res');
            const { status } = res;
            if (status !== 200) {
            reject(new Error(`Status Code: ${status}`));
            return;
            }
            resolve(res.json());
        });
      });
  }
  return api;
};

const api = buildAPI(['categories', 'category', 'product', 'cart']);

export const getCategory = async (name: string) => {
  console.log(name, 'name')
  const url = `${baseUrl}/category`;
  try {
    const data = await fetch(url, {
      method: 'POST',
      credentials: "include",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify([name]),
    })
    
    console.log(data)
  } catch (error) {
    console.log(error, 'error')
  }

};


export default api;


// const fetching = async (path: string, method: string = "GET") => {
//   const response = await fetch(`${url}${path}`, {
//     method,
//   });

//   if (!response.ok) throw new Error('Error!');

//   const data = await response.json();

//   return data;
// }


// export const getCategories = async () => {
//   try {
//     const res = await fetching("/categories");
//     console.log(res.categories, 'categories');
//     return {
//       name: res.name,
//       categories: res.categories,
//     }
//   } catch (error) {
//     return {
//       categories: [],
//     }
//   }
// };

// export const getCategory = async (name: string) => {
//   try {
//     const res = await fetching(`/category/${name}`);
//     return {
//       name: res.name,
//       products: res.products,
//     }
//   } catch (error) {
//     return {
//       products: [],
//     }
//   }
// };

// export const getProducts = async (name: string) => {
//   const res = await fetching("/products");
// };

// export const getProduct = async (name: string) => {
//   try {
//     const res = await fetching(`/product/${name}`);
//     return {
//       name: res.name,
//       product: res.product,
//     }
//   } catch (error) {
//     return {
//       products: [],
//     }
//   }
// };