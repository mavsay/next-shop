'use client';
import DatalistInput from 'react-datalist-input';

import styles from '@/styles/Home.module.scss';

function Home() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.title}>SmartStore</div>
        <DatalistInput
          className={styles.search}
          placeholder='Введите запрос'
          items={[
            { id: 'Chocolate', value: 'Chocolate' },
            { id: 'Coconut', value: 'Coconut' },
            { id: 'Mint', value: 'Mint' },
            { id: 'Strawberry', value: 'Strawberry' },
            { id: 'Vanilla', value: 'Vanilla' },
          ]}
        />
      </main>
    </div>
  )
}


export default Home;