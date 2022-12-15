const initialState = {

    tables: [

            {
                id: 1,
                status: "Free",
                peopleAmount: 0,
                maxPeopleAmount: 5,
                bill: 0
            },
            {
                id: 2,
                status: "Cleaning",
                peopleAmount: 0,
                maxPeopleAmount: 6,
                bill: 0
           },

           {
                id: 3,
                status: "Busy",
                peopleAmount: 3,
                maxPeopleAmount: 5,
                bill: 110
          }

    ],

    statuses: ['Free', 'Busy', 'Cleaning', 'Reserved']
}

export default initialState