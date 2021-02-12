import Styled from 'styled-components';

const HamburgerStc=Styled.div`

width: ${(props)=>props.taille || "80"}px;

.nav {
      width: 100%;
      height: 80px;
      position: absolute;
}

.logo {
      font-size: 18px;
      margin: 0.2em 2em;
      line-height: 80px;
      position: absolute;
}

.menu {
      position: absolute;
      height: 80px;
      right: 120px;
}

.menu ul {
      list-style: none;
}

.menu ul li {
      display: inline-block;
      margin: 1em 0;
      padding: 0 30px;
      font-size: 15px;
}

.cart {
      position: fixed;
      font-size: 16px;
      margin: 0.2em 1em;
      line-height: 80px;
      right: 20px;
}

.box-1 {
      position: absolute;
      width: 60px;
      height: 60px;
      background: none;
      border: 2px solid orange;
      top: 10%;
      left: 15%;
      z-index: -1;
      transform: rotate(60deg);
}

.box-2 {
      position: absolute;
      width: 120px;
      height: 120px;
      background: orange;
      /* border: 2px solid orange; */
      top: 54%;
      left: 28%;
      z-index: -1;
      transform: rotate(-110deg);
}

.box-3 {
      position: absolute;
      width: 80px;
      height: 80px;
      background: none;
      border: 2px solid orange;
      top: 34%;
      left: 78%;
      z-index: -1;
      transform: rotate(30deg);
}

.runner img {
      width: 100%;
      z-index: 2;
      margin-top: -20px;
}

.title-2 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: Anton;
      font-size: 90px;
      color: rgba(0,0,0,0);
      font-style: italic;
      text-transform: uppercase;
      z-index: -1;
      -webkit-text-stroke: 2px orange;
      opacity: 0;
}

.title-1 {
      position: absolute;
      top: 38%;
      left: 30%;
      transform: translate(-50%, -50%);
      font-family: Anton;
      font-size: 90px;
      color: orange;
      padding-right: 20px;
      font-style: italic;
      text-transform: uppercase;
      z-index: 1;
      opacity: 0;
      /* -webkit-text-stroke: 2px orange; */
}

.content {
      position: absolute;
      top: 64%;
      left: 57%;
      width: 36%;
      color: grey;
      font-weight: lighter;
      font-size: 14px;
      line-height: 24px;
}

button {
      margin-top: 6px;
      background: orange;
      color: #fff;
      padding: 20px 30px;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-size: 10px;
      border: none;
}

.media {
      position: absolute;
      bottom: 210px;
}

.media ul {
      position: absolute;
      list-style: none;
}

.media ul li {
      color: grey;
      padding: 10px 0;
}


@media(max-width: 900px) {
      .wrapper {
            background: url('https://raw.githubusercontent.com/codegridweb/Sports-Theme-Landing-Page-Concept/master/BG.jpg') no-repeat 50% 50%;
            background-size: cover;
      }

      .pattern {
            display: none;
      }

      .runner img {
            display: none;
      }

      .title-1, .title-2 {
            font-size: 50px;
      }

      .title-1 {
            left: 20%;
            top: 40%;
      }

      .title-2 {
            left: 50%;
            z-index: 1;
      }

      .menu {
            display: none;
      }

      .content p {
            display: none;
      }

      .box-2 {
            top: 70%;
      }

      .content button {
            position: fixed;
            right: 3em;
            bottom: 4em;
            z-index: 1;
      }
}
`;

export default HamburgerStc;