import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Four Lines of Code',
    Svg: require('@site/static/img/code-icon.svg').default,
    description: (
      <>
        Plato was designed to be as easy to use as possible. Upload your data
        and have a retrieval-augmented generation (RAG) model up-and-running
        in four lines of code.
      </>
    ),
  },
  {
    title: "10x the Industry's Best",
    Svg: require('@site/static/img/lightbulb.svg').default,
    description: (
      <>
        Our RAG algorithms were invented by professors and computer scientists
        at Carnegie Mellon. Our attention span, quality, and accuracy are vastly
        superior to the industry's best - LlamaIndex, LangChain, you name it.
      </>
    ),
  },
  {
    title: 'Free',
    Svg: require('@site/static/img/money.svg').default,
    description: (
      <>
        The first tier of our system is free to use. Upload your documents and
        make queries at zero cost. We only charge for our premium tiers.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
