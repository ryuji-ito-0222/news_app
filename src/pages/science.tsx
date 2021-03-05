import { fetchData } from 'api';
import { GetStaticProps } from 'next';
import React from 'react';
import { Data } from 'types';

import Layout from '../components/Layout';

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchData('science');

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};

type Props = {
  data: Data;
};

const Sports: React.FC<Props> = ({ data }) => <Layout isSciencePage data={data} />;

export default Sports;
