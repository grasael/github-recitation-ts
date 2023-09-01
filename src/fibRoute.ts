// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

interface ReqType {
  params : ParamsType
}

interface ParamsType {
  num : string
}

export default (req : ReqType, res : XMLHttpRequest) => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
