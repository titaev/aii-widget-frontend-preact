export const gratitudeStyles = `
* > * {
    box-sizing: border-box;
}
p {
    margin: 0;
}
.modal-gratitude {
    position: absolute;
    width: 700px;
    height: 613px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    background: #ffffff;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.12);
    border-radius: 35px;
    font-family: 'Noto Sans';
}
.modal-gratitude .close {
    position: absolute;
    top: -50px;
    right: -50px;
    border-radius: 60px;
    z-index: 100;
    cursor: pointer;
    visibility:hidden;
    animation: fadeIn .3s forwards 3s;
}
.modal-gratitude .bg-image {
    position: relative;
    /* left: 50%;
    top: -130px;
    transform: translateX(-50%); */
    width: 700px;
    height: 329px;
    background: #0484ac;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
}
@media screen and (max-width: 840px) {
  .modal-gratitude .close {
    display: none;
  }
}
.modal-gratitude .fg-image {
    position: absolute;
    left: 0;
    top: -130px;
    transform: translate(-110px, 15px);
}
.modal-gratitude .modal-inner {
    /* transform: translateY(-124px); */
    width: 409px;
    margin: 50px auto;
}
.modal-gratitude .text-1 {
    font-weight: 700;
    font-size: 35px;
    line-height: 24px;
    text-align: center;
    color: #0484ac;
}
.modal-gratitude .text-2 {
    /* font-family: 'Noto Sans'; */
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #333333;
    margin-top: 24px;
}
.modal-gratitude .text-2 > b {
    font-family: 'Fredoka One';
    /* font-weight: 400; */
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #333333;
}
.modal-gratitude .btn {
    text-align: center;
    padding: 7px 20px;
    width: 200px;
    background: #f18225;
    box-shadow: 0px 5px 0px #b56521;
    border-radius: 50px;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: #ffffff;
    margin-inline: auto;
    cursor: pointer;
}
@keyframes fadeIn {
  0% {
    transform:scale(0,0);
    visibility:visible;
    opacity:0;
  }
  100% {
    transform:scale(1);
    visibility:visible;
    opacity:1;
  }
}
`;
