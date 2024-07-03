export const leadStyles = `
* > * {
    box-sizing: border-box;
}
p {
    margin: 0;
}
.flex {
    display: flex;
}
.gap-2 {
    gap: 16px;
}
.space-between {
    justify-content: space-between;
}
.modal-lead {
    z-index: 10;
    // position: absolute;
    // left: 50%;
    // top: 50%;
    // transform: translate(-50%, -50%);
    width: 700px;
    height: 784px;
    background: #ffffff;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.12);
    border-radius: 35px;
    font-family: 'Noto Sans';
    padding: 50px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 50px;
}
.modal-lead .close {
    position: absolute;
    top: -50px;
    right: 50px;
    border-radius: 60px;
    z-index: 100;
    cursor: pointer;
}
.modal-lead .bg-image {
    width: 600px;
    height: 280px;
    background: #0484ac;
    border-radius: 8px;
}
.modal-lead .fg-image {
    position: absolute;
    left: 40px;
    top: -64px;
}
.modal-lead .content {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.modal-lead .name-input,
.modal-lead .email-input,
.modal-lead .phone-input {
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 10px 14px;
    background: #ffffff;
    border: 1px solid #c2c2c2;
    box-shadow: 0px 1.46882px 2.93763px rgba(16, 24, 40, 0.05);
    border-radius: 11.7505px;
}
.modal-lead .error {
    border: 1px solid #ea7e7e;
}
.modal-lead .email-input,
.modal-lead .phone-input {
    flex: 1;
}
.modal-lead .name-input > input,
.modal-lead .email-input > input,
.modal-lead .phone-input > input {
    flex: 1;
    border: 0;
    outline: none;
}
.modal-lead .name-input > input::placeholder,
.modal-lead .email-input > input::placeholder,
.modal-lead .phone-input > input::placeholder {
    color: #c2c2c2;
}
.modal-lead .text-2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
    color: #333333;
}
.modal-lead .text-2 > b {
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
    text-align: center;
    color: #0484ac;
}
.modal-lead .text-2 > span {
    font-family: 'Fredoka One';
    font-style: normal;
    /* font-weight: 400; */
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    color: #0484ac;
}
.modal-lead .btns {
    display: flex;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 70px;
}
.modal-lead .btn {
    text-align: center;
    padding: 8px 20px;
    height: 46px;
    width: 347px;
    background: #f18225;
    box-shadow: 0px 5px 0px #b56521;
    border-radius: 50px;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: #ffffff;
    margin-inline: auto;
    border: 0;
    cursor: pointer;
}
.modal-lead .btn-2 {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 14px 23px;
    width: 183px;
    border: 1.46882px solid rgba(4, 132, 172, 0.5);
    border-radius: 50px;
    color: #0484ac;
    background: none;
    cursor: pointer;
}
.modal-lead .agree-wrapper {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 10px;
    color: #344054;

    display: flex;
    align-items: flex-start;
    gap: 6px;
    margin-top: 4px;
}

/* -------------------------------- Checkbox -------------------------------- */
.checkbox-wrapper-19 {
  box-sizing: border-box;
  --background-color: #fff;
  --checkbox-height: 16px;
}

@-moz-keyframes dothabottomcheck-19 {
  0% {
    height: 0;
  }
  100% {
    height: calc(var(--checkbox-height) / 2);
  }
}

@-webkit-keyframes dothabottomcheck-19 {
  0% {
    height: 0;
  }
  100% {
    height: calc(var(--checkbox-height) / 2);
  }
}

@keyframes dothabottomcheck-19 {
  0% {
    height: 0;
  }
  100% {
    height: calc(var(--checkbox-height) / 2);
  }
}

@keyframes dothatopcheck-19 {
  0% {
    height: 0;
  }
  50% {
    height: 0;
  }
  100% {
    height: calc(var(--checkbox-height) * 1.2);
  }
}

@-webkit-keyframes dothatopcheck-19 {
  0% {
    height: 0;
  }
  50% {
    height: 0;
  }
  100% {
    height: calc(var(--checkbox-height) * 1.2);
  }
}

@-moz-keyframes dothatopcheck-19 {
  0% {
    height: 0;
  }
  50% {
    height: 0;
  }
  100% {
    height: calc(var(--checkbox-height) * 1.2);
  }
}

.checkbox-wrapper-19 input[type=checkbox] {
  display: none;
}

.checkbox-wrapper-19 .check-box {
  height: var(--checkbox-height);
  width: var(--checkbox-height);
  background-color: transparent;
  border: calc(var(--checkbox-height) * .1) solid #ccc;
  border-radius: 5px;
  position: relative;
  display: inline-block;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -moz-transition: border-color ease 0.2s;
  -o-transition: border-color ease 0.2s;
  -webkit-transition: border-color ease 0.2s;
  transition: border-color ease 0.2s;
  cursor: pointer;
}
.checkbox-wrapper-19 .check-box::before,
.checkbox-wrapper-19 .check-box::after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  height: 0;
  width: calc(var(--checkbox-height) * .2);
  background-color: #F3914D;
  display: inline-block;
  -moz-transform-origin: left top;
  -ms-transform-origin: left top;
  -o-transform-origin: left top;
  -webkit-transform-origin: left top;
  transform-origin: left top;
  border-radius: 5px;
  content: " ";
  -webkit-transition: opacity ease 0.5;
  -moz-transition: opacity ease 0.5;
  transition: opacity ease 0.5;
}
.checkbox-wrapper-19 .check-box::before {
  top: calc(var(--checkbox-height) * .72);
  left: calc(var(--checkbox-height) * .41);
  box-shadow: 0 0 0 calc(var(--checkbox-height) * .05) var(--background-color);
  -moz-transform: rotate(-135deg);
  -ms-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
.checkbox-wrapper-19 .check-box::after {
  top: calc(var(--checkbox-height) * .37);
  left: calc(var(--checkbox-height) * .05);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.checkbox-wrapper-19 input[type=checkbox]:checked + .check-box,
.checkbox-wrapper-19 .check-box.checked {
  border-color: #F3914D;
}
.checkbox-wrapper-19 input[type=checkbox]:checked + .check-box::after,
.checkbox-wrapper-19 .check-box.checked::after {
  height: calc(var(--checkbox-height) / 2);
  -moz-animation: dothabottomcheck-19 0.2s ease 0s forwards;
  -o-animation: dothabottomcheck-19 0.2s ease 0s forwards;
  -webkit-animation: dothabottomcheck-19 0.2s ease 0s forwards;
  animation: dothabottomcheck-19 0.2s ease 0s forwards;
}
.checkbox-wrapper-19 input[type=checkbox]:checked + .check-box::before,
.checkbox-wrapper-19 .check-box.checked::before {
  height: calc(var(--checkbox-height) * 1.2);
  -moz-animation: dothatopcheck-19 0.4s ease 0s forwards;
  -o-animation: dothatopcheck-19 0.4s ease 0s forwards;
  -webkit-animation: dothatopcheck-19 0.4s ease 0s forwards;
  animation: dothatopcheck-19 0.4s ease 0s forwards;
}
`;
