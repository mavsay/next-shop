import CategoriesList from '@/components/categoriesList';
import api from '@/fetchRequest';

import styles from '@/styles/Categories.module.scss';

export default async function Categories() {
  const { categories } = await api.categories('categories');
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Категории</h1>
      <CategoriesList data={categories}/>
    </main>
  )
}
