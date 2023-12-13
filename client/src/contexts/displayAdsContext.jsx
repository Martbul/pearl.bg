import { createContext, useState } from "react";

const displayAdsContext = createContext();

export const DisplayAdsProvider = ({ children }) => {

   const [searcharticle, setSearchArticle] = useState('')
   const [searchcity, setSearchCity] = useState('')
   const [searchtype, setSearchType] = useState('')

   const searchSubmitHandler = async (formValues) => {
     //console.log(formValues);
     setSearchArticle(formValues.searcharticle);
     setSearchCity(formValues.searchcity);
     setSearchType(formValues.searchtype);
    
  };


   const values = {
     searchSubmitHandler,
     searcharticle,
     searchcity,
     searchtype
  };

  return <displayAdsContext.Provider value={values}>{children}</displayAdsContext.Provider>;
};

displayAdsContext.displayName = "displayAdsContext";

export default displayAdsContext;
