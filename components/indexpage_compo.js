import { signIn, signOut, useSession } from "next-auth/client";
import {Button} from 'react-bootstrap'

export default function Indexpage_compo() {

           
  const [session, loading] = useSession();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
            <div>
                <span>Hello, {session.user.email ?? session.user.name} </span>
            <Button size="lg"  onClick={() => signOut()}>Sign out</Button>
            </div>
    );
  } else {
    return (
            <div>
                <span>You are not logged in! </span>
            <Button variant="primary" onClick={() => signIn()}>Sign in</Button>
            </div>
    );
  }
};
   
