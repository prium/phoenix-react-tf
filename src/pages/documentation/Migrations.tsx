import PhoenixDocCard from 'components/base/PhoenixDocCard';
import migrations from 'data/migrations';
import { Link } from 'react-router-dom';

const Migrations = () => {
  return (
    <div>
      <h2 className="mb-4 lh-sm">Migrations</h2>

      {migrations.map(migration => (
        <PhoenixDocCard className="mb-4" key={migration.from}>
          <PhoenixDocCard.Header noPreview>
            <div className="d-flex align-items-center">
              <p className="text-900 text-nowrap mb-0">
                <code className="fs-7 opacity-50">{migration.from}</code>
                <span className="mx-3">to</span>
                <code className="fs-7">{migration.to}</code>
              </p>
              <Link
                to={`#${migration.to}`}
                className="opacity-0 hover-show fw-bold ps-2"
              >
                #
              </Link>
            </div>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <ul className="bullet-inside ps-0">
              <li>
                <h6 className="d-inline-block">Add</h6>
                <ul>
                  {migration.new.map(file => (
                    <li key={file}>{file}</li>
                  ))}
                </ul>
              </li>
              <li>
                <h6 className="d-inline-block">Modify</h6>
                <ul>
                  {migration.update.map(file => (
                    <li key={file}>{file}</li>
                  ))}
                </ul>
              </li>
              <li>
                <h6 className="d-inline-block">Remove</h6>
                <ul>
                  {migration.delete.map(file => (
                    <li key={file}>{file}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
      ))}
    </div>
  );
};

export default Migrations;
