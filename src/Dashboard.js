import style from './Dashboard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faHeart, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import RouteDiv from './RouteDiv/RouteDiv';
function App() {
  let { url } = useRouteMatch();
  const location = useLocation()
  console.log('path_16', location.pathname)
  return (
    <section className="container" id={style.dashboard}>
      <div className="row">
        <div className="col-md-3" id={style.colLeft}>
          <div className="">
            <Link to="/dashboard/manage-user"> <h3 id={style.logo}>shopKpr</h3></Link>
          </div>

          <div className=" mt-4 pt-4">

            <ul className={style.list}>
              <li>
                <Link to={`${url}/manage-user`}>
                  <div className="d-flex align-items-center" id={style.admin}>
                    <FontAwesomeIcon icon={faUsers} className="side-icon" />
                    <span>Admin</span>
                  </div>
                </Link>
                <Link to="/dashboard/manage-user">
                  <div className="d-flex align-items-center" id={style.products}>
                    <FontAwesomeIcon icon={faHeart} className="side-icon" />
                    <span>Products</span>
                  </div>
                </Link>
                <Link to="/dashboard/manage-user">
                  <div className="d-flex align-items-center" id={style.settings}>
                    <FontAwesomeIcon icon={faCog} className="side-icon" />
                    <span>Settings</span>
                  </div>
                </Link>
                <Link to="/dashboard/manage-user">
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
              <p className={style.rightTitle}>add,edit,delete, mange user</p>
              <Link to="/dashboard/manage-user">
                <div className="d-flex align-items-center pt-4" id={style.manage}>
                  <button className={(location.pathname === '/dashboard/manage-user') ? style.redBtn : style.greenBtn}>01</button>
                  <span className={style.user}>Manage user<br /> <small>let's you manage user</small></span>
                </div>
              </Link>
              <Link to="/dashboard/manage-group">
                <div className="d-flex align-items-center pt-4" id={style.Groups}>
                  <button className={(location.pathname === '/dashboard/manage-group') ? style.redBtn : style.greenBtn}>02</button>
                  <span className={style.user}>Manage Groups<br /> <small>let's you manage group</small></span>
                </div>
              </Link>
              <Link to="/dashboard/manage-role">
                <div className="d-flex align-items-center pt-4" id={style.roles}>
                  <button className={(location.pathname === '/dashboard/manage-role') ? style.redBtn : style.greenBtn}>03</button>
                  <span className={style.user}>Manage Roles<br /> <small>let's you manage role</small></span>
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
