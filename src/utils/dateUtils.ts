export function formatDate(dateString: string): string {
    const obj = new Date(dateString);
    const aux = (obj.getMonth() + 1);
    const month =  (aux < 10) ? `0${aux}` : aux;
    return `${obj.getDate()}/${month}/${obj.getFullYear()}`;
}