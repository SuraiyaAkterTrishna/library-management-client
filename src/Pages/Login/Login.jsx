import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import img from "../../assets/images/login/login.svg";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = { email };

        // get access token
        axios
          .post("https://library-management-server-one.vercel.app/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          });
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 py-4 mb-8">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              New to Bookista?
              <Link className="text-orange-600 font-bold" to="/register">
                Please Register
              </Link>
            </p>
            <div>
              <button onClick={handleGoogleSignIn} className="btn btn-primary">
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
