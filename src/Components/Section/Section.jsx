import s from './Section.module.scss'
const Section = ({children, title}) => {
   return ( 
      <>
      <h1 className={s["title"]}>{title}</h1>
      <div>{children}</div>
      </>
    );
}
 
export default Section;