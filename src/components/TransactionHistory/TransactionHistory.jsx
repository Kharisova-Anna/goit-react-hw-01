import s from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => { 
    return (
        <table className={s.table}>
            <thead className={s.thead}>
                <tr className={s.tableRow}>
        <th className={s.tableHeader}>Type</th>
        <th className={s.tableHeader}>Amount</th>
        <th className={s.tableHeader}>Currency</th>
    </tr>
        </thead>

        <tbody className={s.tbody}>
            {items.map(({ id, type, amount, currency }) => (<tr key={id} className={s.tableRow}>
                <td className={ `${s.tableData} ${s.tableType}` }>{type}</td>
                <td className={s.tableData}>{amount}</td>
                <td className={s.tableData}>{currency}</td>
            </tr>))}
        </tbody>
</table>
    )
}

export default TransactionHistory