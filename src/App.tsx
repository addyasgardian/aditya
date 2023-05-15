import { useRef, useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [contract, SetIsContract] = useState<{
    date: string;
    ContractDeatils: {
      Seller: string;
      Buyer: string;
    };
  }>();
  const [Signed, IsSigned] = useState(false);

  const UserEnteredSellerName = useRef<HTMLInputElement>(null);
  const UserEnteredBuyerName = useRef<HTMLInputElement | any>(null);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const obj: { Seller: string; Buyer: string } = {
      Seller: UserEnteredSellerName.current!.value,
      Buyer: UserEnteredBuyerName.current?.value,
    };

    const res = await axios.post("http://localhost:5000/form/postdata", obj);
    const data = res.data;
    SetIsContract(data);
    IsSigned(!Signed);

    UserEnteredSellerName.current!.value = " ";
    UserEnteredSellerName.current!.value = " ";
  };

  return (
    <>
      {!Signed && (
        <>
          <h1 className="display-5 text-center m-5">CONTRACT SIGN</h1>
          <form
            onSubmit={onSubmitHandler}
            className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center flex-column border border-warning-subtle p-3 text-center fw-bolder rounded bg-warning"
          >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Seller Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                ref={UserEnteredSellerName}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Buyer Name
              </label>
              <input
                ref={UserEnteredBuyerName}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                required
              />
              <label className="form-check-label">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary text-center w-10">
              SIGN CONTRACT
            </button>
          </form>
        </>
      )}
      {Signed && (
        <>
          <h1>
            The Contreact Signed Between{" "}
            {`${contract!.ContractDeatils.Seller} and ${
              contract!.ContractDeatils.Buyer
            } on ${contract!.date}`}
          </h1>
        </>
      )}
    </>
  );
}

export default App;
