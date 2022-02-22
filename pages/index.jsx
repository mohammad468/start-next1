import Counter from "../components/counter/Counter";
import Login from "../components/login/Login";
const Home = () => {
  return (
    <div>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <Counter />
        <Login />
      </div>
    </div>
  );
};
export default Home;
