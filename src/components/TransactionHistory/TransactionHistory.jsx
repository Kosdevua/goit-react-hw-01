import Transaction from "./Transaction";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.headTable}>
      <thead>
        <tr className={s.headTableRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={s.bodyTable}>
        {items.map((item) => {
          return (
            <tr className={s.rowTable} key={item.id}>
              <Transaction
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
