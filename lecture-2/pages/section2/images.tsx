/** https://nextjs.org/docs/api-reference/next/image */
import type { NextPage } from 'next';
import Image from 'next/image';
import LegacyImage from 'next/legacy/image';
import example from '/public/example.jpg';

const Images: NextPage = () => {
  return (
    <main>
      {/* loading check */}
      <section style={{ height: '500vh' }}>long long content</section>

      <hr style={{ margin: '32px 0' }} />

      {/*<h1>img tag</h1>*/}

      {/*<figure>*/}
      {/*  <img*/}
      {/*    src="https://lecture-1.vercel.app/example.jpg"*/}
      {/*    alt="example"*/}
      {/*    width={500}*/}
      {/*    height={100}*/}
      {/*    https://web.dev/browser-level-image-lazy-loading/ */}
      {/*    // loading="lazy"*/}
      {/*  />*/}
      {/*  <figcaption>example img</figcaption>*/}
      {/*</figure>*/}

      {/*<hr style={{ margin: '32px 0' }} />*/}

      <h1>next/image</h1>

      <figure>
        <Image
          src={example}
          alt="v13 image"
          // width={500}
          // height={100}
          // placeholder="blur"
        />
        <figcaption>v13 image</figcaption>
      </figure>

      <figure>
        <Image
          src="https://lecture-1.vercel.app/example.jpg"
          alt="v13 image"
          width={500}
          height={100}
        />
        <figcaption>v13 image</figcaption>
      </figure>

      {/* ERROR */}
      {/*<figure>*/}
      {/*  <Image src="/example.jpg" alt="v13 image" />*/}
      {/*  <figcaption>v13 image</figcaption>*/}
      {/*</figure>*/}

      <figure style={{ position: 'relative', width: '500px', height: '100px' }}>
        <Image
          src="https://lecture-1.vercel.app/example.jpg"
          alt="v13 fill"
          fill
          style={{ objectFit: 'cover' }}
        />
      </figure>

      <hr style={{ margin: '32px 0' }} />

      <h1>next/legacy/image</h1>

      {/** statically import */}
      <figure>
        <LegacyImage src={example} alt="example image" />
        <figcaption>intrinsic static image</figcaption>
      </figure>

      {/* ERROR */}
      {/*<figure>*/}
      {/*  <Image src="/example.jpg" alt="example" />*/}
      {/*  <figcaption>example image</figcaption>*/}
      {/*</figure>*/}

      {/** path string */}
      <figure>
        <LegacyImage
          src="/example.jpg"
          alt="intrinsic image"
          width={500}
          height={100}
        />
        <figcaption>intrinsic remote image</figcaption>
      </figure>

      <figure>
        <LegacyImage
          src={example}
          alt="fixed image"
          layout="fixed"
          width={500}
          height={100}
        />
        <figcaption>fixed image</figcaption>
      </figure>

      <figure>
        <LegacyImage
          src={example}
          alt="responsive image"
          layout="responsive"
          width={500}
          height={100}
        />
        <figcaption>responsive image</figcaption>
      </figure>

      <figure>
        <div style={{ width: 500, height: 100, position: 'relative' }}>
          <LegacyImage
            src="/example.jpg"
            alt="fill image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <figcaption>fill image</figcaption>
      </figure>

      <hr style={{ margin: '32px 0' }} />
    </main>
  );
};

export default Images;

// loading option을 활용해 lazy-loading 구현 가능
// next/image 사용시 webp 파일로 렌더링하기 때문에 size 감소
// quality option을 활용해 이미지 최적화 조절
// placeholder option을 활용해 이미지 로딩 중 디폴트 이미지(blur 등) 제공
// 외부 이미지를 불러올 경우, width, height 명시 필수
// import 하지 않고 주소로 넣으면 에러 발생
// 외부 이미지의 사이즈를 모를 경우 fill option 활용 - 부모에 의해 결정(position, height, width)
// 외부 이미지 접근 불가능할 경우 있음(보안을 위해 허용된 도메인만 접근) - next.config.js에서 추가해 줄 수 있음(domains, remotePatterns)

// v12는 span tag를 활용해 레이아웃을 스타일링 함(웹 표준 X)
// v12는 화면 크기에 맞게 사이즈가 변경됨
// layout shift 기능, objectFit option 등
