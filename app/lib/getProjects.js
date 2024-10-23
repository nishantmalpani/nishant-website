import Card from "../../components/Card"
const Airtable = require('airtable')

const base = new Airtable({
    apiKey: process.env.NEXT_APP_AUTH_TOKEN
}).base(process.env.NEXT_APP_BASE_ID)

const table = base(process.env.NEXT_APP_TABLE_ID)


const getCardedRecords = records => {
    return records.map(record => cardRecords(record))
}

const cardRecords = record => {
    return <Card name={record.fields.Name} role={record.fields.Role} date={record.fields.Date}
    description = {record.fields.Description} image = {record.fields.URL}></Card>
}

export default async function getProjects() {
    const records = await table.select({}).all()
    const allCards = await getCardedRecords(records);
    return (
        allCards
    )
}  