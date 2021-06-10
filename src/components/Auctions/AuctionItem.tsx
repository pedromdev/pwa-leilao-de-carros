import {Auction} from "../../types";
import {countdown} from "../../helpers/countdown";

const kmFormatter = Intl.NumberFormat('pt-BR', {
  style: 'unit',
  unit: 'kilometer'
});

const brlFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});


export const AuctionItem = (props: {data: Auction, onAddBil: () => void}) => {
  const amount = props.data.bids.length === 0 ? 0 : props.data.bids[props.data.bids.length - 1].amount;

  return (
    <section className="ic-auction-item">
      <a href="#" className="ic-ai-header">
        <img src={props.data.imageUrl}
             alt={`${props.data.make} ${props.data.model} ${props.data.version} ${props.data.year}`}/>
        <span>ver detalhes</span>
      </a>
      <div className="ic-ai-content">
        <div className="ic-ai-top-row">
          <div className="ic-ai-cell left">
            <small>TEMPO RESTANTE</small>
            {countdown(Date.now() + props.data.remainingTime)}
          </div>
          <div className="ic-ai-cell right">
            <small>ÚLTIMA OFERTA</small>
            {brlFormatter.format(amount).replace(',00', '')}
          </div>
        </div>
        <div className="ic-ai-middle-row">
          <div className="ic-ai-cell">
            {props.data.make}
            {props.data.model}
            {props.data.version}
            {props.data.year}
          </div>
        </div>
        <div className="ic-ai-bottom-row">
          <div className="ic-ai-cell">{props.data.year}</div>
          <div className="ic-ai-cell">
            {kmFormatter.format(props.data.km)}
          </div>
        </div>
        <button
          className="ic-ai-add-bil"
          type="button"
          onClick={() => props.onAddBil()}
        >FAZER OFERTA
        </button>
      </div>
    </section>
  );
};
