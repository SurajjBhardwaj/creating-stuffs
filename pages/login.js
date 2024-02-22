

import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
    const { data: session } = useSession();
    console.log(session);
    console.log("hey");
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
      <button onClick={() => signIn("google")}>Sign in with Google</button>
      <button onClick={() => signIn("github")}>Sign in with Github</button>
    </>
  );
}
