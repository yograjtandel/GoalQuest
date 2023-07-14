import axios from 'axios';

const action = async (args) => {
  // header : (true/false) for send request without header
  const { method, url, data } = args;
  const header = Object.keys(args).includes('header') ? args.header : true;
  let config = {};
  config = {
    method: method,
    url: `${process.env.NODE_BASE_URL || process.env.NEXT_PUBLIC_NODE_BASE_URL}${url}`,
  };
  if (header) {
    config = {
      ...config,
      headers: {
        'content-type': 'application/json',
      },
    };
  }
  if (Object.keys(args).includes('data')) {
    config = {
      ...config,
      data: data,
    };
  }
  const res = await axios(config)
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      return { data: { error: error } };
    });
  return res;
};

export default action;
