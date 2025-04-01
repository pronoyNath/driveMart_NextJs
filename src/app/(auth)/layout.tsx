interface IAuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: IAuthLayoutProps) => {
  return <div className="flex justify-center py-40">{children}</div>;
};

export default AuthLayout;
