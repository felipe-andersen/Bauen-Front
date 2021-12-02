import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 800px;
  border-left: 2px solid #dadada;
  border-right: 2px solid #dadada;
  margin-left: auto;
  margin-right: auto;
`;

export const PostHeader = styled.div`
  display: flex;
  width: 800px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  flex-direction: column;

  .HeaderPost {
    display: flex;
    width: 800px;
    height: 200px;
    overflow: hidden;
    
    .PerfilPost {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: auto;
    }

    .PerfilImage {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background-color: transparent;
      display: flex;
      align-items: center;
      img {
        width: 90px;
        height: 90px;
        border: 2px solid #074ead;
        border-radius: 50%;
      }
    }
  }
  .Description {
    background-color: purple;
    display: flex;
    width: 800px;
    height: 200px;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input {
      margin-top: 20px;
      width: 400px;
      height: 30px;
      font-size: 20px;
      border: solid 0.5px #074ead;
      padding: 10px;
      border-radius:5px;
    }
    input::placeholder {
      color: #5679e0;
    }
  }
  .TitlePost {
    display: flex;
    width: 500px;
    height: 200px;
    padding-top: 30px;
    flex-direction: column;
    overflow: hidden;
  }

  h2 {
    height: auto;
    width: auto;
    font-size: 25px;
    font-weight: bold;
    color: #00277d;
  }

  .ServicesList {
    width: 500px;
    height: 120px;
    padding-top: 5px;
  }

  select {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    min-height: 50px;
    padding: 5px;
    background-color: white;
    border: 2px solid #dadada;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    color: #074ead;
    cursor: pointer;

    option{
      background-color: white;
      font-size: 20px;
    }
  }
`;

export const PostImage = styled.div`
background-color: black;
  display: flex;
  width: 1000px;
  height: 650px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  overflow: hidden;
  .postImage {
    width: 600px;
    height: 700px;
    border: 4px solid #074ead;
    border-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;


    > img {
      display: none;
      padding: 10px;
      width: 550px;
      height: 420px;
    }
    > img:hover {
      width: 550px;
      height: 420px;
    }
  }
  .post {
    background-color: yellow;
    display: flex;
    overflow: hidden;
    width: 600px;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    border: 4px solid #074ead;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  input[type="file"] {
    display: none;
  }
  img {
    display: flex;
    background-color: red;
    cursor: pointer;
    width: 100px;
    height: 120px;
  }
`;

export const PostButtons = styled.div`
  display: flex;
  width: 1000px;
  height: 150px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  .areaButtons {
    display: flex;
    width: 600px;
    height: 80px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }

  .Cancel {
    width: 155px;
    height: 55px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: #074ead;
    border: 2px solid #074ead;
    border-radius: 5px;
    margin-right: 100px;
    background-color: white;
  }

  .Confirm {
    width: 155px;
    height: 55px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: white;
    border: 2px solid #074ead;
    border-radius: 5px;
    background-color: #074ead;
  }
`;
