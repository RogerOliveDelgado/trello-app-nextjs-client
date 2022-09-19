export const checkResponse = (response: any) => {
  if (response.status) {
    console.error(response.message);
  } else if (response.role === 'User') {
    return '/userDashboard';
  } else {
    return '/adminDashboard';
  }
};
