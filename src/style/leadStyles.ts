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
    line-height: 16px;
    color: #344054;

    display: flex;
    align-items: flex-start;
    gap: 4px;
}
.modal-lead .agree-wrapper > input {
    border-radius: 1px;
    background-color: #f3914d;
    margin-top: 4px;
}
`;
