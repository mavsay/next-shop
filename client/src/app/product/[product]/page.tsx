"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import LayOut from '@/components/layout';
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { addProductInCart, calcTotalCount } from "@/features/cart/cartSlice";
import { createProduct } from "@/features/products/productsSlice";
import { useRouter } from "next/navigation";
import { useQuery } from '@tanstack/react-query';
import { getProduct } from '@/fetchRequest';

import CartTab from '@/assets/icons/shopping-cart.svg';
import PurplePhone from "@/assets/images/18503-63Deeppurple.jpg";

import styles from '@/styles/Product.module.scss';



const Product = (props: any) => {
  const dispatch = useAppDispatch();

  const productName = props.params.product;

  const query = useQuery({
    queryKey: ['products', 'product'],
    queryFn: ()=> getProduct(`${productName}`),
  })

  const { isError, isLoading, data } = query;

  const router = useRouter();

  const handleAddToCart = () => {
    // if (productItem && !product.isAdded) {
    //   dispatch(createProduct({ ...productItem, isAdded: true }));
    //   dispatch(addProductInCart(productItem));
    //   dispatch(calcTotalCount());
    // } else {
     
    // }

    router.push('/cart');
  };

  if(isError) {
    return;
  }

  if (!isLoading) {
    const { name, description, price, isAdded} = data?.product;

    return (
      // <LayOut>
        <div className={styles.main}>
          <section className={styles.section}>
            <div className={styles.img}>
              <Image src={PurplePhone} alt=""/>
            </div>
            <div className={styles.block}>
              <div className={styles.text}>
                {name}
              </div>
              <div className={styles.description}>
                {description}
              </div>
              <div className={styles.pay}>
                <div className={styles.price}>{price} ₽</div>
                <div className={styles.button}>
                  <div
                    className={styles.button__cart + isAdded ? styles.button__active : ''}
                    onClick={handleAddToCart}
                  >
                    <Image src={CartTab} alt='' className={styles.button__icon}/>
                    <div className={styles.button__text}>{isAdded ? 'Перейти' : 'Добавить'} в корзину</div>
                    {/* <div className={styles.button__info}> */}
                      {/* <span className={styles.button__price}>{product.price} ₽</span> */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      // </LayOut>
    )
  }
};

export default Product;

