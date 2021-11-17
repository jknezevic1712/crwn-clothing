import React from "react";
import { Route } from "react-router-dom";
// import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

// import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
// import CollectionPage from "../collection/collection.component";
import CollectionPageContainer from "../collection/collection.container";
// import WithSpinner from "../../components/with-spinner/with-spinner.component";

// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from "../../firebase/firebase.utils";

// import { updateCollections } from "../../redux/shop/shop.actions";
import {
  fetchCollectionsStart,
  fetchCollectionsStartAsync,
} from "../../redux/shop/shop.actions";
import {
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
} from "../../redux/shop/shop.selectors";

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // state = {
  //   loading: true,
  // };

  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    // const collectionRef = firestore.collection("collections");
    // const { updateCollections } = this.props;
    /*
     * collectionRef.onSnapshot() means whenever the collectionRef gets updates or
     * whenever this code gets run for the first time, this collectionRef will send us the snapshot
     * representing the code of our collections objects array at the time when this code renders
     */
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
    //   async (snapshot) => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     updateCollections(collectionsMap);
    //     this.setState({ loading: false });
    //   }
    // );
    /* 
    ! Dolje je napravljeno pomoću promise-ova
    */
    // collectionRef.get().then((snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
    /* 
    ! Pomoću fetch-a
    */
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crwn-db-f27e9/databases/(default)/documents/collections"
    // )
    //   .then((response) => response.json())
    //   .then((collections) => console.log(collections));

    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    // const { match, isCollectionFetching, isCollectionLoaded } = this.props;
    const { match } = this.props;
    // const { loading } = this.state;
    // umjesto isCollectionFetching stavis loading

    //     return (
    //       <div className="shop-page">
    //         <Route
    //           exact
    //           path={`${match.path}`}
    //           render={(props) => (
    //             <CollectionsOverviewWithSpinner
    //               isLoading={isCollectionFetching}
    //               {...props}
    //             />
    //           )}
    //         />
    //         <Route
    //           path={`${match.path}/:collectionId`}
    //           render={(props) => (
    //             <CollectionPageWithSpinner
    //               isLoading={!isCollectionLoaded}
    //               {...props}
    //             />
    //           )}
    //         />
    //       </div>
    //     );
    //   }
    // }

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
// isCollectionFetching: selectIsCollectionFetching,
// isCollectionLoaded: selectIsCollectionLoaded,
// });

const mapDispatchToProps = (dispatch) => ({
  // updateCollections: (collectionsMap) =>
  //   dispatch(updateCollections(collectionsMap)),
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
