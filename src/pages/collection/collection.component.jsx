import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./collection.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item.component";

// import {
//   selectCollection,
//   selectCollections,
// } from "../../redux/shop/shop.selectors";

import { selectCollection } from "../../redux/shop/shop.selectors";

// const CollectionPage = ({ collection }) => {
const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state),
// });

export default CollectionPage;
