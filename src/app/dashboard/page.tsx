import withAuth, { AuthProps } from '../api/auth/[...nextauth]/auth';

interface DashboardProps extends AuthProps {}

// Wrap the Page component with the withAuth HOC

async function Dashboard({ session }: DashboardProps) {
  console.log(session);
  return <div>{JSON.stringify(session)}</div>;
}
export default withAuth(Dashboard);
