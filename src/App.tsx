import { useRef, useState } from "react";
import axios from "axios";

function App() {
  const [contract, SetIsContract] = useState("Contract Signed Pending");
  const [Signed, IsSigned] = useState(false);

  const UserEnteredName = useRef<HTMLInputElement>(null);
  const UserEnteredAddress = useRef<HTMLInputElement | any>(null);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const obj: { name: string; address: string } = {
      name: UserEnteredName.current!.value,
      address: UserEnteredAddress.current?.value,
    };

    const res = await axios.post("http://localhost:5000/form/postdata", obj);
    SetIsContract(res.data);
    IsSigned(!Signed);

    UserEnteredName.current!.value = " ";
    UserEnteredAddress.current!.value = " ";
  };

  return (
    <>
      {!Signed && (
        <>
          <h1 className="display-5 text-center m-5">ZOHO WRITER</h1>
          <form
            onSubmit={onSubmitHandler}
            className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center flex-column border border-warning-subtle p-3 text-center fw-bolder rounded bg-warning"
          >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                ref={UserEnteredName}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Address
              </label>
              <input
                ref={UserEnteredAddress}
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
          <h1>{contract}</h1>
        </>
      )}
    </>
  );
}

export default App;
