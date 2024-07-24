import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Jan Hunar',
      image:
        'https://media.licdn.com/dms/image/D4D22AQFIFE5dSBS9hA/feedshare-shrink_800/0/1707257486468?e=2147483647&v=beta&t=KnOGJ1q259znEWi7B-PdbE_pjVrj94DTxr6GUcz9bJA',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
