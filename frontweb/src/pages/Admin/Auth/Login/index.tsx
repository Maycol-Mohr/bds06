import { useForm } from 'react-hook-form';

import './styles.css';

type FormData = {
  username: string;
  senha: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register('username')}
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
        </div>
        <div className="mb-2">
          <input
            {...register('senha')}
            type="senha"
            className="form-control base-input "
            placeholder="Senha"
            name="senha"
          />
        </div>
        <div className="login-submit"></div>
      </form>
    </div>
  );
};

export default Login;
