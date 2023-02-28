import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGames } from "../../redux/actions/getAllGames";


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);
  return (
    <>
      <h1>Home</h1>
      <CardsContainer />
    </>
  );
};

export default Home;
