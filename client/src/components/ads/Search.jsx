import { React, useState } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import * as bindsService from "../../services/bindsService";
import BindsContext from "../../contexts/bindsContext";

const searchFormKeys = {
  SearchOrder: "searchorder",
  SearchCity:'searchcity',
  SearchDay:'searchday'
};

export default function Search() {
  const { searchSubmitHandler } = useContext(BindsContext);

  const { formValues, onChange, onSubmit } = useForm(searchSubmitHandler, {
    [searchFormKeys.SearchOrder]: "",
    [searchFormKeys.SearchCity]: "",
    [searchFormKeys.SearchDay]: "",
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
            name="searchorder"
            onChange={onChange}
            values={formValues[searchFormKeys.SearchOrder]}
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
            values={formValues[searchFormKeys.SearchCity]}
            //!make the placeholder and all login to search for CITY NOT TIME
            placeholder="ВИД"
          />
        </div>

        <div className="col-lg-4 form-cols">
          <input
            style={{ textAlign: "center" }}
            type="text"
            className="form-control"
            name="searchday"
            onChange={onChange}
            values={formValues[searchFormKeys.SearchDay]}
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
