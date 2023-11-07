import React from 'react'
import transactionData from '../server/transactions.json'
import userData from '../server/users.json'
import eventData from '../server/events.json'
import referralData from '../server/referral_codes.json'



const getTransactionDetail = () => {
    // const transaction = transactionData.transaction.find(item => item.id === 1);
    // const user = userData
    return transactionData.transaction.find(item => item.id === 1);
}

export default getTransactionDetail;
