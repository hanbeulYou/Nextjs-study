import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
// import { useRouter } from 'next/router';
import type { Store } from '../types/store';
import styles from '../styles/detail.module.scss';
import DetailHeader from '../components/home/DetailHeader';
import DetailContent from '../components/home/DetailContent';
import { useRouter } from 'next/router';
import useCurrentStore from '@/hooks/useCurrentStore';

interface Props {
  store: Store;
}

const StoreDetail: NextPage<Props> = ({ store }) => {
  const router = useRouter();
  const { setCurrentStore } = useCurrentStore();

  const goToMap = () => {
    setCurrentStore(store);
    router.push(`
      /?zoom=15&lat=${store.coordinates[0]}&lng=${store.coordinates[1]}
    `);
  };
  // if (router.isFallback) {
  //   return <div>Loading...</div>;
  // }
  const expanded = true;

  return (
    <div className={`${styles.detailSection} ${styles.expanded}`}>
      <DetailHeader
        currentStore={store}
        expanded={expanded}
        onClickArrow={goToMap}
      />
      <DetailContent currentStore={store} expanded={expanded} />
    </div>
  );
};
export default StoreDetail;

/** https://nextjs.org/docs/basic-features/data-fetching/get-static-paths */
export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import('../public/stores.json')).default;
  // 모든 store.name에 대한 경로 생성
  const paths = stores.map((store) => ({ params: { name: store.name } }));

  // fallback: true일 경우 모든 것을 프리렌더링 X, 접근할 때 경로 생성
  // 빌드 이후 db에 새로 추가 -> 접근할때 경로 추가
  // blocking : 등록되지 않은 url 접근시 우선 getStaticPaths 이후 404로 이동(가만히 기다림)
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stores = (await import('../public/stores.json')).default;
  const store = stores.find((store) => store.name === params?.name);

  // fallback이 true가 아닐때
  // if (!store) {
  //   return {
  //     notFound: true,
  //   };
  // }

  // 해당 매장의 정보 props로 전달
  return { props: { store } };
};

// path는 props와 반드시 함께 사용
// name 값에 대한 정보만 경로가 생성됨(없으면 404)
