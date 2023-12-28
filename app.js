
const App = () => {

    const [transaction,setTransaction] = React.useState(0);
    const [money,setMoney] = React.useState(0);
    const [move,setMove] = React.useState("")

    const handleDeposit = () => {
        let newMoney = Number(transaction) + money;
        alert(`The acount has $${newMoney}`)
        setMoney(newMoney);
        setMove("Deposit")
        console.log('Account Rendered');
    }   

    const handleCashBack = () => {
        let newMoney = money - Number(transaction);
        alert(`The acount has $${newMoney}`)
        setMoney(newMoney);
        setMove("CashBack")
        console.log('Account Rendered');
    }   

    const handleChange = ({target:{value}}) =>{
        console.log(value);
        setTransaction(value);
    }
    

    return (
        <>
        <h1>ATM Exercise</h1>
            <h2>{move}</h2>
            <input type="number" placeholder="Deposit" onChange = {handleChange}></input>
            <button onClick={handleDeposit}>Deposit</button>
            <button onClick={handleCashBack}>CashBack</button>
        
        <h2>Account Balance ${money}</h2>
        </>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"));