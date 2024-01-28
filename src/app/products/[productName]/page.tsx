'use client'
import Body from "@/components/Body";
import Layout from "@/components/Layout";
import ProductImage from "@/components/Product/ProductImage";
import ProductInfo from "@/components/Product/ProductInfo";
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { getProductbyid } from "../../../../data";


export default function Page() {

  const params = useParams<{ productName: string }>();
  const router = useRouter();
  const selectedId = useSearchParams().get("id") || ""

 
  const product = getProductbyid(params.productName, selectedId)

  const { productName, discountPercent, productActualPrice, productPrice } = product || { productId: "", productActualPrice: "", productImage: "", productName: "", productPrice: "" };
  console.log("product-----", params,selectedId);


  return (
    <Layout>

      <div className="productDetailWrapperCard container">
        <ProductImage />
        <div
          className={`productDetailWrapper`}
        >
          <ProductInfo productName={productName} productQty={""} productDiscountPrice={productPrice} productActualPrice={productActualPrice} productDiscount={discountPercent} />
        </div>
      </div>

    </Layout>
  )
}
