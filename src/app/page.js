import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8 text-center">
        <Link href="/about">
          <h1 className="bg-green-300 text-[24px] font-bold text-red-500">
            어바웃으로 가자
          </h1>
        </Link>
        <p className="text-gray-600 mt-2">
          웹 개발에 자주 사용되는 테일윈드 CSS 클래스 모음
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        {/* 텍스트 스타일링 섹션 */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-bold mb-4 text-blue-800 border-b pb-2">
            텍스트 스타일링
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">크기</h3>
              <p className="text-xs mb-1">text-xs: 아주 작은 텍스트</p>
              <p className="text-sm mb-1">text-sm: 작은 텍스트</p>
              <p className="text-base mb-1">text-base: 기본 텍스트</p>
              <p className="text-lg mb-1">text-lg: 큰 텍스트</p>
              <p className="text-xl mb-1">text-xl: 더 큰 텍스트</p>
              <p className="text-2xl">text-2xl: 매우 큰 텍스트</p>
              <p className="text-[24px]">text-[24px]: 직접 크기 지정</p>
            </div>

            <div>
              <h3 className="font-medium mb-2">스타일</h3>
              <p className="font-bold mb-1">font-bold: 굵은 텍스트</p>
              <p className="italic mb-1">italic: 이탤릭체</p>
              <p className="underline mb-1">underline: 밑줄</p>
              <p className="line-through mb-1">line-through: 취소선</p>
              <p className="text-center mb-1">text-center: 가운데 정렬</p>
              <p className="text-right">text-right: 오른쪽 정렬</p>
            </div>
          </div>
        </section>

        {/* 색상 섹션 */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-bold mb-4 text-blue-800 border-b pb-2">
            색상
          </h2>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-red-500 text-white p-3 rounded">bg-red-500</div>
            <div className="bg-blue-500 text-white p-3 rounded">
              bg-blue-500
            </div>
            <div className="bg-green-500 text-white p-3 rounded">
              bg-green-500
            </div>
            <div className="bg-yellow-500 text-white p-3 rounded">
              bg-yellow-500
            </div>
            <div className="bg-purple-500 text-white p-3 rounded">
              bg-purple-500
            </div>
            <div className="bg-gray-500 text-white p-3 rounded">
              bg-gray-500
            </div>
            <div className="bg-white text-black p-3 rounded border">
              bg-white
            </div>
            <div className="bg-black text-white p-3 rounded">bg-black</div>
            <div className="bg-gray-200 text-black p-3 rounded">
              bg-gray-200
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="text-red-500 p-2 border rounded">text-red-500</div>
            <div className="text-blue-500 p-2 border rounded">
              text-blue-500
            </div>
            <div className="text-green-500 p-2 border rounded">
              text-green-500
            </div>
          </div>
        </section>

        {/* 레이아웃 섹션 */}
        <section className="bg-white p-[12px] rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-bold mb-4 text-blue-800 border-b pb-2">
            레이아웃
          </h2>

          <div className="mb-4">
            <h3 className="font-medium mb-2">여백 (margin & padding)</h3>
            <div className="flex gap-4">
              <div className="border-2 border-red-300 p-4">p-4 (패딩)</div>
              <div className="border-2 border-blue-300 m-4">m-4 (마진)</div>
              <div className="border-2 border-green-300 px-8 py-2">
                px-8 py-2
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium m-[24px] mb-2">플렉스박스</h3>
            <div className="flex gap-[12px] mb-2 border p-2">
              <div className="bg-blue-200 p-2">flex</div>
              <div className="bg-blue-200 p-2">아이템 1</div>
              <div className="bg-blue-200 p-2">아이템 2</div>
            </div>
            <div className="flex justify-between border p-2 mb-2">
              <div className="bg-green-200 p-2">justify-between</div>
              <div className="bg-green-200 p-2">양 끝 정렬</div>
            </div>
            <div className="flex items-center border p-2">
              <div className="bg-purple-200 p-2 h-16">items-center</div>
              <div className="bg-purple-200 p-2">수직 가운데 정렬</div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-medium mb-2">그리드</h3>
            <div className="grid grid-cols-4 gap-3 mb-3 border p-2">
              <div className="bg-indigo-200 p-2 text-center">1</div>
              <div className="bg-indigo-200 p-2 text-center">2</div>
              <div className="bg-indigo-200 p-2 text-center">3</div>
              <div className="bg-indigo-200 p-2 text-center">4</div>
              <div className="bg-indigo-200 p-2 text-center">5</div>
              <div className="bg-indigo-200 p-2 text-center">6</div>
            </div>
            <div className="grid grid-cols-4 gap-2 mb-3 border p-2">
              <div className="bg-pink-200 p-2 text-center col-span-2">
                col-span-2
              </div>
              <div className="bg-pink-200 p-2 text-center">기본</div>
              <div className="bg-pink-200 p-2 text-center">기본</div>
              <div className="bg-pink-200 p-2 text-center">기본</div>
              <div className="bg-pink-200 p-2 text-center col-span-3">
                col-span-3
              </div>
            </div>
          </div>
        </section>

        {/* 버튼 및 카드 컴포넌트 */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-blue-800 border-b pb-2">
            컴포넌트 예시
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3">버튼</h3>
              <button className="btn-primary">기본 버튼</button>
              <button className="bg-white text-blue-600 px-4 py-2 rounded border border-blue-600 mb-2 w-full">
                외곽선 버튼
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors w-full">
                호버 효과
              </button>
            </div>

            <div>
              <h3 className="font-medium mb-3">카드</h3>
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-gray-200 h-24 flex items-center justify-center">
                  <span className="text-gray-500">이미지 영역</span>
                </div>
                <div className="p-4">
                  <h4 className="font-bold mb-1">카드 제목</h4>
                  <p className="text-sm text-gray-600">
                    카드에 대한 설명 텍스트입니다.
                  </p>
                  <button className="mt-3 text-sm text-blue-600">
                    자세히 보기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
