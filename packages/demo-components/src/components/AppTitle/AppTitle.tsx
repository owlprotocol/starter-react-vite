// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const AppTitle = (_: any) => {
    const metaTitle = import.meta.env.VITE_APP_TITLE
    const processTitle = process.env.VITE_APP_TITLE
    return <ul>
        <li>import.meta.env.VITE_APP_TITLE: {metaTitle}</li>
        <li>process.env.VITE_APP_TITLE: {processTitle}</li>
    </ul>
}
