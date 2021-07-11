import Card from "./Card";

const Home = () => {
  return (
    <div className="container my-2">
      <h3 className="text-center py-4">React with Redux Labs</h3>
      <div className="row">
        <div className="col-sm-6 col-xs-12 p-2 d-flex justify-content-center">
          <Card
            title="Wallet"
            image="/money-wallet.jpg"
            buttonText="Deposit/Withdraw Money"
            buttonLink="/wallet"
          />
        </div>
        <div className="col-sm-6 col-xs-12 p-2 d-flex justify-content-center">
          <Card
            title="Playlist"
            image="/headphone.jpg"
            buttonText="Add/Remove Songs"
            buttonLink="/playlist"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;