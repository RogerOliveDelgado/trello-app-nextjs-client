type Options = {
  method: string;
  headers: {
    "Content-Type": string;
  };
  body: string;
};

export const createBoardReq = async (requestOptions: Options) => {
  const req = await fetch("http://localhost:4000/board", requestOptions);
  const res = await req.json();
};
