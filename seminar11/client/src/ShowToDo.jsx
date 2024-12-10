function ShowToDo(props) {
    const { data } = props;

    return <li>{data.title}</li>
}

export default ShowToDo;