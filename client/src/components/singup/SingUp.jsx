import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Path from "../../paths";

// const signUpFormKeys = {
//   Username: "username",
//   Email:'email',
//   Password: "password",
// };

const formInitialState = {
  username: "",
  email: "",
  password: "",
};

export default function SingUp() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(formInitialState);
  const [errors, setErrors] = useState("");

  const { registerSubmitHandler } = useContext(AuthContext);
  const onChange = (e) => {
    let value = e.target.value;

    setFormValues((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const resetFomrHandler = () => {
    setFormValues(formInitialState);
    setErrors("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    //console.log(formValues);

    if (formValues.username.length < 3) {
      setErrors("Please enter a longer username");
      throw new Error("Please enter a valid username");
    } else if (formValues.email.length < 3) {
      setErrors("Please enter a longer email");
      throw new Error("Please enter a valid email");
    } else if (
      !formValues.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      setErrors("Please enter a valid email");
      throw new Error("Please enter a valid email");
    } else if (formValues.password.length < 6) {
      setErrors("Password must be at least 6 characters");
      throw new Error("Please enter a valid password");
    }

    try {
      const result = await registerSubmitHandler(formValues);
      // if (result == false) {
      //   setErrors("try again");
      // }
      navigate(Path.Home);
    } catch (error) {
     // setErrors("errors");
    }

    resetFomrHandler();
  };

  //   const [errorsHere, setErrorsHere] = useState("");

  //   const { registerSubmitHandler } = useContext(AuthContext);

  //   const { formValues, onChange, onSubmit } = useForm(registerSubmitHandler, {
  //     [signUpFormKeys.Username]: '',
  //     [signUpFormKeys.Email]: '',
  //     [signUpFormKeys.Password]: '',

  // });
  // let { errorsSingUp} = useContext(AuthContext)
  // useEffect(() => {

  //   setErrorsHere(errorsSingUp)
  // },[errorsHere,errorsSingUp])

  return (
    <>
      {errors && (
        <div className="d11">
          <p className="p11">{errors}</p>
        </div>
      )}


      <div style={{ paddingTop: "23%" }}>
        <div className="shape" />
        <div className="shape" />
      </div>
      <form method="POST" className="form11" onSubmit={onSubmit}>
        <h3>Регистриране</h3>
        <label htmlFor="username">Име</label>
        <input
          type="text"
          placeholder="PearlBg"
          id="username"
          name="username"
          onChange={onChange}
          values={formValues.username}
        />
        <label htmlFor="email">Имейл</label>
        <input
          type="text"
          placeholder="pearlbg@gmail.com"
          id="email"
          name="email"
          onChange={onChange}
          values={formValues.email}
        />
        <label htmlFor="password">Парола</label>
        <input
          type="password"
          placeholder="********"
          id="password"
          name="password"
          onChange={onChange}
          values={formValues.password}
        />
        <Link to="/login">Вече имаш акаунт?</Link>
        <button style={{ color: "black" }}>Регистриране</button>
      </form>
    
      <style
        media="screen"
        dangerouslySetInnerHTML={{
          __html:
            "\n        *,\n        *:before,\n        *:after {\n            padding: 0;\n            margin: 0;\n            box-sizing: border-box;\n        }\n\n        body {\n            background-color: #080710;\n        }\n\n        .background {\n            width: 430px;\n            height: 520px;\n            position: absolute;\n            transform: translate(-50%, -50%);\n            left: 50%;\n            top: 50%;\n        }\n\n        .background .shape {\n            height: 200px;\n            width: 200px;\n            position: absolute;\n            border-radius: 50%;\n        }\n\n        .shape:first-child {\n            background: linear-gradient(#1845ad,\n                    #23a2f6);\n            left: -80px;\n            top: -80px;\n        }\n\n        .shape:last-child {\n            background: linear-gradient(to right,\n                    #ff512f,\n                    #f09819);\n            right: -30px;\n            bottom: -80px;\n        }\n\n        .form11 {\n            height: 520px;\n            width: 400px;\n            background-color: rgba(255, 255, 255, 0.13);\n            position: sticky;\n            transform: translate(-50%, -50%);\n            top: 50%;\n            left: 50%;\n            border-radius: 10px;\n            backdrop-filter: blur(10px);\n            border: 2px solid rgba(255, 255, 255, 0.1);\n            box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);\n            padding: 50px 35px;\n        }\n\n        .form11 * {\n            font-family: 'Poppins', sans-serif;\n            color: #ffffff;\n            letter-spacing: 0.5px;\n            outline: none;\n            border: none;\n        }\n\n        .form11 h3 {\n            font-size: 32px;\n            font-weight: 500;\n            line-height: 42px;\n            text-align: center;\n        }\n\n        label {\n            display: block;\n            margin-top: 30px;\n            font-size: 16px;\n            font-weight: 500;\n        }\n\n        input {\n            display: block;\n            height: 50px;\n            width: 100%;\n            background-color: rgba(255, 255, 255, 0.07);\n            border-radius: 3px;\n            padding: 0 10px;\n            margin-top: 8px;\n            font-size: 14px;\n            font-weight: 300;\n        }\n\n        ::placeholder {\n            color: #e5e5e5;\n        }\n\n        button {\n            margin-top: 50px;\n            width: 100%;\n            background-color: #ffffff;\n            color: #080710;\n            padding: 15px 0;\n            font-size: 18px;\n            font-weight: 600;\n            border-radius: 5px;\n            cursor: pointer;\n        }\n\n        .social {\n            margin-top: 30px;\n           ",
        }}
      />
    </>
  );
}
