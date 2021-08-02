import style from './Footer.module.css'

const Footer = (props) => {
    return (
        <div>
        <div className={style.footer}>
            @2021 <a href="https://www.instagram.com/lizard_el_org/">My Instagram</a>. Rain mod player for you. <a href="https://vk.com/jotarokujo4242">My VK</a>
        </div>
        <div className={style.footer2}>
            This site uses cookies. <a href="https://rainymood.com/privacy-app.php">Privaci politic</a>
        </div>
        </div>
    );
}

export default Footer;