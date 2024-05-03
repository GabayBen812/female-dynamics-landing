import '../CssFiles/Payment.css';


const Payment = () => {

    const handleConfirmation = () => {
        window.location.href = "https://pay.sumit.co.il/6qhgyh/6r1inb/6r1inc/payment/";
    }

    return (
        <div className='alertContainer'>
            <div className='alertSubContainer'>
            <h1>מעבר לקניית הקורס</h1>
            <p>לאחר הרכישה, יש לשמור את מספר האסמכתא ולהיכנס לקישור הבא:</p>
            <a href='https://female-dynamics.netlify.app'>https://female-dynamics.netlify.app</a>

            <br />
            <button onClick={handleConfirmation}>לתשלום</button>
            </div>
        </div>
    );
};

export default Payment;