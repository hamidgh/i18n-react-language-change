const restClient = (url: string, options: any) => {
  return fetch(url, options)
    .then(handleFetchSuccess)
    .catch(handleFetchFailure)
}

const handleFetchSuccess = (result: any) => result.json();

const handleFetchFailure = (error: any) => {
  console.log(error);
  return error;
}

export default restClient;