import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 75px;
  font-size: 14px;
  color: #fff;
  background-color: #242424;
  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
  }
`;
export const HeaderLeft = styled.div`
  display: flex;
  background-color: #242424;

  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .select-list {
    display: flex;
    line-height: 70px;

    .select-item {
      position: relative;
      a {
        display: block;
        padding: 0 19px;
        color: #ccc;
        text-decoration: none;
      }
      /* 给最后一个select-item 的a元素添加伪类--HOT */
      &:last-of-type a {
        position: relative;
        &::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }
      /* select-item类以及NavLink选中项添加hover */
      &:hover,
      .active {
        color: #fff;
        background: #000;
      }
      /* 给NavLink选中项的后代元素类名icon添加样式--选中三角 */
      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;
  background-color: #242424;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;
    input {
      font-size: 12px;
    }
  }

  .center {
    width: 90px;
    height: 32px;
    box-sizing: border-box;
    border: 1px solid #4f4f4f;
    color: #ccc;
    border-radius: 16px;
    text-align: center;
    margin: 0 16px;
    background-color: #242424;
    font-size: 12px;
    &:hover {
      border: 1px solid #fff;
    }
  }
`;
