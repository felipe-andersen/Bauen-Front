import styled from "styled-components";
import Encanador from "../../assets/Encanador.jpg";
import reward from "../../assets/reward.svg";
export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 1500px;
  display: flex;
  flex-direction: column;
`;

export const ProfileContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 400px;
  border-bottom: solid 0.5px #dadada;
  align-items: center;
  justify-content: center;
  background-color: #074ead;
  flex-direction: row-reverse;
  flex-direction: column;
  color:white;
  .PictureProfile {
    flex-direction: column-reverse;
    flex-direction: row-reverse;
    display: flex;
    height: 250px;
    width: 250px;
    background-color: #dadada;
    border-radius: 100%;
    background-image: url(${Encanador});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border: solid 4px #ff5c00;
    align-items: flex-end;  

    .PictureAward {
      
      height: 150px;
      width: 90px;
      background-image: url(${reward});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      position: absolute;
      
    }
  }
`;

export const InformationsContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 120px;
  overflow-y:hidden;
  justify-content: center;
  font-family: "Baloo 2";
  .Informations {
    display: flex;
    height: 100px;
    width: 1300px;
    justify-content: center;
    background-color: white;

    .ProfilesText {
      height: auto;
      width: 400px;

      margin-right: 20px;
      padding-top: 10px;
      h2 {
        text-align: center;
        font-family: "Baloo 2";
        color: #00277D;
        img {
          height: 30px;
          width: 30px;
        }
      }
      p {
        text-align: center;
        font-family: "Baloo 2";
        color: #00277D;
      }
    }
    .Stars {
      display: flex;
      height: auto;
      width: 400px;
      justify-content: center;
      align-items: center;
      margin-right: 20px;
    }
    .ButtonsOfProfile {
      display: flex;
      height: auto;
      width: 400px;
      justify-content: center;
      align-items: center;
      
      font-family: "Baloo 2";
      button {
        width: 300px;
        height: 55px;
        border-radius: 5px;
        border: 0px;
        color: white;
        background-color:#074ead;
        box-shadow: 0 0 0.5em gray;
        cursor: pointer;
        font-family: "Baloo 2";
 
      }
    }
  }
`;  