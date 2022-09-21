import User from '../interfaces/User';

const fs = require('fs');

export const saveDataInJson = (user: User): void => {
  fs.writeFile(
    `./data/${user.email}`,
    JSON.stringify(user),
    (error: unknown) => {
      if (error) {
        console.error('An error has occurred', error);
        return;
      }
      console.log('Data written successfully to disk');
    }
  );
};
