import Header from "../../components/Header";
import { Container } from "./styles";
import reward from "../../assets/reward.svg";
import search from "../../assets/search.png";
import chat from "../../assets/chat.svg";
import filter from "../../assets/filter.svg";
import Footer from "../../components/Footer";
import Star from "../../components/Star";
import {
  SearchContainer,
  ContainerFilters,
  ContainerResult,
  ContainerFeed,
  ContainerProfile,
  CardProfile,
} from "./styles";
import menu from "../../assets/menu.svg";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { lisQuantityServices, serviceProvider } from "../../services";
import { useHistory } from "react-router";

function ListServicesProvider() {

  const [heart, setHeart] = useState(false);
  const [serviceProviders, setServiceProviders] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await serviceProvider.listServiceProvider();
    setServiceProviders(data);
  }, []);
  console.log()
  const saveRoomProvider = (room) => {
    localStorage.setItem("roomProvider", room);
  };

  const history = useHistory();
  const getProviderId = (id) => {
    localStorage.setItem("idServiceProviderSelect", id);
    history.push("/ProfileVclient");
  };

  const [quantityServices, setQuantityService] = useState([]);
  // Mostrando quantidade de projetos realizados
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await lisQuantityServices.quantityServices();
    setQuantityService(data);
  }, []);

  console.log(quantityServices)

  const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHouver] = useState(null);
    return (
      <div>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input
                className="ratingButton"
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar
                className="Star"
                color={ratingValue <= (hover || rating) ? "#FFC700" : "gray"}
                size={35}
                onMouseEnter={() => setHouver(ratingValue)}
                onMouseLeave={() => setHouver(null)}
              />
            </label>
          );
        })}
        <div className="StarText"></div>
      </div>
    );
  };

  console.log(quantityServices)
  return (
    <>
      <Container>
        <Header />
        <SearchContainer>
          <div className="InputWithImg">
            <form>
              <label>
                <input
                  type="text"
                  name="name"
                  placeholder="O que você precisa?"
                />
              </label>
            </form>
            <img src={search} alt="procurar" />
          </div>
        </SearchContainer>
        <ContainerFilters>
          <div className="Filters">
            <img src={filter} alt="filtros" />
            <h1>Ordenar por:</h1>
            <h2>Recentes</h2>
            <h2>Avaliação</h2>
            <h2>Quantidade de estrelas</h2>
          </div>
        </ContainerFilters>
        <ContainerResult>
          <div className="Result">
            <h2>{serviceProviders.length} Resultados</h2>
          </div>
        </ContainerResult>
        <ContainerFeed>
          <ContainerProfile>
            {serviceProviders.map((item) => (
              <CardProfile key={item.id_service_provider}>
                <div className="Profile">
                  <div
                    className="ProfileImage"
                    onClick={() => getProviderId(item.id_service_provider)}
                  >
                    <img className="RewardUser" src={reward} alt="reward" />
                    <img className="PhotoUser" src={item.photo} alt="usuario" />
                  </div>
                  <div className="Informations">
                    <div className="NameAndRating">
                      <h2>{item.name}</h2>
                      <div className="AreaStars">
                        <div className="CenterStar">
                          <StarRating />
                        </div>
                      </div>
                      <h3>
                        Prestador verificado
                      </h3>
                    </div>
                    <div className="Options">
                      <div
                        className="Favorite"
                        onClick={() => {
                          setHeart(true);

                        }}
                      >
                        <img src={menu} alt="menu" />
                      </div>
                      <div className="Services">
                        <h4>{item.nameService}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="Contact"
                  onClick={() => {
                    saveRoomProvider(item.room);
                    history.push("/chat");
                  }}
                >
                  <img src={chat} alt="chat" />
                  <h2>Contatar</h2>
                </div>
              </CardProfile>
            ))}
          </ContainerProfile>
        </ContainerFeed>
        <Footer />
      </Container>
    </>
  );
}

export default ListServicesProvider;
