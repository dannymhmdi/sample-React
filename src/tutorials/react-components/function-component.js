/**
 * function FunctionComponent() {
 *      ...
 *      return jsx
 * }
 * 
 * const FunctionComponent = () => {
 *   ....
 *   return jsx
 * }
 */
const style = {
    padding : '30px',
    backgroundColor: '#f1f1f1',
    marginBottom: '20px',
    textAlign: 'center'
}

export const FunctionComponent1 = () => {
    return (
        <div style={style}>
            <h2>Hello Function Component</h2>
        </div>
    )
}

export const FunctionComponent2 = (props) => {
    return (
        <div style={{...style, backgroundColor: 'lightgreen'}}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </div>
    )
}

export const FunctionComponent3 = ({ title, message }) => {
    // const { title, message } = props;
    return (
        <div style={{...style, backgroundColor: 'greenyellow'}}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    )
}

export const FunctionComponent4 = (props) => {
    console.log(props);
    return (
        <div style={{...style, backgroundColor: 'hotpink'}}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
            {props.children}
        </div>
    )
}

export const FunctionComponent5 = ({ title, message, children}) => {
    
    return (
        <div style={{...style, backgroundColor: 'yellowgreen'}}>
            <h2>{title}</h2>
            <p>{message}</p>
            {children}
        </div>
    )
}