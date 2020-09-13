const { useRef } = React;

export default function NewCustomerForm({ handleSubRouteChange }) {
  const name = useRef();
  const email = useRef();
  const phone = useRef();

  const handleNewCustomer = (e, name, email, phone) => {
    e.preventDefault();
    const url = "https://rzp-training.herokuapp.com/team1/customers";

    const data = {
      name,
      email,
      contact: phone,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          alert(
            "Something went wrong. Server responded with status " + res.status
          );
        }
      })
      .then((r) => {
        if (r) {
          alert("New customer created");
          handleSubRouteChange("list");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <form
      className="customers-form"
      onSubmit={(e) =>
        handleNewCustomer(
          e,
          name.current.value,
          email.current.value,
          phone.current.value
        )
      }
    >
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
        <button className="customers-add-btn">Add Customer</button>
      </div>
    </form>
  );
}
