const users = [
    {userId: 1, username: "tom", attributes: ["Nice", "Cute"]},
    {userId: 2, username: "Mike", attributes: ["Lovely"] },
    {userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
];

const rta = users.map(user => user.attributes).flat();
const rta2 = users.flatMap(user => user.attributes);//con flatMap realiza la iteracion y al mismo tiempo va aplanando 
console.log('map-flat', rta);
console.log('rta2', rta2);

//reto del calendar

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

  const rtaReto = Object.values(calendars).flat().map(item => item.startDate);
console.log(rtaReto);