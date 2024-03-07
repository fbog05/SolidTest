import logotype from '../assets/logotype.svg';
import logo from '../assets/logo.svg';
import info from '../assets/info.png';

import styles from '../styles/SignUp.module.css';

import { createSignal } from 'solid-js';
import { Link } from "solid-app-router";
import App from '../App';
import Login from './Login';
import Footer from '../components/Footer';

function SignUp() {

    const [showInfo, setShowInfo] = createSignal(false);

    return (
        <div>
            <div class='p-6 shadow-2xl w-full' className={styles.navi}>
                <ul class='flex flex-row justify-between'>
                    <li class='flex flex-1'>
                        <Link href='/' component={App}>
                            <img src={logo} alt="CollaboraCode Logo" className={styles.logo} onClick={() => handleButtonClick("/")} />
                        </Link>
                    </li>
                    <li class='flex flex-1 justify-center'>
                        <img src={logotype} alt="CollaboraCode" className={styles.logotype} />
                    </li>
                </ul>
            </div>
            <div className={styles.hatter} class="h-full">
                <div class="pt-16">
                    <h2 class="text-3xl font-medium mb-8 text-white text-center mt-10">Regisztráció</h2>
                    <form className={styles.form} class="w-full max-w-xl">
                        <div>
                            <div class="flex flex-col -mx-3 mb-6 items-center">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-white text-xs font-medium mb-2" for="grid-first-name">
                                        Keresztnév
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-blue-400 focus:shadow-outline focus:bg-white" id="grid-first-name" type="text" placeholder="Keresztnév" />
                                </div>
                                <div class="w-full md:w-1/2 px-3 mb-3">
                                    <label class="block uppercase tracking-wide text-white text-xs font-medium mb-2" for="grid-last-name">
                                        Vezetéknév
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-blue-400 focus:shadow-outline focus:bg-white" id="grid-last-name" type="text" placeholder="Vezetéknév" />
                                </div>
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-white text-xs font-medium mb-2" for="grid-email">
                                        E-mail cím
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-blue-400 focus:shadow-outline focus:bg-white" id="grid-email" type="text" placeholder="E-mail cím" />
                                </div>
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-white text-xs font-medium mb-2" for="grid-password1">
                                        Jelszó
                                        <div className={styles.infoicon} onmouseover={() => setShowInfo(true)} onmouseout={() => setShowInfo(false)}>
                                            <img src={info} alt="info" className={styles.info} />
                                            {showInfo() && (
                                                <span className={styles.infotext} style={{ opacity: showInfo() ? '1' : '0' }}>
                                                    <ul class="normal-case text-sm">
                                                        <li>A jelszónak tartalmaznia kell:</li>
                                                        <li>— minimum 8, maximum 30 karaktert</li>
                                                        <li>— legalább 1 számot</li>
                                                        <li>— kis- és nagybetűket</li>
                                                    </ul>
                                                </span>
                                            )}
                                        </div>
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-blue-400 focus:shadow-outline focus:bg-white" id="grid-password1" type="text" placeholder="********" />
                                </div>
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-white text-xs font-medium mb-2" for="grid-password2">
                                        Jelszó újra
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-blue-400 focus:shadow-outline focus:bg-white" id="grid-password2" type="text" placeholder="********" />
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex justify-center">
                            <button class="transition ease-in-out bg-white hover:-translate-y-1 hover:scale-105 hover:bg-blue-100 text-blue-900 font-medium py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="submit">
                                Regisztráció
                            </button>
                        </div>
                    </form>
                </div>
                <div class="text-center py-7 text-white">
                    <p class="fiok">Már van fiókja?</p>
                    <Link href='/login' component={Login} class="underline hover:text-blue-950">Lépjen be itt</Link>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default SignUp;