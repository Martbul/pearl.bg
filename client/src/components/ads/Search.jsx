import { React, useState } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import * as bindsService from "../../services/displayAdsService";
import DisplayAdsContext from "../../contexts/displayAdsContext";

const searchFormKeys = {
  SearchArticle: "searcharticle",
  SearchCity:'searchcity',
  SearchType:'searchtype'
};

export default function Search() {
  const { searchSubmitHandler } = useContext(DisplayAdsContext);

  const { formValues, onChange, onSubmit } = useForm(searchSubmitHandler, {
    [searchFormKeys.SearchArticle]: "",
    [searchFormKeys.SearchCity]: "",
    [searchFormKeys.SearchType]: "",
  });

  return (
    <form 
      method="POST"
      onSubmit={onSubmit}
      className="serach-form-area"
      style={{
        boxShadow: "10px 10px 10px 8px  rgba(47, 47, 47, 0.26)",
        padding: "1%",
        marginTop: "4%",
        marginLeft: "18%",
        marginRight: "18%",
        marginBottom: "4%",
        backgroundColor: "#f7f1ea"
      }}
    >
      <div  className="row justify-content-center form-wrap">
        <div className="col-lg-4 form-cols">
          <input
            style={{ textAlign: "center" }}
            type="text"
            className="form-control  "
            name="searcharticle"
            onChange={onChange}
            values={formValues[searchFormKeys.SearchArticle]}
            placeholder="КАКВО ТЪРСИШ?"
          />
        </div>

        <div className="col-lg-4 form-cols">
          <input
            style={{ textAlign: "center" }}
            type="text"
            className="form-control"
            name="searchcity"
            onChange={onChange}
            values={formValues[searchFormKeys.SearchType]}
            //!make the placeholder and all login to search for CITY NOT TIME
            placeholder="ВИД"
          />
        </div>

        <div className="col-lg-4 form-cols">
          <input
            style={{ textAlign: "center" }}
            type="text"
            className="form-control"
            name="searchcity"
            onChange={onChange}
            values={formValues[searchFormKeys.SearchCity]}
            placeholder="ЦЯЛАТА СТРАНА"
          />
        </div>
        <div className="col-lg-2 form-cols">
          <button type="submit" className="btn btn-info">
            <span className="lnr lnr-magnifier" /> Търсене
          </button>
        </div>
      </div>
    </form>
  );
}
