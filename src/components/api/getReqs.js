export async function getItems(signal){
    const r=await fetch("https://rzp-training.herokuapp.com/team1/items", { signal })
    .then((res) => res.json());
    return r;   
}

export async function getCustomers(signal){
    const r=await fetch("https://rzp-training.herokuapp.com/team1/customers", { signal })
    .then((res) => res.json());
    return r;
}