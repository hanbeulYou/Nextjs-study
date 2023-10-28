import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { Store } from '../types/store';

interface Props {
  store: Store;
}

const StoreDetail: NextPage<Props> = ({ store }) => {
  return <div>name: {store.name}</div>;
};
export default StoreDetail;

/** https://nextjs.org/docs/basic-features/data-fetching/get-static-paths */
export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import('../public/stores.json')).default;
  // 모든 store.name에 대한 경로 생성
  const paths = stores.map((store) => ({ params: { name: store.name } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stores = (await import('../public/stores.json')).default;
  const store = stores.find((store) => store.name === params?.name);

  return { props: { store } };
};

// path는 props와 반드시 함께 사용
// name 값에 대한 정보만 경로가 생성됨(없으면 404)
