import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Field from "./Field";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "john@doe.com",
      password: "johndoe",
    },
  });
  const {
    login,
    auth: { error },
  } = useAuth();

  const onSubmit = async (formData) => {
    await login(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
    >
      <p className="text-xl text-red-400"> {error} </p>
      <Field label="Email" error={errors.email}>
        <input
          {...register("email", {
            required: "Email address is required",
          })}
          className="auth-input"
          name="email"
          type="email"
          id="email"
        />
      </Field>

      <Field label="Password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be greater or equal 6 char",
            },
            maxLength: {
              value: 18,
              message: "Password must be less or equal 18 char",
            },
          })}
          className="auth-input"
          name="password"
          type="password"
          id="password"
        />
      </Field>

      <button
        className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90 cursor-pointer"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};
export default LoginForm;
