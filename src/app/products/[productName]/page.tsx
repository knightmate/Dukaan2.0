'use client'
import Body from "@/components/Body";
import Layout from "@/components/Layout";
import ProductImage from "@/components/Product/ProductImage";
import ProductInfo from "@/components/Product/ProductInfo";
import { useParams, useRouter, useSearchParams } from 'next/navigation'


export default function Page() {

    const params=useParams<{ productName:string}>();
    const router = useRouter();
   const searchParams= useSearchParams().get("id")
 
    console.log("params",params);

  return (
    <Layout>
   
      <div className="productDetailWrapperCard">
      <ProductImage/>
       <div
    className={`productDetailWrapper`}       
    >
      <ProductInfo/>
      </div>
      </div>
     
    </Layout>
  )
}
