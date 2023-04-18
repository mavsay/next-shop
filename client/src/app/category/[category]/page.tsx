"use client";
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { addToFavoriteList, writeId } from "@/features/products/productsSlice";
import  api, { getCategory } from '@/fetchRequest';
import { useQuery } from '@tanstack/react-query';

import Card from '@/components/card/page';

import styles from '@/styles/Category.module.scss';
import { useEffect } from 'react';

export default function Category(props: any) {
  // const dispatch = useAppDispatch();

  // const addToFavorite = (id: string) => {
  //   // dispatch(addToFavoriteList(id));
  // };

  // console.log(api.category(['headphones']))

  // const categoryName = props.params.category;

  // const r = await api.category(['headphones']);

  // const query = useQuery({
  //   queryKey: ['products', 'category'],
  //   queryFn: ()=> api.category(['headphones']),
  // });

  // const { isError, isLoading, data } = query;

  // if (isError) {
  //   return new Error(`Status Code:`)
  // }

  // if (!isLoading) {
  //   return (
  //     <div className={styles.main}>
  //       <h1 className={styles.title}>Телефоны</h1>
  //       <div className={styles.list}>
  //         {data && data.products?.map((product: any, i: number) => (
  //           <Card
  //             key={product.name + i}
  //             link={`/product/${product.link}`}
  //             product={product}
  //             handler={addToFavorite}
  //             // productHandler={writeIdStore}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   )
  // }


  // const writeIdStore = (id: any) => {
  //   dispatch(writeId(id))
  // };


  useEffect(() => {
    (async () => {
      getCategory('headphones');
    })();
    // api.category('headphones').then((data: any) => console.log(data));
  }, []);

  return (
      <div className={styles.main}>
        <h1 className={styles.title}>Телефоны</h1>
        <div className={styles.list}>
          {/* {data && data.products?.map((product: any, i: number) => (
            <Card
              key={product.name + i}
              link={`/product/${product.link}`}
              product={product}
              handler={addToFavorite}
              // productHandler={writeIdStore}
            />
          ))} */}
        </div>
      </div>
    )
};
