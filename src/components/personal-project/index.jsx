import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ga, skeleton } from '../../helpers/utils';

const displaySection = (personalProjects) => {
  return (
    personalProjects &&
    Array.isArray(personalProjects) &&
    personalProjects.length > 0
  );
};

const PersonalProject = ({ personalProjects, loading, googleAnalytics }) => {
  const renderSkeleton = () => {
    return personalProjects.map((_, index) => (
      <div className="card shadow-lg compact bg-base-100" key={index}>
        <div className="card-body">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h2>
                {skeleton({ width: 'w-32', height: 'h-6', className: 'mb-2' })}
              </h2>
              {skeleton({ width: 'w-full', height: 'h-4', className: 'mb-1' })}
              {skeleton({ width: 'w-3/4', height: 'h-4' })}
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const renderPersonalProjects = () => {
    return personalProjects.map((item, index) => (
      <a
        className="card shadow-lg compact bg-base-100 cursor-pointer"
        key={index}
        href={item.link}
        onClick={(e) => {
          e.preventDefault();
          try {
            if (googleAnalytics?.id) {
              ga.event({
                action: 'Click Personal Project',
                params: { post: item.title },
              });
            }
          } catch (error) {
            console.error(error);
          }
          window?.open(item.link, '_blank');
        }}
      >
        <div className="card-body">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h2 className="font-semibold text-lg tracking-wide opacity-70 mb-1">
                {item.title}
              </h2>
              <p className="text-base-content text-opacity-60 text-sm mb-2">
                {item.description}
              </p>
              <span className="text-primary text-xs truncate block">
                {item.link}
              </span>
            </div>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      {displaySection(personalProjects) && (
        <div className="col-span-1 lg:col-span-2">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <div className="card compact bg-base-100 shadow bg-opacity-40">
                <div className="card-body">
                  <div className="mx-3 flex items-center justify-between mb-2">
                    <h5 className="card-title">
                      {loading ? (
                        skeleton({ width: 'w-40', height: 'h-8' })
                      ) : (
                        <span className="text-base-content opacity-70">
                          My Personal Projects
                        </span>
                      )}
                    </h5>
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-cols-1 gap-6">
                      {loading ? renderSkeleton() : renderPersonalProjects()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

PersonalProject.propTypes = {
  personalProjects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
  loading: PropTypes.bool.isRequired,
  googleAnalytics: PropTypes.object,
};

export default PersonalProject;
