import base from './base'
import produce from 'immer'

export default base({
  initialState: {
    items: [
      {
        id  : 1,
        name: 'Job 1'
      },
      {
        id  : 2,
        name: 'Job 2'
      }
    ]
  },
  namespace: 'krowdy',
  store    : 'jobs'
}).extend({
  creators: ({ types }) => ({
    addJob: () => ({ type: types.ADD_JOB })
  }),
  reducer: (state, action, { types }) =>
    produce(state, draft => {
      switch (action.type) {
        case types.ADD_JOB:
          draft.items = [
            ...draft.items,
            {
              id  : Math.random().toString(36).substr(2, 9),
              name: `job${Math.random().toString(36).substr(2, 9)}`
            }
          ]

          return

        default:
          return
      }
    }),
  types: [
    'ADD_JOB'
  ]
})
