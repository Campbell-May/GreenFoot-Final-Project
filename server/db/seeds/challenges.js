exports.seed = function (knex) {
  return knex('challenges').del()
    .then(function () {
      return knex('challenges').insert([
        { id: 1,
          title: 'Dairy-Free day',
          description: 'Go an entire day with no dairy!',
          points: 5,
          level: 'easy',  
        },
        { id: 2,
          title: 'Meat-Free Monday',
          description: 'One day with no meat, try firm tofu maybe?',
          points: 5,
          level: 'easy'
        },
        { id: 3,
          title: 'No Cheese Tuesday',
          description: 'Go one day with no cheese! Nutritional yeast is an excellent substitute for your pasta dishes',
          points: 5,
          level: 'easy' 
        },
        {id: 4,
          title: 'Whale-Buddy Wednesday',
          description: 'No seafood for a day. Flax seed oil is a good source of omega-3 :)',
          points: 5,
          level: 'easy'
        },
        {id: 5,
          title: 'Bus Brigadier',
          description: 'Use the bus instead of your personal car',
          points: 10,
          level: 'medium',
        },
        {id: 6,
          title: 'Carpool Campaigner',
          description: 'Take more people with you on your route',
          points: 10,
          level: 'medium'
        },
        {id: 7,
          title: 'Reusable Ranger',
          description: 'Only use reusable packaging for your takeout meals! Have you tried Reusabowl?',
          points: 10,
          level: 'medium',
        },
        {id: 8,
          title: 'Local Lover',
          description: 'Shop at your local farmers market',
          points: 10,
          level: 'medium',
        },
        {id: 9,
          title: 'Takeaweek Off',
          description: 'No takeaways for a week! Reduce waste!',
          points: 15,
          level: 'hard'},
        {id: 10,
          title: 'Soil Saint',
          description: 'Create your own compost waste bin',
          points: 15,
          level: 'hard'},
        {id: 11,
          title: 'Surfers vs Sewage',
          description: 'Clean up at the beach!',
          points: 15,
          level: 'hard'},
        {id:12,
        title: 'Plastic Free Padawan',
        description: 'No plastic packaging for a week!',
        points: 15,
        level: 'hard'}
      ])
    })
}
