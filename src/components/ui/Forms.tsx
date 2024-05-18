export function BasicForm(
    {children, title}:
    {
        children: JSX.Element[],
        title: string
    }
) {
    return (
        <form>
            <h2>{title}</h2>
            {children}
        </form>
    )
}