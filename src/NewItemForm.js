const { useRef } = React;

export default function NewItemForm({ handleSubRouteChange }) {
  const name = useRef();
  const amount = useRef();
  const description = useRef();

  const handleNewItem = (e, name, amount, description) => {
    e.preventDefault();

    const url = "https://rzp-training.herokuapp.com/team1/items";

    const data = {
      name,
      amount,
      description,
      currency: "INR",
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
          alert("New item created");
          handleSubRouteChange("list");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <form
      className="items-form"
      onSubmit={(e) =>
        handleNewItem(
          e,
          name.current.value,
          amount.current.value,
          description.current.value
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
          placeholder="Enter name of item"
        />
      </div>

      <div className="input-cnt">
        <div>Amount</div>
        <input
          ref={amount}
          className="input"
          type="number"
          id="amount"
          placeholder="Enter amount"
        />
      </div>

      <div className="input-cnt">
        <div>Description</div>
        <textarea
          ref={description}
          className="textarea"
          id="description"
          placeholder="Add description"
          rows="4"
        ></textarea>
      </div>
      <div>
        <button className="items-add-btn">Add Item</button>
      </div>
    </form>
  );
}
