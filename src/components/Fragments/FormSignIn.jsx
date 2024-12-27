import Button from "../Elements/Button";
import CheckBox from "../Elements/CheckBox";
import LabeledInput from "../Elements/LabeledInput";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext, useState } from "react";
import CustomizedSnackbars from "../Elements/SnackBar";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { NotifContext } from "../../context/notifContext";

const FormSignIn = () => {
  const { setMsg, setOpen, setIsLoading, msg, open } = useContext(NotifContext);
  const { setIsLoggedIn, setName } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onErrors = (errors) => console.error(errors);

  const onFormSubmit = async (data) => {
    setIsLoading(true);
    try {
        const response = await axios.post(
            "https://jwt-auth-eight-neon.vercel.app/login",
            {
                email: data.email,
                password: data.password,
            }
        );

        setOpen(true);
        setMsg({ severity: "success", desc: "Login Success" });

        setIsLoggedIn(true);
        localStorage.setItem("refreshToken", response.data.refreshToken);

        const decoded = jwtDecode(response.data.refreshToken);
        setName(decoded.name);

        setIsLoading(false); 
        navigate("/");
            } catch (error) {
                setIsLoading(false); // Stop loader after error
                if (error.response) {
                    setOpen(true);
                    setMsg({ severity: "error", desc: error.response.data.msg });
                }
            }
        };



  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
        <div className="mb-6">
          <LabeledInput
            label="Email address"
            type="email"
            placeholder="hello@example.com"
            name="email"
            register={{
              ...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address format",
                },
              }),
            }}
          />
          {errors?.email && (
            <div className="text-center text-red-500">
              {errors.email.message}
            </div>
          )}
        </div>
        <div className="mb-6">
          <LabeledInput
            label="Password"
            type="password"
            placeholder="*************"
            name="password"
            register={{
              ...register("password", { required: "Password is required" }),
            }}
          />
          {errors?.password && (
            <div className="text-center text-red-500">
              {errors.password.message}
            </div>
          )}
        </div>
        <div className="mb-3">
          <CheckBox label="Keep me signed in" name="status" />
        </div>
        <Button
          variant={`w-full text-white ${!isValid ? "bg-gray-05 cursor-not-allowed" : "bg-primary zoom-in"}`}
          type="submit"
          disabled={!isValid}
        >
          Login
        </Button>
        {msg && (
          <CustomizedSnackbars
            severity={msg.severity}
            message={msg.message}
            open={open}
            setOpen={setOpen}
          />
        )}
      </form>
    </>
  );
};

export default FormSignIn;
