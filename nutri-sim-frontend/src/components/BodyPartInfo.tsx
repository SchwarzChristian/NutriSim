function BodyPartInfo(partName: string) : JSX.Element {
    return <table>
        <tr>
            <th colSpan={2}>{partName}</th>
        </tr>
        <tr>
            <th></th>
        </tr>
    </table>
    
}

export { BodyPartInfo };