/**
 * create h1 with hello world using React
 */


const h1 = (
    <h1>
        <span>
            <u>
                hello world with underline
            </u>
        </span>
    </h1>
)

// const h1 = React.createElement(
//     'h1', 
//     null, 
//     React.createElement(
//         'span', 
//         null,
//         React.createElement(
//             'u', 
//             null, 
//             'hello world wiuth underline'
//         )
//     )
// );

const root = document.getElementById('root');
ReactDOM.render(h1, root);