import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const { allProducts, isLoading, error } = useSelector((state) => state.products); // Kiểm tra lỗi
  const [data, setData] = useState([]);

  useEffect(() => {
    // Log để kiểm tra
    console.log("All Products:", allProducts);
    console.log("Category Data:", categoryData);

    if (allProducts) {
      if (categoryData === null) {
        setData(allProducts);
      } else {
        const filteredProducts = allProducts.filter(
          (i) => i.category === categoryData
        );
        setData(filteredProducts);
      }
    }
  }, [allProducts, categoryData]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={3} />
          <br />
          <br />
          <div className={`${styles.section}`}>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
              {data.length > 0 ? (
                data.map((i, index) => (
                  <ProductCard data={i} key={i._id || index} /> // Sử dụng _id nếu có
                ))
              ) : (
                <h1 className="text-center w-full pb-[100px] text-[20px]">
                  Không tìm thấy sản phẩm nào!
                </h1>
              )}
            </div>
          </div>
          <Footer />
        </div>
      )}
      {error && (
        <div className="text-center text-red-500">
          {error}
        </div>
      )}
    </>
  );
};

export default ProductsPage;
