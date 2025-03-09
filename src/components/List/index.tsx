import Button from '../Button'
import styles from './List.module.css'

type Props = {

    data : string[];
    onRemoveTodo: (index: number) => void;
    onEditTodo: (index: number) => void;
}

console.log(styles);
const index = ({data, onRemoveTodo, onEditTodo}: Props) => {

  return (
    <ul className={`list-group`}>
        {data.map((elemento, i) => ( 
            <li key={i} className={`list-group-item ${styles.li}`}>
                <span>{elemento}</span>
                <Button option='editar'  onClick={() => onEditTodo(i)} />
                <Button option='eliminar' onClick={() => onRemoveTodo(i)} />
            </li>
            ))}
</ul>
  )
}

export default index