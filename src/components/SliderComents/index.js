import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import { ContainerCarousel, ItemSlide } from "./styles";
import reform from "../../assets/reform.jpg";
import rigui from "../../assets/rigui.jpg"

function SliderComents() {
  return (
    <ContainerCarousel>
      <div className="container">
      <div className="title">
            <h1>
              Comentários
            </h1>
          </div>
        <Carousel show={3}>
        
          <div className="ItemSlide">
            <div className="ProfileAndInformation">
              <div className="PictureComents">
              </div>
              <div className="InformationProfile">
                <h3>Kauan Gouveia Monte</h3>
                <p>3 semanas</p>
              </div>
            </div>
            <div className="Description">
              <p>
                Jose fernando é um otimo prestador <br/>
                Tem um preço justo e faz reformas de qualidade
              </p>
            </div>
          </div>
          <div className="ItemSlide">
            <div className="ProfileAndInformation">
              <div className="PictureComents">
              </div>
              <div className="InformationProfile">
                <h3>Kauan Gouveia Monte</h3>
                <p>3 semanas</p>
              </div>
            </div>
            <div className="Description">
              <p>
                Jose fernando é um otimo prestador <br/>
                Tem um preço justo e faz reformas de qualidade
              </p>
            </div>
          </div>
          <div className="ItemSlide">
            <div className="ProfileAndInformation">
              <div className="PictureComents">
              </div>
              <div className="InformationProfile">
                <h3>Kauan Gouveia Monte</h3>
                <p>3 semanas</p>
              </div>
            </div>
            <div className="Description">
              <p>
                Jose fernando é um otimo prestador <br/>
                Tem um preço justo e faz reformas de qualidade
              </p>
            </div>
          </div>
          <div className="ItemSlide">
            <div className="ProfileAndInformation">
              <div className="PictureComents">
              </div>
              <div className="InformationProfile">
                <h3>Kauan Gouveia Monte</h3>
                <p>3 semanas</p>
              </div>
            </div>
            <div className="Description">
              <p>
                Jose fernando é um otimo prestador <br/>
                Tem um preço justo e faz reformas de qualidade
              </p>
            </div>
          </div>
          <div className="ItemSlide">
            <div className="ProfileAndInformation">
              <div className="PictureComents">
              </div>
              <div className="InformationProfile">
                <h3>Kauan Gouveia Monte</h3>
                <p>3 semanas</p>
              </div>
            </div>
            <div className="Description">
              <p>
                Jose fernando é um otimo prestador <br/>
                Tem um preço justo e faz reformas de qualidade
              </p>
            </div>
          </div>
          <div className="ItemSlide">
            <div className="ProfileAndInformation">
              <div className="PictureComents">
              </div>
              <div className="InformationProfile">
                <h3>Kauan Gouveia Monte</h3>
                <p>3 semanas</p>
              </div>
            </div>
            <div className="Description">
              <p>
                Jose fernando é um otimo prestador <br/>
                Tem um preço justo e faz reformas de qualidade
              </p>
            </div>
          </div>
          <div className="ItemSlide">
            <div className="ProfileAndInformation">
              <div className="PictureComents">
              </div>
              <div className="InformationProfile">
                <h3>Kauan Gouveia Monte</h3>
                <p>3 semanas</p>
              </div>
            </div>
            <div className="Description">
              <p>
                Jose fernando é um otimo prestador <br/>
                Tem um preço justo e faz reformas de qualidade
              </p>
            </div>
          </div>v
          
        </Carousel>
      </div>
    </ContainerCarousel>
  );
}

export default SliderComents;
