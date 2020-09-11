const { useRef } = React;

export default function NewCustomerForm({ handleNewCustomer }) {
  const name = useRef();
  const email = useRef();
  const phone = useRef();

  return (
    <div className="customers-form">
      <div className="input-cnt">
        <div>Name</div>
        <input
          ref={name}
          className="input"
          id="name"
          type="text"
          placeholder="Enter name of customer"
        />
      </div>

      <div className="input-cnt">
        <div>Email</div>
        <input
          ref={email}
          className="input"
          type="text"
          id="email"
          placeholder="Enter email"
        />
      </div>

      <div className="input-cnt">
        <div>Phone No.</div>
        <input
          ref={phone}
          className="input"
          type="number"
          id="phone"
          placeholder="Enter phone no."
        />
      </div>
      <div>
        <button
          className="customers-add-btn"
          onClick={() =>
            handleNewCustomer(
              name.current.value,
              email.current.value,
              phone.current.value
            )
          }
        >
          Add Customer
        </button>
      </div>
    </div>
  );
}
