import { Session, getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { ComponentType } from 'react';
import { options } from './options';

export interface AuthProps {
  session: Session;
}

// Higher order component
function withAuth(Component: ComponentType<AuthProps>) {
  return async function wrapped(props: AuthProps) {
    const session = await getServerSession(options);
    if (!session) {
      return redirect('/api/auth/signin?callbackUrl=/');
    }

    return <Component {...props} session={session} />;
  };
}

export default withAuth;
