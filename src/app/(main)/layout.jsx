export default function MainLayout({ children }) {
  // 쿠키안에서 인증증표를 찾으면 (로그인한거니까) 그대로 진행
  // 인증증표가 없으면, redirect
  return (
    <>
      <header className="bg-green-500">메인 레이아웃 헤더</header>
      {children}
      <footer className="bg-green-500">메인 레잉아웃 푸터</footer>
    </>
  );
}
