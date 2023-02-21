import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  let body;
  return uploadPhoto()
    .then((res) => {
      body = res.body;
      return createUser();
    })
    .then((res) => console.log(`${body} ${res.firstName} ${res.lastName}`))
    .catch(() => console.log('Signup system offline'));
}
