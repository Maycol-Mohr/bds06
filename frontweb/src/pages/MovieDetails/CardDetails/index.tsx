import './styles.css';

type Props = {
  imgUrl?: string;
  nomeFilme?: string;
  anoFilme?: string;
  subNomeFilme?: string;
  synopse?: string;
};
const MovieCardDetails = ({
  imgUrl,
  nomeFilme,
  anoFilme,
  subNomeFilme,
  synopse,
}: Props) => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <img src={imgUrl} alt={nomeFilme} className="img-card-details" />
      </div>
      <div className="info-container-details col-lg-6">
        <h1>{nomeFilme}</h1>
        <h4>{anoFilme}</h4>
        <p>{subNomeFilme}</p>
      </div>
      <div className="info-container-details col-lg-6">
        <p>{synopse}</p>
      </div>
    </div>
  );
};

export default MovieCardDetails;
