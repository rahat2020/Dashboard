import style from './Dashboard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faHeart, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { Link, useRouteMatch } from 'react-router-dom';
import RouteDiv from './RouteDiv/RouteDiv';
function App() {
  let { url } = useRouteMatch();
  return (
    <section className="" id={style.dashboard}>
      <div className="row">
        <div className="col-md-3" id={style.colLeft}>
          <div className="container">
            <Link to="/dashboard/manage-user"> <h3 id={style.logo}>shopKpr</h3></Link>
          </div>

          <div className="container mt-4 pt-4">
            <ul className={style.list}>
              <li>
                <Link to={`${url}/manage-user`}>
                  <div className="d-flex align-items-center" id={style.admin}>
                    <FontAwesomeIcon icon={faUsers} className="side-icon" />
                    <span>Admin</span>
                  </div>
                </Link>
                <Link to="/manage-user">
                  <div className="d-flex align-items-center" id={style.products}>
                    <FontAwesomeIcon icon={faHeart} className="side-icon" />
                    <span>Products</span>
                  </div>
                </Link>
                <Link to="/manage-user">
                  <div className="d-flex align-items-center" id={style.settings}>
                    <FontAwesomeIcon icon={faCog} className="side-icon" />
                    <span>Settings</span>
                  </div>
                </Link>
                <Link to="/manage-user">
                  <div className="d-flex align-items-center" id={style.help}>
                    <FontAwesomeIcon icon={faQuestionCircle} className="side-icon" />
                    <span>Help</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-7" id={style.colMid}>
          <RouteDiv />
        </div>
        <div className="col-md-2" id={style.colRight}>
          <div className="rightBar">
            <ul>
              <Link to="/dashboard/manage-user">
                <div className="d-flex align-items-center pt-4" id={style.manage}>
                  <button className={style.one}>01</button>
                  <span className={style.user}>Manage user<br /> <small>let's you manage user</small></span>

                </div>
              </Link>
              <Link to="/dashboard/manage-user">
                <div className="d-flex align-items-center pt-4" id={style.Groups}>
                  <button className={style.two}>02</button>
                  <span className={style.user}>Manage Groups<br /> <small>let's you manage user</small></span>

                </div>
              </Link>
              <Link to="/dashboard/manage-user">
                <div className="d-flex align-items-center pt-4" id={style.roles}>
                  <button className={style.three}>03</button>
                  <span className={style.user}>Manage Roles<br /> <small>let's you manage user</small></span>

                </div>
              </Link>
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
}

export default App;
