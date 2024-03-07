import { Link, useRoutes } from "solid-app-router";
import logo from '../assets/logo.svg';
import logotype from '../assets/logotype.svg';
import styles from '../styles/Nav.module.css';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

function Nav() {
    const routes = {
        "/login": <Login />,
        "/sign-up": <SignUp />
    };
    const RouteComponent = useRoutes(routes);

    return (
        <div>
            <div class='p-6 shadow-2xl w-full' className={styles.navi}>
                <ul class='flex flex-row justify-between'>
                    <li class='flex flex-1'>
                        <img src={logo} alt="CollaboraCode Logo" className={styles.logo} />
                    </li>
                    <li class='flex flex-1 justify-center'>
                        <img src={logotype} alt="CollaboraCode" className={styles.logotype} />
                    </li>
                    <li class='mr-6 flex flex-1 justify-end'>
                        <Link href="/login" class='text-white hover:text-sky-600 font-medium'>Belépés</Link>
                        <Link href="/sign-up" class='text-white hover:text-sky-600 font-medium ml-8'>Regisztráció</Link>
                    </li>
                </ul>
            </div>
            <RouteComponent />
        </div>
    );
}

export default Nav;