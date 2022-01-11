import styled from "styled-components";

export const BannerWrapper = styled.div`
  background: url(${(props) => props.bgImage}) no-repeat center center/6000px;
  /*background-position 和 background-size 属性, 之间需使用/分隔, 且position值在前, size值在后。*/
  .banner {
    height: 270px;
    background-color: red;
    display: flex;
    position: relative;
  }
`;

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }

  .slick-dots li button {
    width: 6px !important ;
    height: 6px !important;
    border-radius: 100% !important;
    background-color: #fff !important;
  }

  .ant-carousel .slick-dots .slick-active button,
  .ant-carousel .slick-dots button:hover {
    background-color: red !important;
  }
`;

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank",
})`
  width: 254px;
  height: 270px;
  background: url(${require("@/assets/img/download.png")});
`;

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`;
