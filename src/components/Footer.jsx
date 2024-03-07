import styles from '../styles/Footer.module.css';

function Footer(){
    return(
        <div className={styles.footer} class='flex justify-center text-white font-medium bg-black p-2 w-full'>
            <p>© CollaboraCode 2023</p>
        </div>

    );
}

export default Footer;