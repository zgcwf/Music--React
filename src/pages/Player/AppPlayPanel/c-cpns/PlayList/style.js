import styled from "styled-components";

export const PlayListWrapper = styled.div`
  position: relative;
  width: 553px;
  padding: 2px;

  .play-item {
    padding: 0 8px 0 25px;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    line-height: 28px;
    color: #ccc;

    &.active {
      color: #fff;
      background-color: #000;

      ::before {
        content: "";
        position: absolute;
        left: 8px;
        width: 10px;
        height: 13px;
        background: url(${require("@/assets/img/playlist_sprite.png")}) -182px 0;
      }
    }

    .left {
      width: 340px;
      display: flex;
      justify-content: space-between;
      .songName {
        width: 200px;
        display: flex;
        align-items: center;
        cursor: pointer;
      }
      .icon {
        display: none;
        width: 110px;
        .btn {
          display: inline-block;
          text-indent: -9999px;
          width: 22px;
          height: 22px;
          margin: 8px 10px 0 0;
          cursor: pointer;
        }
        .favor {
          width: 16px;
          height: 16px;
          background-position: -24px 0;
        }
        .share {
          width: 16px;
          height: 16px;
          background-position: 0 0;
        }
        .download {
          width: 16px;
          height: 16px;
          background-position: -56px -50px;
        }

        .remove {
          width: 16px;
          height: 16px;
          background-position: -51px 0;
        }
      }
    }
    &:hover {
      color: #fff;
      background-color: #000;
      .icon {
        display: block;
      }
    }
    .right {
      display: flex;
      align-items: center;

      .singer {
        width: 80px;
      }

      .duration {
        width: 45px;
      }

      .link {
        margin-left: 20px;
        width: 14px;
        height: 16px;
        background-position: -100px 0;
      }
    }
  }
`;
