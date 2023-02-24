import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGames } from "../../redux/actions";

// useEffect() para cuando se monta el componente HOME
// para hacer el dispatch useDispatch()
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);//array de dependencias?[dispatch]
  return (
    <>
      <h1>Home</h1>
      <CardsContainer />
    </>
  );
};

export default Home;
