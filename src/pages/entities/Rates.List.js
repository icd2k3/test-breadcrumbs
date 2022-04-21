import { Link as RouterLink } from "react-router-dom";

export const rates = [
  {
    id: 1,
    value: "100"
  },
  {
    id: 2,
    value: "200"
  }, 
  {
    id: 3,
    value: "300"
  }
];

const RatesList = () => {
  return (
    <>
      <h2>All rates</h2>
      <ol className="rates">
        {rates.map((rate) => {
          return (
            <li key={rate.id}>
              <RouterLink to={`/rates/${rate.id}/view`}>Rate {rate.id}: {rate.value}</RouterLink>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default RatesList;
