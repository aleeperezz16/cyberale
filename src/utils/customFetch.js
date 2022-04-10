let itsOk = true;

const customFetch = (time, task) => {
  return new Promise((resolve, reject) => {
    if (itsOk) {
      setTimeout(() => {
        resolve(task);
      }, time);
    } else
      reject('Error');
  });
};

export default customFetch;