import { useState, useContext } from "react";
import { register } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";

export default () => {
  const [form, setForm] = useState({});

  const { authDispatch } = useContext(GlobalContext);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };
  console.log("form: ", form);

  const registerFormValid =
    !form.username?.length ||
    !form.firstName?.length ||
    !form.lastName?.length ||
    !form.email?.length ||
    !form.password?.length;

  const onSubmit = () => {
    register(form)(authDispatch);
  };
  return { form, onChange, registerFormValid, onSubmit };
};
