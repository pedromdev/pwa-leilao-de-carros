import React from 'react';
import {Container} from "../components/Container";
import {useAuctions} from "../hooks/useAuctions";
import {AuctionItem} from "../components/Auctions/AuctionItem";
import {Row} from "../components/Row";
import {Col} from "../components/Col";

export const AuctionsContainer = () => {
  const {loading, auctions, addBil} = useAuctions();

  return (
    <Container>
      {loading && 'Carregando...'}
      {!loading && (
        <Row>
          {auctions.map(auction => (
            <Col key={auction.id} cols={4}>
              <AuctionItem data={auction} onAddBil={() => addBil(auction.id)}/>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};
