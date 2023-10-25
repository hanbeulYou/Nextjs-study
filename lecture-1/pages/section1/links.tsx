import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Links() {
  const router = useRouter();
  useEffect(() => {
    router.prefetch('/section1/getStaticProps');
  }, [router]);

  return (
    <main>
      <h1>Links</h1>
      <button
        onClick={() => {
          router.push('/section1/getStaticProps');
        }}
      >
        /getStaticProps
      </button>
      {/* <div style={{ height: '200vh' }} /> */}

      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      {/*<a href="/section1/getStaticProps">/getStaticProps</a>*/}

      {/* <Link href="/section1/getStaticProps" style={{ color: 'red' }}>
        /getStaticProps
      </Link> */}
      {/** https://github.com/vercel/next.js/blob/canary/packages/next/client/link.tsx#L487 */}
    </main>
  );
}

// Link를 활용하면 해당 페이지의 정보를 미리 받아와 CSR 방식으로 라우팅
// 해당 파일을 lazy 하게 받아옴
// Link가 a tag를 완전히 대체(13 버전 이후)
