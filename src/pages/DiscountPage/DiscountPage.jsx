import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import DiscountHeader from "./DiscountHeader";
import DiscountItem from "./DiscountItem";
import DiscountLoader from "./DiscountLoader";

const DiscountPage = () => {
  const images = useSelector((state) => state.imagesReducer.images);

  console.log(images.length);

  return (
    <>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {images.length !== 0 ? (
          <>
            <DiscountHeader />
            {images.map((data, index) => (
              <DiscountItem data={data} key={`discountItem_${index}`} />
            ))}
          </>
        ) : (
          <DiscountLoader />
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
});

export default DiscountPage;
