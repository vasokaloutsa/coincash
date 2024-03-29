import { Button } from "../styles/Button.styled";
import { InputField } from "../styles/Input.styled";

const BasicInputFieldWithButton = ({ actionUrl, id, children }) => {
  const style = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    maxwidth: "430px",
    padding: "8px 8px 8px 12px",
    borderRadius: "8px",
    border: "none",
    margin: "0 auto",
  };
  return (
    <div style={style}>
      <form action={actionUrl}>
        <InputField type="text" id={id} name="fname" placeholder={children} />
      </form>
      <Button onClick={() => alert("HI")}>Sign up</Button>
    </div>
  );
};

export default BasicInputFieldWithButton;
