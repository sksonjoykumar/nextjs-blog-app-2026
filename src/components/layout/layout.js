import Header from "../header/Header";

export default function CommonLayout({ children }) {
  const isAuth = false;
  return (
    <>
      <div className="min-h-screen bg-white">
        {isAuth && <Header />}
        {children}
      </div>
    </>
  );
}
