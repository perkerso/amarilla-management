export default function Payment() {
  return (
    <>
      <header>Payment Page</header>
      <main>
        <h1>Make a Payment</h1>
        <p>Secure payment options via Stripe and Revolut will be available here.</p>
        <button onClick={() => alert("Stripe Checkout Placeholder")}>Pay with Stripe</button>
        <button onClick={() => alert("Revolut Checkout Placeholder")}>Pay with Revolut</button>
      </main>
    </>
  )
}
