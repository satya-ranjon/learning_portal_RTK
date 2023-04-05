import LoginForm from "../../components/common/form/LoginForm";
import { logo } from "../../constant/icon";

const LoginStudent = () => {
  return (
    <section className="py-6 bg-primary h-screen grid place-items-center">
      <div className="mx-auto max-w-md px-5 lg:px-0">
        <div>
          <img className="h-12 mx-auto" src={logo} />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
            Sign in to Student Account
          </h2>
        </div>
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginStudent;
