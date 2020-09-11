const { useRef } = React;

export default function NewItemForm({ handleNewItem }) {
  const name = useRef();
  const amount = useRef();
  const description = useRef();

  return (
    <div className="items-form">
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
        <button
          className="items-add-btn"
          onClick={() =>
            handleNewItem(
              name.current.value,
              amount.current.value,
              description.current.value
            )
          }
        >
          Add Item
        </button>
      </div>
    </div>
  );
}
