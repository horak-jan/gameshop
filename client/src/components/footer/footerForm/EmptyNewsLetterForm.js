import { useForm } from "react-hook-form";

const EmptyNewsLetterForm = (props) => {
  const { sendForm } = props;
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(sendForm)}>
      {errors.email && <p className="form-error">{errors.email.message}</p>}

      <input
        placeholder="E-mail"
        name="email"
        ref={register({
          required: "Please enter your email",
          minLength: { value: 8, message: "Email is too short" },
        })}
      />

      <button type="submit">Subscribe</button>
    </form>
  );
};

export default EmptyNewsLetterForm;
