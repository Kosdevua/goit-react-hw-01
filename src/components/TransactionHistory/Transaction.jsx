import s from "./TransactionHistory.module.css";
const Transaction = ({ type, amount, currency }) => {
  return (
    <>
      <td className={s.capitalize}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};

export default Transaction;
