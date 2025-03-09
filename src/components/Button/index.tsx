
type Props = {

    option : string;
    children?: React.ReactNode;
    onClick?: () => void;
}

const index = ({onClick, option}: Props) => {

    const capitalize = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

   

    const capitalized = capitalize(option)
  return (
    
      <button onClick={onClick} className={`btn btn-${option == 'editar' ? 'primary' : 'danger' }`}>{capitalized} quehacer </button>
  )
}
export default index