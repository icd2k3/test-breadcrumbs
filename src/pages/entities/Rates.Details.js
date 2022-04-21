import { useParams, Link as RouterLink } from "react-router-dom";
import { rates } from "./Rates.List";

const RatesDetails = () => {
  let { id } = useParams();
  const rate = rates.find((rate) => rate.id === parseInt(id));
  console.log(rate);
  return (
    <>
      <h2>Rate details: # {id}</h2>
      <p>
        ID: {rate.id}
      </p>
      <p>
        Value: {rate.value}
      </p>
    </>
  );
};

export default RatesDetails;
