
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function AdCard({
  userFullName,
  userAddress,
  description,
  ad_id,
  images,
  article,
  onAdInfoClick,
}) {
  const infoClickHandler = () => {
    window.scrollTo(0, 0);
    onAdInfoClick(ad_id);
  };
  return (
    <>
      {/* <Card
        style={{
          width: "18rem",
          marginLeft: "5%",
          marginTop: "3%",
          marginBottom: "3%",
        }}
      >
        <Card.Body>
          <Card.Title>{userFullName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {userAddress}
          </Card.Subtitle>
          <Card.Text>{dayForDelivery}</Card.Text>
          <button onClick={infoClickHandler}>Order Info</button>
        </Card.Body>
      </Card> */}


<Card  onClick={infoClickHandler} style={{
          width: "18rem",
          marginLeft: "5%",
          marginTop: "3%",
          marginBottom: "3%",
        }}>
            <Card.Img  src={images} style={{width:'287px', height:'280px'}} />
            <Card.Body >
              <Card.Title>{article}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
            {userFullName}
          </Card.Subtitle>
              <Card.Text>
               {userAddress}
              </Card.Text>
              
            </Card.Body>
          </Card>
    </>
  );
}

export default AdCard;
