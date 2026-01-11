import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'React Study',
    Svg: require('@site/static/img/react_logo.svg').default,
    description: (
      <>
        コンポーネント、Hooks、State管理など、<br/>モダンなReact開発の基礎を体系的に学びます。<br/>React v19系。<br/>2026年1月の最新系が基準。<br/>
      </>
    ),
    link: '/docs/react-study/react_index',
  },
  {
    title: 'Next Study',
    Svg: require('@site/static/img/nextjs_logo.svg').default,
    description: (
      <>
        App Router、Server Actions、SSR/SSGなど、<br/>Next.jsによるフルスタック開発を習得します。<br/>Next.js v16系。<br/>2026年1月の最新系が基準。<br/>
      </>
    ),
    link: '/docs/next-study/next_index',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Link to={link}>
          <Svg className={styles.featureSvg} role="img" />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
