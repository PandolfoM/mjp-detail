import { Text } from "@mantine/core";
import ray from "../../assets/ray.png";
import gti from "../../assets/gti.png";
import "./style.scss";

function Hero() {
  return (
    <div className="hero page">
      <div className="tagline">
        <Text>Where Every</Text>
        <Text>
          <span>Detail Matters</span>,
        </Text>
        <Text>Every Time</Text>
      </div>
      <div className="image">
        <img src={ray} className="ray" />
        <img src={gti} className="gti" />
      </div>
    </div>
  );
}

export default Hero;
