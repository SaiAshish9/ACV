import { HomeScreen } from "./screens";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>
          Online Car Auction | Auto Dealer Vehicle Auctions | ACV Auctions
        </title>
      </Helmet>
      <HomeScreen />
    </>
  );
}

export default App;
