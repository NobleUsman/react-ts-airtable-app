import React from 'react'
import Airtable from 'airtable'

// type fields = {
//   Name: string,
//   Students: string[]
// }

// interface Record {
//   fields: fields
// }

const Test = () => {
  
    const base = new Airtable({ apiKey: 'key8cRHSfaIIISczg' }).base('app8ZbcPx7dkpOnP0')

    const ClassesTable = base('Classes')
    const StudentsTable = base('Students')

    // const getRecordById = async () => {
    //     const record = await table.find('rectGHWsZVmkeRwGh')
    //     console.log(`RECORD : ${JSON.stringify(record)}`)
    // }

    ClassesTable.find('rectGHWsZVmkeRwGh', function(err, record) {
      if (err) { console.error(err); return; }
      console.log('Retrieved', record);

      console.log(`class : ${record?.fields.Name}`)
    })


    // console.log(`classesArr : ${classesArr}`)
    // getRecordById()

    // const URL = `https://api.airtable.com/v0/app8ZbcPx7dkpOnP0/Students`
    // const query = `?filterByFormula=`
    // const filterBy = `SEARCH("Jenny", {Name})`



    return (
    <div>test</div>
  )
}

export default Test