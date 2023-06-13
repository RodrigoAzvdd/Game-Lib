import style from "./style.module.css"

export default function LinkBtn({ href, text, target }) {
    return (
        <a className={style.LinkBtn} href={href} target={target}  >{text}</a>
    )
}