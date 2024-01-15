import PropTypes from 'prop-types';
import statisticsStyles from './Statistics.module.css';

const Statistics = ({ stats, title }) => {
  return (
    <section className={statisticsStyles.statistics}>
      <h2 className={statisticsStyles.title}>{title}</h2>
      <ul className={statisticsStyles.list}>
        {stats.map(statistic => (
          <li key={statistic.id} className={statisticsStyles.item}>
            <span className={statisticsStyles.label}>{statistic.label}</span>
            <span className={statisticsStyles.percentage}>
              {statistic.percentage}&#37;
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
