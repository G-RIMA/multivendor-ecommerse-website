// pages/category/[...slug].tsx
import { useRouter } from 'next/router';
import CategoryPage from '@/components/main/app-component/page-component/category.component';

export default function CategoryRoute() {
  const router = useRouter();
  const { slug } = router.query;

  // Handle loading state
  if (!slug) return null;

  // Convert slug array to string values
  const category = typeof slug[0] === 'string' ? slug[0] : '';
  const subcategory = slug[1] ? slug[1] : undefined;

  return (
    <CategoryPage 
      category={category}
      subcategory={subcategory}
    />
  );
}