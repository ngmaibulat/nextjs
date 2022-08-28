import { parseISO, format } from 'date-fns';

export default function DateComponent(props)
{
    let date;
    let dt;

    if (!props) {
        date = new Date();
        dt = format(date, 'LLLL d, yyyy');
    }
    else if ('dateString' in props && props.dateString) {
        date = parseISO(props.dateString);
        dt = format(date, 'LLLL d, yyyy');
    }
    else {
        date = new Date();
        dt = format(date, 'LLLL d, yyyy');
    }

    return <time dateTime={props.dateString}>{dt}</time>;
}
