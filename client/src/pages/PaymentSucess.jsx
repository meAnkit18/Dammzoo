import React from 'react'
import { useLocation } from 'react-router-dom'




function PaymentSucess() {

    const query = new URLSearchParams(useLocation().search)
    const reference = query.get("refernce")
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center border border-green-200">
        <div className="text-green-600 text-4xl font-bold">✔</div>
        <h1 className="text-2xl font-bold text-green-700 mt-4">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mt-2">
          Thank you for your payment. A confirmation email has been sent.
        </p>
        {
            reference && (
                <p>Refernce ID: <strong>{reference}</strong></p>
            )
        }
        <div className="mt-6">
          <a
            href="/"
            className="inline-block px-6 py-2 rounded-xl bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition-all"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    </div>
  )
}

export default PaymentSucess
