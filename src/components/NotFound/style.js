import styled from "styled-components";

export const NotFountWrapper = styled.div`
font-family: 'Open Sans', sans-serif;
font-size: 14px;
color: #3c3c3c;
background-color: #ECECEC;
display:flex;
justify-content: space-between;
height: 90vh;

.wrap-404{
	float: left;
	position: relative;
	width: 600px;
	margin-top: 150px;
}

.fl {float:left;display:inline;}
.fr {float:right;display:inline;}
.cf {display:block;zoom:1;}
* html .cf {height:1%;}
.cf:after {content:" ";display:block;height:0;clear:both;visibility:hidden;}


.title-404{
	float: left;
	line-height: 80px;
	margin-left: 20px;
	display: inline-block;
    font-family: "方正舒体";
    margin-left:20px;
}


i:nth-child(-n+3){
	color: #00b7fa;
	font-size: 64px;
}
i:nth-child(n+4){
	color: #666;
	font-size: 64px;
}

.not-found-tip{
	text-align: left;
	color: #666;
	font-family: "Microsoft YaHei";
	font-size: 20px;
	text-shadow: 0 1px 0 #fff;
	letter-spacing: 1px;
	line-height: 2em;
	text-indent: 18px;
}
.reason{
	margin-top: 54px;
	display: block;
}
.possible{
	font-weight: bold;
	text-indent: 18px;
	margin-top: 10px;
}
.reason ul{
	list-style: square;
	padding-left: 82px;
	margin-top: 10px;
}
.reason li{
	line-height: 22px;
	margin: 8px 0;
}
.reason li:first-child{
	line-height: 22px;
	margin: 8px 0;
	color: #00b7fa;
}

.not_found{
	float: right;
	width: 300px;
	height: auto;
	margin-top: 150px;
	position: relative;
}

.not-found {
  text-align: center;
  font-family: cursive,sans-serif;
  font-size: 150px;
  font-weight: bold;
  line-height: 150px;
  letter-spacing: 25px;
  color: #fff;
  transform: rotate(18deg);
  transform-origin: 12% 60%;

  span {
	float: left;
  	cursor: pointer;
  	text-shadow: 0px 0px 2px #686868,
	    0px 1px 1px #ddd,
	    0px 2px 1px #d6d6d6,
	    0px 3px 1px #ccc,
	    0px 4px 1px #c5c5c5,
	    0px 5px 1px #c1c1c1,
	    0px 6px 1px #bbb,
	    0px 7px 1px #777,
	    0px 8px 3px rgba(100, 100, 100, 0.4),
	    0px 9px 5px rgba(100, 100, 100, 0.1),
	    0px 10px 7px rgba(100, 100, 100, 0.15),
	    0px 11px 9px rgba(100, 100, 100, 0.2),
	    0px 12px 11px rgba(100, 100, 100, 0.25),
	    0px 13px 15px rgba(100, 100, 100, 0.3);
     	transition: all .3s linear;  

         &:hover {
            text-shadow: 0px 0px 2px #686868,
              0px 1px 1px #fff,
              0px 2px 1px #fff,
              0px 3px 1px #fff,
              0px 4px 1px #fff,
              0px 5px 1px #fff,
              0px 6px 1px #fff,
              0px 7px 1px #777,
              0px 8px 3px #fff,
              0px 9px 5px #fff,
              0px 10px 7px #fff,
              0px 11px 9px #fff,
              0px 12px 11px #fff,
              0px 13px 15px #fff;
          }
    }
}



.btn{
	width: 100%;
	margin-top: 100px;
}

.button{
	background-color: #ffffff;
	display: inline-block;
	vertical-align: middle;
	zoom: 1;
	border: 1px solid #d4d4d4;
	height: 32px;
	line-height: 32px;
	padding: 0px 25.6px;
	font-weight: 300;
	font-size: 14px;
	color: #666666;
	text-shadow: 0 1px 1px white;
	text-decoration: none;
	text-align: center;
	border-radius: 30px;
	margin-right: 40px;
	box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.5), 0px 1px 2px rgba(0, 0, 0, 0.15);
}


`