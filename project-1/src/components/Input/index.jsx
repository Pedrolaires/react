import './styles.css';

export const TextInput = (props) => {
  return (
    <input placeholder="Type your search" className="text-input"
      value={props.value} type="search" onChange={props.onChange} />
  )
}