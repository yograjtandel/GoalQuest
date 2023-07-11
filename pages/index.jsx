import Action from '@/src/helper/action';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {

async function signup() {
    debugger
  const auth0Response = await fetch(
    `https://dev-c0a3javl4d5ua32y.us.auth0.com/dbconnections/signup`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        client_id: "4z8QNi1ATEjLsRiK5XJORcO2xif7ffmn",
        connection: 'Username-Password-Authentication',
        email: "new@new.com",
        password: "New@1234",
      }),
    }
  )
  const body = await auth0Response.json()
  debugger

  const res = await Action({
    method: 'post',
    url: '/v1/users/',
    data: {
        email:"new@new.com",
        role: "6497ca904ff8285535f7711c",
        name:"new"
    }
  });
  debugger

  
}
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }


  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      <button
        onClick={() =>
          signIn(
            'auth0',
            { callbackUrl: 'http://localhost:3000' },
            { screen_hint: 'signup' }
          )
        }
      >
        Sign up
      </button>

      <button onClick={() => signup()}>test sign up</button>

    </>
  );
}