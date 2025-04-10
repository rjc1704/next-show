export default function AboutLayout({ children }) {
  // 권한여유 점검해서
  // 권한없으면 홈으로 리다이렉트
  // 권한있으면 통과
  return (
    <div>
      AboutLayout
      {children}
    </div>
  );
}
