// pages/products/[id].tsx
'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProductDetailsPage from '@/components/main/app-component/page-component/product-details.component';
import { mockProducts, Product } from '@/components/products/homestuff.component';


const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    console.log('Current ID:', id);  // Debug log
    console.log('Available Products:', mockProducts);  // Debug log

    if (id) {
      const foundProduct = mockProducts.find(p => {
        console.log('Comparing:', p.id, id);  // Debug log
        return p.id === id;
      });
      
      console.log('Found Product:', foundProduct);  // Debug log

      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        console.log('Product not found');  // Debug log
      }
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return <ProductDetailsPage productId={product.id} />;
};

export default ProductPage;