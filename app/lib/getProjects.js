const Airtable = require('airtable')

const base = new Airtable({
    apiKey: process.env.NEXT_APP_AUTH_TOKEN
}).base(process.env.NEXT_APP_BASE_ID)

const table = base(process.env.NEXT_APP_TABLE_ID)

const getCardedRecords = records => {
    return records.map(record => getCardedRecords(record))
}

export default async function getProjects() {
    const records = await table.select({}).all()
    console.log(records)
}