type Options = {
    method: string;
    headers: {
      "Content-Type": string;
    };
    body: string;
  };
  
  export const createTaskReq = async (requestOptions: Options) => {
    const req = await fetch(
      "https://trello-app-express-server.vercel.app/task",
      requestOptions
    );
    const res = await req.json();
  
    console.log(res);
  
    return res;
  };