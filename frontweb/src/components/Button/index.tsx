import './styles.css';

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <>
      <div className="btn-normal-container">
        <button className="btn-normal bg-warning">
          <h6>{text}</h6>
        </button>
      </div>
    </>
  );
};

export default Button;
