import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import Header from "../../components/Header/DiscountHeader/Header";
import DiscountHeader from "../../components/Header/DiscountHeader/DiscountHeader";
import DiscountItem from "../../components/DiscountCards/DiscountItem";
import DiscountLoader from "../../components/DiscountLoader/DiscountLoader";

const DiscountPage = () => {
  const images = useSelector((state) => state.imagesReducer.images);

  return (
    <>
      <View style={styles.headerContainer}>
        <Header title="Дисконтные карты" />
        <DiscountHeader />
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {images.length !== 0 ? (
          <>
            {images.map((data, index) => (
              <DiscountItem data={data} key={`discountItem_${index}`} />
            ))}
          </>
        ) : (
          <DiscountLoader savedCardsCount={images.length} />
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: "#EDF1F7",
  },
  contentContainer: {
    flexGrow: 1,
  },
});

export default DiscountPage;

