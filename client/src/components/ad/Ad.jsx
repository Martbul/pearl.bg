import { useRef, useState, useEffect, useContext } from "react";
import * as adService from "../../services/adService";
import SuccessfulOrderModal from "./SuccessfulOrderModal";
import AuthContext from "../../contexts/authContext";

const formInitialState = {
  fullname: "",
  address: "",
  images: "",
  description: "",
  article: "",
};
export default function Ad() {
  const [formValues, setFormValues] = useState(formInitialState);
  const [showSuccessfulOrderModal, setSuccessfulOrderModal] = useState(false);
  const [errors, setErrors] = useState("");
  const { email, username, isAuthenticated } = useContext(AuthContext);

  const changeHandler = (e) => {
  //  const reader = new FileReader()
    let value = e.target.value;
  //  let imgUrl = ""
//console.log(imgUrl);

// if(e.target.name == "image"){
//    reader.readAsDataURL(value);
//   reader.onload = function () {
//     const imgUrl = reader.result;
//     // Use the dataURL to embed the image in a web page.
  
//   setFormValues((state) => ({
//     ...state,
//     [e.target.name]: imgUrl,
//   }));
// }
// }
// if(e.target.value===image){
  
//  const reader = new FileReader();

//   setFormValues((state) => ({
//    ...state,
//   value : reader.readAsDataURL(value),
    
//     [e.target.name]: value,
//   }));
// }
    setFormValues((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const resetFomrHandler = () => {
    setFormValues(formInitialState);
    setErrors("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    //console.log(formValues);

    if (!isAuthenticated) {
      const alerted = alert(`You must be logged in to make an order!`);
      throw Error;

      if (alerted) {
        navigate("/singup");
      }
    }
    if (
      formValues.fullname.length < 3 ||
      typeof formValues.fullname != "string" ||
      !formValues.fullname.match(/^[a-zA-Z]+ [a-zA-Z]+$/)
    ) {
      setErrors("Please enter a valid name");
      throw new Error("Please enter a valid name");
    }

    if (
      formValues.address.length < 5 ||
      typeof formValues.address != "string"
    ) {
      setErrors("Please enter a valid address");
      throw new Error("Please enter a valid address");
    }

    // if(formValues.dayForDelivery.length < 5 || typeof(formValues.dayForDelivery) != 'string'){
    //   setErrors('Please enter a valid day for delivery')
    //   throw new Error('Please enter a valid day for delivery')

    // }

    // if(formValues.timeForDelivery.length !== 5 || typeof(formValues.timeForDelivery) != 'string'){
    //   setErrors('Please enter a valid time for delivery')
    //   throw new Error('Please enter a valid time for delivery')

    // }

    if (formValues.description.length < 4 || typeof formValues.description != "string") {
      setErrors("Please enter a valid order");
      throw new Error("Please enter a valid order");
    }

    // if(!formValues.timeForDelivery.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)){
    //   setErrors('Please enter a valid time for delivery')
    //   throw new Error('Please enter a valid time for delivery')
    // }

    try {
      formValues.email = email;
      formValues.username = username;
      console.log(formValues);
      const ad = await adService.create(formValues);
      // console.log(order._id);
      // setSuccessfulOrderModal(true)
    } catch (message) {
      console.log(message);
    }

    resetFomrHandler();
  };

  // const createSuccessfulOrderModal = () => {

  //     setSuccessfulOrderModal(true);
  //   };

  const hideSuccessfulOrderModal = () => {
    setSuccessfulOrderModal(false);
  };

  return (
    <>
      {showSuccessfulOrderModal && (
        <SuccessfulOrderModal
          hideSuccessfulOrderModal={hideSuccessfulOrderModal}
        />
      )}

      <section className="s11">
        <div className="container00">
          <div className="text00">Добави Обява</div>
          <form method="POST">
            <div className="form-row00">
              <div className="input-data">
                <input
                  type="text00"
                  id="fullname"
                  name="fullname"
                  value={formValues.fullname}
                  onChange={changeHandler}
                />
                {errors == "Please enter a valid name" && (
                  <div className="d11">
                    <p className="p11">{errors}</p>
                  </div>
                )}

                <div className="underline" />
                <label htmlFor="fullname">Пълно Име</label>
              </div>
              <div className="input-data">
                <input
                  type="text00"
                  id="address"
                  name="address"
                  value={formValues.address}
                  onChange={changeHandler}
                />
                {errors == "Please enter a valid address" && (
                  <div className="d11">
                    <p className="p11">{errors}</p>
                  </div>
                )}

                <div className="underline" />
                <label htmlFor="address">Адрес</label>
              </div>
            </div>

            {/* <div className="form-row00">
              <div className="input-data">
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg"
                  id="images"
                  name="images"
                  value={formValues.images}
                  onChange={changeHandler}
                  style={{ paddingTop: "2%", color: "black" }}
                />
             
                {errors == "Please enter a valid time for delivery" && (
                  <div className="d11">
                    <p className="p11">{errors}</p>
                  </div>
                )}

                <div className="underline" />
                <label htmlFor="">Снимка</label>
              </div>
            </div> */}



<div className="form-row00">
              <div className="input-data">
                <input
                  type="test"
                  //accept="image/png, image/jpg, image/jpeg"
                  id="images"
                  name="images"
                  value={formValues.images}
                  onChange={changeHandler}
                  style={{ paddingTop: "2%", color: "black" }}
                />
             
                {errors == "Please enter a valid time for delivery" && (
                  <div className="d11">
                    <p className="p11">{errors}</p>
                  </div>
                )}

                <div className="underline" />
                <label htmlFor="">Снимка</label>
              </div>

              <div className="input-data">
                <input
                  type="text"
                  //accept="image/png, image/jpg, image/jpeg"
                  id="article"
                  name="article"
                  value={formValues.article}
                  onChange={changeHandler}
                  style={{ paddingTop: "2%", color: "black" }}
                />
             
                {errors == "Please enter a valid time for delivery" && (
                  <div className="d11">
                    <p className="p11">{errors}</p>
                  </div>
                )}

                <div className="underline" />
                <label htmlFor="">Предмет</label>
              </div>
            </div>

            <div className="form-row00">
              <div className="input-data textarea">
                <textarea
                  id="description"
                  name="description"
                  rows={8}
                  cols={80}
                  value={formValues.description}
                  onChange={changeHandler}
                />
                {errors == "Please enter a valid order" && (
                  <div className="d11">
                    <p className="p11">{errors}</p>
                  </div>
                )}

                <br />
                <div className="underline" />
                <label htmlFor="">Описание</label>
                <br />
                <div className="form-row00 submit-btn">
                  <div className="input-data">
                    <div className="inner" />
                    <input
                      type="button"
                      defaultValue="Добави обява"
                      onClick={submitHandler}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
