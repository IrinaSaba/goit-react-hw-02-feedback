import s from './Notification.module.scss'
const Notification = ({message}) => {
   return ( 
      <p className={s['message']}>{message}</p>
    );
}
 
export default Notification;