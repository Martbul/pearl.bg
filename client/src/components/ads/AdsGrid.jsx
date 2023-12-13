import * as displayAdsService from "../../services/displayAdsService";
import { useContext, useEffect, useState } from "react";

import AdCard from "./AdCard";
import InfoModal from "./InfoModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Loader from "../loader/Loader";

import displayAdsContext from "../../contexts/displayAdsContext";

export default function AdsGrid() {
  const [ads, setAds] = useState([]);

  const [showMoreInfoModal, setMoreInfoModal] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const[isDeleted,setIsDelted] = useState(false);

  const { searcharticle, searchcity, searchtype } = useContext(displayAdsContext);
  useEffect(() => {
    setIsLoading(true);
    displayAdsService
      .getAll()
      .then((result) => {
        // Filter the result based on the search values
        const filteredAds = result.filter(
          (ad) =>
            ad.article.toLowerCase().includes(searcharticle.toLowerCase()) 
            //&&
           // ad.timeForDelivery
           //   .toLowerCase()
            //  .includes(searchcity.toLowerCase()) 
            &&
            ad.address.toLowerCase().includes(searchcity.toLowerCase())
        );
        setAds(filteredAds);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [searcharticle, searchcity, searchtype, isDeleted]);

  const onAdInfoClick = async (ad_id) => {
    // console.log(bind_id);
     setIsDelted(false);
    setSelectedAd(ad_id);
    // console.log(selectedBind);
    setMoreInfoModal(true);
  };

  const hideMoreInfoModal = () => {
    setMoreInfoModal(false);
  };

    const rerendereletedModal = () => {
     setIsDelted(true);
    };

  return (
    <>
      {isLoading && <Loader />}

      {showMoreInfoModal && (
        <InfoModal
          hideModal={hideMoreInfoModal}
          rerenderDeletedModal={rerendereletedModal}
          adId={selectedAd}
        />
      )}

      <Container>
        <Row>
          {ads.map((ad) => (
            <AdCard
              key={ad._id}
              ad_id={ad._id}
              userFullName={ad.fullname}
              userAddress={ad.address}
             description={ad.description}
             article={ad.article}
             images={ad.images}
              onAdInfoClick={onAdInfoClick}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}
